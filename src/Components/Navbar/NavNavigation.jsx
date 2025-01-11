import { useState } from "react";
import styled from "styled-components";
import useScreenSize from "../../Hooks/UseScreenSize";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

// desktop
const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5em;

  li {
    cursor: pointer;
    color: gray;
    padding: 4px 12px;
    text-transform: capitalize;
    transition: all 0.3s;
    position: relative;

    /* underline */
    &::after {
      content: "";
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      background-color: var(--accent-500);
      position: absolute;
      bottom: -41px;
      left: 0;
      transition: all 0.3s;
    }

    /* hover */
    &:hover {
      color: #141414;
      &::after {
        transform: scaleX(1);
      }
      transition: all 0.2s;
    }

    &.active {
      &::after {
        transform: scaleX(1);
      }
    }
  }

  @media only screen and (max-width: 890px) {
    gap: 0;

    li {
      padding: 4px 8px;
    }
  }
`;

//  mobile
const BurgerButton = styled.button`
  background-color: transparent;
  color: var(--text);
  outline: 0;
  border: 0;
  font-size: 1.8rem;
  padding: 5px;
  cursor: pointer;
  line-height: 0;
  svg {
    line-height: 0;
  }
`;

const MobileMenu = styled.div`
  transform: translate(-999px, 0);
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100dvh;
  padding: 2em 5em 2em 2em;
  background-color: #fff;
  transition: all 1s;
  &.active {
    transform: translate(0, 0);
    transition: all 0.4s ease;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;

    li {
      text-transform: capitalize;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text);
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: var(--accent-500);
        transition: color 0.2s;
      }

      &.active {
        color: var(--accent-500);
        transition: color 0.2s;
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #00000060;
`;

const CloseButton = styled.button`
  position: relative;
  z-index: 3;
  background-color: transparent;
  margin-bottom: 2em;
  color: var(--text);
  outline: 0;
  border: 0;
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 0;
  svg {
    line-height: 0;
  }
`;

const Items = ["collections", "men", "women", "about", "contact"];

function NavNavigation() {
  const [active, setActive] = useState("collections");
  const [openMenu, setOpenMenu] = useState(false);

  const { width } = useScreenSize();

  function handleActive(item) {
    setActive(item);
  }

  if (width >= 700)
    return (
      <StyledList>
        {Items.map((item) => (
          <li
            key={item}
            role="button"
            onClick={() => handleActive(item)}
            className={`${active === item ? "active" : ""}`}
          >
            {item}
          </li>
        ))}
      </StyledList>
    );

  return (
    <>
      <BurgerButton
        type="button"
        role="button"
        onClick={() => setOpenMenu(true)}
      >
        <RxHamburgerMenu />
      </BurgerButton>

      {openMenu && <Overlay />}

      <MobileMenu className={`${openMenu ? "active" : ""}`}>
        <CloseButton
          type="button"
          role="button"
          onClick={() => setOpenMenu(false)}
        >
          <IoClose />
        </CloseButton>

        <div className="menu-list">
          <ul>
            {Items.map((item) => (
              <li
                key={item}
                role="button"
                onClick={() => handleActive(item)}
                className={`${active === item ? "active" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </MobileMenu>
    </>
  );
}

export default NavNavigation;
