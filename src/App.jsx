import styled from "styled-components";
import Nav from "./Components/Navbar/Nav";
import Product from "./Components/Product/Product";

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

function App() {
  return (
    <>
      <Nav />
      <StyledMain>
        <Product />
      </StyledMain>
    </>
  );
}

export default App;
