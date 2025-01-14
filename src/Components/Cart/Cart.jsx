import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import { cartAtom, totalProductsCount } from "./ShoppingCart";
import { useAtom } from "jotai";
import InCartProduct from "./InCartProduct";

const CartWrapper = styled.div`
  position: relative;
`;

const CartButton = styled.button`
  position: relative;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 5px;
  font-size: 2rem;
  color: gray;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0 5px;
  &.active {
    svg {
      transition: all 0.2s;
      color: var(--blue-200);
      & > :nth-child(4) {
        fill: var(--blue-200);
        transition: all 0.2s;
      }
    }
  }

  &:hover {
    color: black;
    transition: color 0.3s;
  }
`;

const TotalItemsInside = styled.span`
  background-color: var(--accent-500);
  position: absolute;
  padding: 1px 8px;
  border-radius: 10px;
  right: 0;
  top: -5px;
  color: var(--blue-800);
  font-size: 0.8rem;
`;

const CartModal = styled.div`
  --width: 325px;
  --height: 245px;
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: var(--width);
  height: 0px;
  z-index: 1;
  left: 0;
  top: 55px;
  transform: translate(-45%, 0);
  box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.25);
  border-radius: 1em;
  background-color: white;
  overflow: hidden;
  transition: all 0.2s;

  &.active {
    height: var(--height);
    transition: all 0.3s;
  }

  @media only screen and (max-width: 890px) {
    --width: 300px;
    --height: 220px;
    padding-bottom: 1em;
    left: -45px;
  }
`;

const CartWindow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CartTitle = styled.div`
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  padding: 1em;
  font-weight: 600;
  font-size: 1.1rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  color: gray;
  font-weight: 400;
`;

const CheckoutBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  background-color: var(--accent-500);
  color: var(--blue-200);
  text-align: center;
  width: 90%;
  padding: 1em 0;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: hsl(from var(--accent-500) h s 70%);
    transition: all 0.3s;
  }
`;

function Cart() {
  const [openCart, setOpenCart] = useState(false);
  const [cart] = useAtom(cartAtom);

  const [totalProductsInCart] = useAtom(totalProductsCount);

  return (
    <CartWrapper>
      <CartButton
        role="button"
        onClick={() => setOpenCart(!openCart)}
        className={`${openCart ? "active" : ""}`}
      >
        <IoCartOutline />
        {cart.length > 0 && (
          <TotalItemsInside>{totalProductsInCart}</TotalItemsInside>
        )}
      </CartButton>

      <CartModal className={`${openCart ? "active" : ""}`}>
        <CartWindow>
          <CartTitle>
            <span>Cart</span>
          </CartTitle>

          <CartItems>
            {cart.length === 0 && <span>Your cart is empty.</span>}
            {cart.length > 0 &&
              cart.map((product) => (
                <InCartProduct product={product} key={product.id} />
              ))}

            {cart.length > 0 && (
              <CheckoutBtn type="button" role="button">
                Checkout
              </CheckoutBtn>
            )}
          </CartItems>
        </CartWindow>
      </CartModal>
    </CartWrapper>
  );
}

export default Cart;
