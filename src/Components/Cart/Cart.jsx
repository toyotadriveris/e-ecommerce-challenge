import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import { cartAtom } from "./ShoppingCart";
import { useAtom } from "jotai";
import { FaTrash } from "react-icons/fa";

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

    &.inside {
    }
  }

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
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  color: gray;
  font-weight: 400;
`;

const InCartProduct = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
const ProductImg = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;
const ProductInfo = styled.div`
  font-size: 0.9rem;
  text-align: left;
  p {
    text-transform: capitalize;
  }
  strong {
    color: var(--blue-200);
    padding: 0 4px;
  }
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: var(--blue-600);
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
  const [cart, setCart] = useAtom(cartAtom);

  function handleDeleteItem(id) {}

  return (
    <CartWrapper>
      <CartButton
        role="button"
        onClick={() => setOpenCart(!openCart)}
        className={`${openCart ? "active" : ""}`}
      >
        <IoCartOutline />
      </CartButton>

      <CartModal className={`${openCart ? "active" : ""}`}>
        <CartWindow>
          <CartTitle>
            <span>Cart</span>
          </CartTitle>

          <CartItems>
            {cart.length === 0 && <span>Your cart is empty.</span>}

            <InCartProduct>
              <ProductImg>
                <img
                  width="50px"
                  height="50px"
                  src="/src/assets/images/image-product-1.jpg"
                  alt="product img"
                />
              </ProductImg>

              <ProductInfo>
                <p>fall limited edition sneakers</p>
                <span>
                  $125 x 3 <strong>$375.00</strong>
                </span>
              </ProductInfo>

              <DeleteBtn onClick={handleDeleteItem} type="button" role="button">
                <FaTrash />
              </DeleteBtn>
            </InCartProduct>

            <CheckoutBtn type="button" role="button">
              Checkout
            </CheckoutBtn>
          </CartItems>
        </CartWindow>
      </CartModal>
    </CartWrapper>
  );
}

export default Cart;
