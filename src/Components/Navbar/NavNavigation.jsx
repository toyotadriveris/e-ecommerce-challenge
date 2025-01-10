import { useState } from "react";
import styled from "styled-components";
import useScreenSize from "../../Hooks/UseScreenSize";

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5em;
  margin-right: auto;

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

const Items = ["collections", "men", "women", "about", "contact"];

function NavNavigation() {
  const [active, setActive] = useState("collections");

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
}

export default NavNavigation;
