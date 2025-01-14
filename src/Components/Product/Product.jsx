import { products } from "./products";
import styled from "styled-components";
import productimg from "../../assets/images/image-product-1.jpg";
import productimgone from "../../assets/images/image-product-1-thumbnail.jpg";
import productimgtwo from "../../assets/images/image-product-2-thumbnail.jpg";
import productimgthree from "../../assets/images/image-product-3-thumbnail.jpg";
import productimgfour from "../../assets/images/image-product-4-thumbnail.jpg";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(2em, 20%);
  padding: min(6em, 10%) min(1em, 5%);
  & > div {
    flex-basis: 50%;
  }
`;

const ProductImageLayout = styled.div`
  --border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
const ProductImage = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
`;
const ProductImagesCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  max-width: 410px;
  padding: 10px;
  width: 100%;
  transition: all 0.2s;
`;

const ThumbImgContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.3s;
  &.active {
    &::before {
      width: 100%;
      height: 100%;
      background-color: #fff;
      position: absolute;
      content: "";
      opacity: 0.5;
    }
    box-shadow: 0px 0px 0px 2px rgba(255, 166, 0, 1);
  }
`;

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
`;
const AddToCartBtn = styled.button`
  padding: 0.8em 4em;
  display: flex;
  align-items: center;
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
  &:hover {
    background-color: hsl(from var(--accent-500) h s 70%);
    transition: all 0.3s;
  }
`;

function Product() {
  return (
    <Layout>
      <ProductImageLayout>
        <ProductImage>
          <img
            width="400px"
            height="400px"
            className="active"
            src={productimg}
            alt="product img"
          />
        </ProductImage>
        <ProductImagesCarousel>
          <ThumbImgContainer className="active">
            <img
              width="85px"
              height="85px"
              src={productimgone}
              alt="product img"
            />
          </ThumbImgContainer>

          <img
            width="85px"
            height="85px"
            src={productimgtwo}
            alt="product img"
          />
          <img
            width="85px"
            height="85px"
            src={productimgthree}
            alt="product img"
          />
          <img
            width="85px"
            height="85px"
            src={productimgfour}
            alt="product img"
          />
        </ProductImagesCarousel>
      </ProductImageLayout>

      <ProductInfoLayout>
        <SellerAndProductName>
          <span>sneaker company</span>
          <h1>fall limited edition sneakers</h1>
        </SellerAndProductName>

        <ProductDescription>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll will withstand
            everything the weather can offer.
          </p>
        </ProductDescription>

        <ProductPrice>
          <FinalPrice>
            <strong>$125</strong>
            <span>50%</span>
          </FinalPrice>

          <OriginalPrice>
            <span>$250.00</span>
          </OriginalPrice>
        </ProductPrice>

        <ProductCounterAndBtn>
          <ProductCounter>
            <button type="button">
              <FaMinus />
            </button>

            <strong>0</strong>

            <button type="button">
              <FaPlus />
            </button>
          </ProductCounter>

          <AddToCartBtn role="button" type="button">
            <IoCartOutline /> Add to cart
          </AddToCartBtn>
        </ProductCounterAndBtn>
      </ProductInfoLayout>
    </Layout>
  );
}

export default Product;
