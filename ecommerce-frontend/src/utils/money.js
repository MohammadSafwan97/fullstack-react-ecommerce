export function formatMoney(amount) {
  return `Rs. ${(amount / 100).toFixed(2)}`;
}
