const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export default function formatCurrency(amount) {
  const value = Number(amount);
  if (Number.isNaN(value)) {
    return "₦0";
  }
  return formatter.format(value);
}
