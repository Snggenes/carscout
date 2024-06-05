export function roundAndConvert(number: number) {
  let roundedNumber = Math.round(number / 100) * 100;

  let decimalNumber = roundedNumber / 1000;

  return decimalNumber;
}
