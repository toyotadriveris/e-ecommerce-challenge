import styled from "styled-components";
import { useState } from "react";
import { products } from "./products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
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
  }

  @media only screen and (max-width: 460px) {
    width: 70px;
  }

  img {
    height: auto;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  z-index: 100;
  background-color: hsl(from var(--blue-200) h s 5% / 0.9);
  backdrop-filter: blur(2px);
`;
const ImageModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  width: 100%;
  display: grid;

  place-content: center;

  @media only screen and (max-width: 460px) {
    padding: 6em;
  }
`;
const ImageModalContainer = styled.div`
  position: relative;

  img {
    height: auto;
  }
  & > :nth-child(3) {
    border-radius: 15px;
    min-width: 250px;
  }
`;

const RightButton = styled.button`
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  top: 200px;
  right: -40px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  text-align: center;
  color: var(--blue-200);
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    color: var(--accent-500);
    transition: all 0.2s;
  }
`;
const LeftButton = styled.button`
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  top: calc(200px);
  left: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  text-align: center;
  color: var(--blue-200);
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    color: var(--accent-500);
    transition: all 0.2s;
  }
`;

const ModalImagesCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  max-width: 410px;
  padding: 10px;
  width: 100%;
  transition: all 0.2s;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: var(--accent-500);
    transition: all 0.2s;
  }
`;

function ProductImgPreview() {
  const [currentImg, setCurrentImg] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const productImages = Object.values(products[0].images);
  let n = productImages.length;

  return (
    <ProductImageLayout>
      <ProductImage onClick={() => setOpenModal(true)}>
        <img
          width="400px"
          height="400px"
          className="active"
          src={productImages[currentImg]}
          alt="product img"
        />
      </ProductImage>

      {openModal && (
        <Overlay>
          <ImageModal>
            <ImageModalContainer>
              <CloseButton
                type="button"
                role="button"
                onClick={() => setOpenModal(false)}
              >
                <IoClose />
              </CloseButton>

              <LeftButton
                type="button"
                role="button"
                onClick={() => setCurrentImg((prev) => (prev - 1 + n) % n)}
              >
                <FaChevronLeft />
              </LeftButton>
              <img
                width="400px"
                height="400px"
                src={productImages[currentImg]}
                alt="product img"
              />
              <RightButton
                type="button"
                role="button"
                onClick={() => setCurrentImg((prev) => (prev + 1) % n)}
              >
                <FaChevronRight />
              </RightButton>

              <ModalImagesCarousel>
                {productImages.map((img, index) => (
                  <ThumbImgContainer
                    key={index}
                    className={`${index === currentImg ? "active" : ""}`}
                    onClick={() => setCurrentImg(index)}
                  >
                    <img
                      width="85px"
                      height="85px"
                      src={img}
                      alt="product img"
                    />
                  </ThumbImgContainer>
                ))}
              </ModalImagesCarousel>
            </ImageModalContainer>
          </ImageModal>
        </Overlay>
      )}

      <ProductImagesCarousel>
        {productImages.map((img, index) => (
          <ThumbImgContainer
            key={index}
            className={`${index === currentImg ? "active" : ""}`}
            onClick={() => setCurrentImg(index)}
          >
            <img width="85px" height="85px" src={img} alt="product img" />
          </ThumbImgContainer>
        ))}
      </ProductImagesCarousel>
    </ProductImageLayout>
  );
}

export default ProductImgPreview;
