import React from "react";
import { useRecoilState } from "recoil";
import { cartState, KEY_CART } from "./cartAtom";

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  React.useEffect(() => {
    localStorage.setItem(KEY_CART, JSON.stringify(cart));
  }, [cart]);
  return [cart, setCart];
};
export default useCart;
