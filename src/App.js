export const add = (a, b) => a + b;

export const total = (shipping, subtotal) => {
  return "$" + add(shipping, subtotal);
};
