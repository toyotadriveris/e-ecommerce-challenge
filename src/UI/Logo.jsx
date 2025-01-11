import styled from "styled-components";
import logoImg from "../assets/images/logo.svg";

const StyledLogo = styled.div`
  cursor: pointer;
  min-width: 120px;
  transition: all 0.2s;

  @media only screen and (max-width: 890px) {
    width: 120px;
    min-width: 100px;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={logoImg} alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
