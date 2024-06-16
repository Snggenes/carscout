export function roundAndConvert(number: number) {
  let roundedNumber = Math.round(number / 100) * 100;

  let decimalNumber = roundedNumber / 1000;

  return decimalNumber;
}
export function capitalizeFirstLetter(string: string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
