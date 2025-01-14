import { products } from "./products";
import styled from "styled-components";

import ProductImgPreview from "./ProductImgPreview";
import ProductInfo from "./ProductInfo";
import { useSearchParams } from "react-router-dom";

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

function Product() {
  const [searchParams] = useSearchParams();
  const productQuery = searchParams.get("productid");

  const product = products.find((product) => product.id === productQuery);

  return (
    <Layout>
      <ProductImgPreview product={product} />

      <ProductInfo product={product} />
    </Layout>
  );
}

export default Product;
