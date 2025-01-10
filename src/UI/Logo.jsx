import styled from "styled-components";
import logoImg from "../assets/images/logo.svg";

const StyledLogo = styled.div`
  cursor: pointer;
  min-width: 120px;
  transition: all 0.2s;
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={logoImg} alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
