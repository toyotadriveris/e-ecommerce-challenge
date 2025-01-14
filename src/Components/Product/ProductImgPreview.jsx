import styled from "styled-components";
import productimg from "../../assets/images/image-product-1.jpg";
import productimgone from "../../assets/images/image-product-1-thumbnail.jpg";
import productimgtwo from "../../assets/images/image-product-2-thumbnail.jpg";
import productimgthree from "../../assets/images/image-product-3-thumbnail.jpg";
import productimgfour from "../../assets/images/image-product-4-thumbnail.jpg";
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
  min-width: 300px;
  img {
    height: auto;
  }
  cursor: pointer;
`;
const ProductImagesCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  max-width: 410px;
  padding: 10px;
  width: 100%;
  transition: all 0.2s;

  @media only screen and (max-width: 450px) {
    width: 0%;
    height: 0%;
    transition: all 0.3s;
  }
`;

const ThumbImgContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
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
    @media only screen and (max-width: 450px) {
      width: 0;
      height: 0;
      box-shadow: 0px 0px 0px 0px rgba(255, 166, 0, 1);
      transition: all 0.2s;
    }
  }

  img {
    height: auto;
  }
`;

function ProductImgPreview() {
  return (
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

        <ThumbImgContainer>
          <img
            width="85px"
            height="85px"
            src={productimgtwo}
            alt="product img"
          />
        </ThumbImgContainer>

        <ThumbImgContainer>
          <img
            width="85px"
            height="85px"
            src={productimgthree}
            alt="product img"
          />
        </ThumbImgContainer>

        <ThumbImgContainer>
          <img
            width="85px"
            height="85px"
            src={productimgfour}
            alt="product img"
          />
        </ThumbImgContainer>
      </ProductImagesCarousel>
    </ProductImageLayout>
  );
}

export default ProductImgPreview;
