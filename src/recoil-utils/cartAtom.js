import { atom } from "recoil";

export const KEY_CART = "cart";

export const cartState = atom({
  key: "cart",
  default: JSON.parse(localStorage.getItem(KEY_CART) || "[]"),
});
