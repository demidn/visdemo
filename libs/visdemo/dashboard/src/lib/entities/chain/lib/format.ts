import Decimal from "decimal.js"

import { Token } from '../model/Token';

type Value = Decimal.Value | bigint

export const APPROXIMATE_PRECISIONS: Record<string, number> = {
  USDC: 2,
  WAVAX: 3,
  AVAX: 3,
}

export const DEFAULT_PRECISION = 8
export const DEFAULT_APPROXIMATE_PRECISION = 2

const LOCALE = "en-US"

export const getApproximatePrecision = (symbol: string | undefined) =>
  symbol !== undefined ? APPROXIMATE_PRECISIONS[symbol] ?? DEFAULT_APPROXIMATE_PRECISION : DEFAULT_APPROXIMATE_PRECISION

function makeDecimal(value: Value): Decimal {
  if (value instanceof Decimal) {
    return value
  }

  if (typeof value === 'bigint') {
    return new Decimal(value.toString())
  }

  return new Decimal(value)
}

function format(
  value: Decimal,
  token: Token | undefined,
  isApproximate: boolean,
  withApproximatePrefix: boolean,
  withSymbol: boolean,
): string {
  const decimals =
    token === undefined
      ? DEFAULT_PRECISION
      : isApproximate
        ? APPROXIMATE_PRECISIONS[token.symbol ?? ""] ?? DEFAULT_APPROXIMATE_PRECISION
        : token.decimals ?? DEFAULT_PRECISION

  const formatter = new Intl.NumberFormat(LOCALE, {
    maximumFractionDigits: decimals,
    style: "decimal",
    notation: "compact",
  })

  const resultValue = formatter.format(value.toNumber())

  return `${withApproximatePrefix && isApproximate ? "~" : ""}${resultValue}${withSymbol && token !== undefined ? " " + token.symbol : ""}`
}

export function formatUnits(
  units: Value | undefined,
  token: Token | undefined,
  isApproximate = true,
  withApproximatePrefix = false,
  withSymbol = false,
): string {
  if (units === undefined) {
    return "N/A"
  }

  const decimal = makeDecimal(units)
  return format(
    token !== undefined ? decimal.div(10 ** token.decimals) : decimal,
    token,
    isApproximate,
    withApproximatePrefix,
    withSymbol,
  )
}

export function formatValue(
  value: Value | undefined,
  token: Token | undefined,
  isApproximate = true,
  withApproximatePrefix = false,
  withSymbol = false,
): string {
  if (value === undefined) {
    return "N/A"
  }

  return format(makeDecimal(value), token, isApproximate, withApproximatePrefix, withSymbol)
}

export function formatInUSD(value: Value | undefined, price: Decimal | undefined) {
  if (value === undefined || price === undefined) {
    return "N/A"
  }

  const decimal = makeDecimal(value)

  return `$${decimal.mul(price).toFixed(2)}`
}
