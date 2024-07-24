import { Address, PublicClient } from 'viem';
import { ERC20ABI } from '@traderjoe-xyz/sdk';
import { Token } from '../Token';

const abi = ERC20ABI;

export async function getTokenDecimals(client: PublicClient, address: Address): Promise<number> {
  return client.readContract({ address: address as Address, abi, functionName: 'decimals' });
}

export async function getToken(client: PublicClient, address: Address): Promise<Token> {
  const decimals = await client.readContract({ address: address, abi, functionName: 'decimals' });
  const symbol = await client.readContract({ address: address, abi, functionName: 'symbol' })

  return {
    symbol,
    decimals,
    address
  }
}
