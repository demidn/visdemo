import Decimal from "decimal.js"

export function unitsToValue(units: Decimal.Value, decimals: number, decimalPlaces?: number): Decimal {
  const decimal = new Decimal(units).div(10 ** decimals)
  return decimalPlaces !== undefined ? decimal.toDecimalPlaces(decimalPlaces) : decimal
}
