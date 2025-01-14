import styled from "styled-components";
import Product from "../Components/Product/Product";
import { useSearchParams } from "react-router-dom";

import { products } from "../Components/Product/products";
import { useEffect } from "react";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;

  & > :first-child {
    width: 80%;
    transition: all 0.2s;
  }

  @media only screen and (max-width: 890px) {
    & > :first-child {
      width: 100%;
      transition: all 0.2s;
    }
  }
`;
function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = products[0].id;

  useEffect(
    function () {
      searchParams.set("productid", productId);

      setSearchParams(searchParams);
    },
    [productId, searchParams, setSearchParams]
  );

  return (
    <StyledMain>
      <Product />
    </StyledMain>
  );
}

export default Home;
