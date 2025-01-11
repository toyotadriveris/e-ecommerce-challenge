import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

const CartWrapper = styled.div`
  position: relative;
`;

const CartButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: 5px;
  font-size: 2rem;
  color: gray;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0 5px;

  &:hover {
    color: black;
    transition: color 0.3s;
  }
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
    transition: 0.3s;
  }

  @media only screen and (max-width: 890px) {
    --width: 224px;
    --height: 130px;
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
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 400;
`;

function Cart() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <CartWrapper>
      <CartButton role="button" onClick={() => setOpenCart(!openCart)}>
        <IoCartOutline />
      </CartButton>

      <CartModal className={`${openCart ? "active" : ""}`}>
        <CartWindow>
          <CartTitle>
            <span>Cart</span>
          </CartTitle>

          <CartItems>
            <span>Your cart is empty.</span>
          </CartItems>
        </CartWindow>
      </CartModal>
    </CartWrapper>
  );
}

export default Cart;
