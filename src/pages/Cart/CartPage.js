import React from "react";
import { EmptyCart } from "./components/EmptyCart";
import { CartList } from "./components/CartList";
import { useCart } from "../../context/CartContext";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return <main>{cartList.length ? <CartList /> : <EmptyCart />}</main>;
};
