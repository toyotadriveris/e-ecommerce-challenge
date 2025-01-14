import { atom } from "jotai";

export const cartAtom = atom([]);

export const totalProducts = atom((get) =>
  get(cartAtom).reduce((total, product) => total + product.price, 0)
);
