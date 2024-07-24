import { DataSource } from './DataSource';
import { DataSourceMeta } from './DataSourceMeta';
import {
  convert128x128PriceToDecimal, formatUnits, formatValue,
  getActiveId,
  getBin,
  getPriceFromId, getToken,
  getTokenDecimals,
  getTokenX,
  getTokenY,
  POOLS,
  publicClient
} from '../../chain/@x/datasource';
import { LB_PAIR_PROPERTY } from './datasources';
import { Address } from 'viem';
import Decimal from 'decimal.js';
import { unitsToValue } from '../../chain/lib/unitsToValue';

const RADIUS = 3;
export function createTraderJoeDataSource(url: string, meta: DataSourceMeta, bufferLength = 20): DataSource {
  const ds: DataSource = {
    meta,

    async getData(properties: Record<string, string>): Promise<Record<string, unknown>[]> {
      const lbPairAddress = properties[LB_PAIR_PROPERTY.uid] as Address;
      console.log('Getting lbPair', lbPairAddress);
      if (!lbPairAddress) {
        return [];
      }

      // getting tokens addresses
      const tokenXAddress = await getTokenX(publicClient, lbPairAddress);
      const tokenYAddress = await getTokenY(publicClient, lbPairAddress);

      // get tokens
      const tokenX = await getToken(publicClient, tokenXAddress)
      const tokenY = await getToken(publicClient, tokenYAddress)
console.log(tokenX, tokenY)
      const decimalsX = tokenX.decimals;
      const decimalsY = tokenY.decimals;

      const activeId = await getActiveId(publicClient, lbPairAddress);
      const bins = await Promise.all(
        new Array(2 * RADIUS + 1).fill(0).map((_, index) => {
          const id = activeId - RADIUS + index;
          return Promise.all([id, getPriceFromId(publicClient, lbPairAddress, id), getBin(publicClient, lbPairAddress, id)]);
        }),
      );

      return bins.map((bin) => {
        const price = unitsToValue(convert128x128PriceToDecimal(bin[1]), decimalsY);
        console.log('Reserv: ', bin[2][0].toString(), bin[2][1].toString())
        return {
          id: bin[0],
          price: formatValue(price.toString(), tokenY),
          reservesX: unitsToValue(bin[2][0].mul(price), decimalsX, 3).toString(),
          reservesY: unitsToValue(bin[2][1], decimalsY, 3).toString()
        };
      });
    },

    watchData(callback: (data: Record<string, unknown>[]) => void): () => void {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return function () {};
    },
  };

  return ds;
}
