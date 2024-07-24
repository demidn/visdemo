import { DataSourceMeta, Property } from './DataSourceMeta';
import { fetchGetCompanies } from '@xemida/visdemo-api';
import { createSimpleDataSource } from './createSimpleDataSource';
import { createStreamDataSource } from './createStreamDataSource';
import { createTraderJoeDataSource } from './createTraderJoeDataSource';
import { DataSource, DSDatum } from './DataSource';
import { POOLS } from '../../chain/@x/datasource';

const URL_FETCHER_MAP: Record<string, () => Promise<DSDatum[]>> = {
  '/company': () => fetchGetCompanies({}),
};

export const LB_PAIR_PROPERTY: Property = {
  type: 'list',
  uid: crypto.randomUUID(),
  name: 'Available LB Pairs',
  options: POOLS.map((p) => ({ value: p.address, label: `${p.tokenX}/${p.tokenY}` })),
};

const TRADER_JOE_PROPERTIES: Property[] = [LB_PAIR_PROPERTY];

export const DATASOURCES_META: DataSourceMeta[] = [
  {
    uid: crypto.randomUUID(),
    name: 'Random Chart Data',
    type: 'simple',
    url: '/company',
    columns: ['name', 'sales', 'averageSalary'],
    properties: [],
  },
  { uid: crypto.randomUUID(), name: 'Streaming data', type: 'stream', url: '/signals', columns: ['datetime', 'value'], properties: [] },
  {
    uid: crypto.randomUUID(),
    name: 'Trader Joe Bins',
    type: 'custom',
    factory: 'createTraderJoeDataSource',
    columns: ['price', 'reservesX', 'reservesY'],
    properties: TRADER_JOE_PROPERTIES,
  },
];

async function createDataSource(meta: DataSourceMeta) {
  if (meta.type === 'simple') {
    const fetcherOrUrl = URL_FETCHER_MAP[meta.url] ?? meta.url;
    return createSimpleDataSource(fetcherOrUrl, meta);
  }

  if (meta.type === 'stream') {
    return createStreamDataSource(meta.url, meta);
  }

  if (meta.type === 'custom') {
    return import(`./${meta.factory}`).then((module) => module[meta.factory]).then((factory) => factory('', meta));
  }
}

const DATASOURCES: Promise<{ uid: string; ds: DataSource }[]> = Promise.all(
  DATASOURCES_META.map(async (meta) => {
    const ds = await createDataSource(meta);
    if (ds === undefined) {
      console.error(`Failed to create datasource for ${meta.uid}. ${meta}`);
      return undefined;
    }
    return {
      uid: meta.uid,
      ds,
    };
  }),
).then((dss) => dss.filter((ds) => ds !== undefined));

export async function getDatasource(uid: string): Promise<DataSource | undefined> {
  return (await DATASOURCES).find((entry) => entry.uid === uid)?.ds;
}
