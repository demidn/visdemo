import { Address, PublicClient } from 'viem';
import Decimal from 'decimal.js';
import { LBPairV21ABI } from '@traderjoe-xyz/sdk-v2';

const abi = LBPairV21ABI;

export async function getActiveId(client: PublicClient, address: Address): Promise<number> {
  return client.readContract({ address: address as Address, abi, functionName: 'getActiveId' });
}

export async function getBin(client: PublicClient, address: Address, id: number): Promise<[Decimal, Decimal]> {
  return client
    .readContract({ address: address as Address, abi, functionName: 'getBin', args: [id] })
    .then(([reservesX, reservesY]) => [new Decimal(reservesX.toString()), new Decimal(reservesY.toString())]);
}

export async function getPriceFromId(client: PublicClient, address: Address, id: number): Promise<Decimal> {
  return client.readContract({ address, abi, functionName: 'getPriceFromId', args: [id] }).then((bn) => new Decimal(bn.toString()));
}

export async function getActivePrice(client: PublicClient, address: Address): Promise<Decimal> {
  const id = await getActiveId(client, address);
  return client.readContract({ address, abi, functionName: 'getPriceFromId', args: [id] }).then((bn) => new Decimal(bn.toString()));
}

export async function getTokenX(client: PublicClient, address: Address): Promise<Address> {
  return client.readContract({ address, abi, functionName: 'getTokenX' });
}

export async function getTokenY(client: PublicClient, address: Address): Promise<Address> {
  return client.readContract({ address, abi, functionName: 'getTokenY' });
}
