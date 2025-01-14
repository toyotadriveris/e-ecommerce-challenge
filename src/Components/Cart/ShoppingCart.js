import { atom } from "jotai";

export const cartAtom = atom([]);

export const totalProductsPrice = atom((get) =>
  get(cartAtom).reduce((total, product) => total + product.price, 0)
);

export const totalProductsCount = atom((get) => {
  const cart = get(cartAtom);
  if (cart.length === 0) return 0;

  return cart.reduce((total, product) => {
    const quantity = Number(product.quantity) || 1;
    return total + quantity;
  }, 0);
});
