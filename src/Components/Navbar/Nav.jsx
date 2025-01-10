/* eslint-disable react/jsx-no-undef */
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import profilePic from "../../assets/images/image-avatar.png";
import Logo from "../../UI/Logo";
import NavNavigation from "./NavNavigation";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 2em;
  padding: 2em 0;
  border-bottom: 1px solid var(--border-color);

  @media only screen and (max-width: 890px) {
    width: 100%;
    padding: 2em;
  }
`;

const NavButtons = styled.div`
  margin-right: auto;
`;

const CartAndProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2.5em;

  .profile-pic {
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;
    min-width: 50px;
    &:hover {
      box-shadow: 0px 0px 0px 2px rgba(255, 166, 0, 1);
      transition: all 0.3s;
    }
  }

  .cart-wrapper {
    position: relative;
  }

  .cart {
    font-size: 2.5rem;
    color: gray;
    cursor: pointer;
    transition: color 0.2s;
    padding: 0 5px;

    &:hover {
      color: black;
      transition: color 0.3s;
    }
  }

  @media only screen and (max-width: 890px) {
    gap: 1em;
  }
`;

const CartModal = styled.div`
  --width: 325px;
  --height: 245px;
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: var(--width);
  height: 0px;
  z-index: 1;
  left: 0;
  top: 55px;
  transform: translate(-45%, 0);
  box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.25);
  border-radius: 1em;
  background-color: white;
  overflow: hidden;
  transition: all 0.2s;

  &.active {
    height: var(--height);
    transition: 0.3s;
  }

  .cart-window {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .cart-title {
    text-align: left;
    border-bottom: 1px solid var(--border-color);
    padding: 1em;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .cart-items {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: gray;
    font-weight: 400;
  }

  @media only screen and (max-width: 890px) {
    --width: 224px;
    --height: 130px;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <NavLayout>
        <Logo />

        <NavButtons>
          <NavNavigation />
        </NavButtons>

        <CartAndProfile>
          <div className="cart-wrapper">
            <IoCartOutline role="button" className="cart" />

            <CartModal className="active">
              <div className="cart-window">
                <div className="cart-title">
                  <span>Cart</span>
                </div>

                <div className="cart-items">
                  <span>Your cart is empty.</span>
                </div>
              </div>
            </CartModal>
          </div>
          <div className="profile-pic">
            <img
              width="50px"
              height="50px"
              src={profilePic}
              alt="profile picture of ..."
            />
          </div>
        </CartAndProfile>
      </NavLayout>
    </StyledNav>
  );
}

export default Nav;
