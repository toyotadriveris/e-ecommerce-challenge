/* eslint-disable react/jsx-no-undef */
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import profilePic from "../../assets/images/image-avatar.png";
import Logo from "../../UI/Logo";
import NavNavigation from "./NavNavigation";
import { useState } from "react";
import Cart from "../Cart/Cart";

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

  @media only screen and (max-width: 700px) {
    gap: 1em;

    & > :first-child {
      order: 2;
      margin-right: auto;
    }

    & > :nth-child(2) {
      margin-right: 0;
    }

    & > :last-child {
      order: 3;
    }
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
    @media only screen and (max-width: 700px) {
      min-width: 0;
      min-height: 0;
      width: 40px;
      height: 40px !important;
    }
  }

  @media only screen and (max-width: 890px) {
    gap: 1em;
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
          <Cart />

          <div className="profile-pic">
            <img width="50px" src={profilePic} alt="profile picture of ..." />
          </div>
        </CartAndProfile>
      </NavLayout>
    </StyledNav>
  );
}

export default Nav;
