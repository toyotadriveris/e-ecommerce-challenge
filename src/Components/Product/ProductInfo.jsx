import { useAtom } from "jotai";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import { cartAtom } from "../Cart/ShoppingCart";

const ProductInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const SellerAndProductName = styled.div`
  span {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--blue-400);
    letter-spacing: 2px;
    font-size: 0.85rem;
  }

  h1 {
    padding: 10px 0;
    font-size: 2.8rem;
    text-transform: capitalize;
    color: var(--text);
  }
`;
const ProductDescription = styled.div`
  p {
    padding: 10px 0;
    padding-top: 20px;
    color: var(--blue-400);
  }
`;
const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.2s;
  @media only screen and (max-width: 680px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 150px;
    transition: all 0.2s;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    transition: all 0.2s;
  }
`;
const FinalPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  strong {
    font-size: 1.6rem;
    color: var(--blue-200);
  }
  span {
    background-color: var(--blue-200);
    color: var(--blue-800);
    border-radius: 5px;
    padding: 2px 6px;
    font-size: 0.7rem;
    font-weight: 600;
  }
`;
const OriginalPrice = styled.div`
  span {
    color: var(--blue-400);
    text-decoration: line-through;
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

const ProductCounterAndBtn = styled.div`
  padding: 2em 0;
  display: flex;
  align-items: center;
  gap: 1em;
  transition: all 0.2s;
  @media only screen and (max-width: 680px) {
    justify-content: center;
    transition: all 0.2s;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    max-width: 100%;
    transition: all 0.2s;
  }
`;
const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 9em;
  padding: 0.7em;
  justify-content: space-between;
  background-color: var(--blue-800);
  border-radius: 10px;
  transition: all 0.2s;
  button {
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    background-color: transparent;
    color: var(--accent-500);
    &:hover {
      color: hsl(from var(--accent-500) h s 70%);
      transition: all 0.3s;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    max-width: 18em;
    transition: all 0.2s;
  }
`;
const AddToCartBtn = styled.button`
  padding: 0.8em 2em;
  width: min(20em, 55%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  svg {
    font-size: 1.4rem;
  }
  background-color: var(--accent-500);
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--text);
  transition: all 0.2s;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:not([disabled]):hover {
    background-color: hsl(from var(--accent-500) h s 70%);
    transition: all 0.3s;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    max-width: 20em;
    transition: all 0.2s;
  }
`;

function ProductInfo({ product = [] }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useAtom(cartAtom);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  }

  let finalProductPrice = Number(product.price);
  const productDiscount = product.discount;

  if (productDiscount > 0) {
    finalProductPrice = product.price * (productDiscount / 100);
  }

  function handleAddProduct() {
    const currentQuantity = quantity;
    const item = {
      id: product.id,
      title: product.title,
      price: finalProductPrice,
      quantity: currentQuantity,
      img: product.images.ImgOne,
    };

    if (cart.find((product) => product.id === item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity: product.quantity + currentQuantity,
              }
            : product
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  }

  return (
    <ProductInfoLayout>
      <SellerAndProductName>
        <span>{product.seller}</span>
        <h1>{product.title}</h1>
      </SellerAndProductName>

      <ProductDescription>
        <p>{product.description}</p>
      </ProductDescription>

      <ProductPrice>
        {product.discount > 0 && (
          <>
            <FinalPrice>
              <strong>${finalProductPrice}</strong>
              <span>{productDiscount}%</span>
            </FinalPrice>
            <OriginalPrice>
              <span>${product.price}</span>
            </OriginalPrice>
          </>
        )}

        {product.discount === 0 && (
          <FinalPrice>
            <strong>${product.price}</strong>
          </FinalPrice>
        )}
      </ProductPrice>

      <ProductCounterAndBtn>
        <ProductCounter>
          <button type="button" onClick={handleDecrement}>
            <FaMinus />
          </button>

          <strong>{quantity}</strong>

          <button type="button" onClick={handleIncrement}>
            <FaPlus />
          </button>
        </ProductCounter>

        <AddToCartBtn
          disabled={product.stock === 0}
          role="button"
          type="button"
          onClick={handleAddProduct}
        >
          <IoCartOutline /> Add to cart
        </AddToCartBtn>
      </ProductCounterAndBtn>
    </ProductInfoLayout>
  );
}

export default ProductInfo;
