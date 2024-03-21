export default function calculateTotal(items) {
  return items.reduce((acc, item) => {
    return acc + item.discountedPrice * item.quantity;
  }, 0);
}
