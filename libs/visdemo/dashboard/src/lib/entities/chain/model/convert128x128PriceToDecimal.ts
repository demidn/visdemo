import Decimal from "decimal.js"

const PRECISION = 1e18
const SCALE_OFFSET = 128

export function convert128x128PriceToDecimal(price: Decimal.Value) {
  const decimal = new Decimal(price)
  return decimal.mul(PRECISION).div(new Decimal(2).pow(SCALE_OFFSET))
}
