import styled from "styled-components";
import Nav from "./Components/Navbar/Nav";
import Product from "./Components/Product/Product";

const StyledMain = styled.main`
  display: flex;
  width: 80%;
  place-items: center;
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
