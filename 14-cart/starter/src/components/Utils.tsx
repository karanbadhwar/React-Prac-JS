export const getTotal = (
  cart: Map<
    string,
    {
      id: string;
      name: string;
      price: string;
      amount: number;
      img: string;
    }
  >
) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * parseFloat(price);
  }
  return { totalAmount, totalCost };
};
