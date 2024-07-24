import { Address } from 'viem';

export interface Token {
  address: Address;
  symbol: string;
  decimals: number
}
