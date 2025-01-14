import styled from "styled-components";
import Nav from "./Components/Navbar/Nav";
import Product from "./Components/Product/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { Provider } from "jotai";

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
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
