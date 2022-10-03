import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

export const HeaderArrow = styled.div`
  display: block;
  :after {
    content: "";
    display: block;
    height: 1px;
    background: var(--title);
    opacity: 0.4;
    width: 100%;
    margin: 2rem auto;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 1.5rem 0 0;
  top: 0;
  width: 100%;
  @media (max-width: 486px) {
    flex-wrap: wrap;
    row-gap: 1rem;
  }
`;

export const LogoWrapper = styled.div`
  @media (max-width: 486px) {
    order: 1;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  position: relative;
  flex-basis: 30%;
  height: 2.8rem;
  input {
    width: 100%;
    background: none;
    border: 1px solid var(--title);
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--title);
    padding: 0.625rem 1.25rem;
    opacity: 0.5;
    :focus {
      opacity: 1;
    }
  }
  svg {
    position: absolute;
    right: 0.5rem;
    top: 1rem;
    cursor: pointer;
  }
  @media (max-width: 486px) {
    order: 3;
    flex-basis: 100%;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 486px) {
    display: flex;
    order: 2;
  }
`;

export const SideNavLink = styled(NavLink)`
  position: relative;
  transition: all 0.8s ease-in;
  svg {
    width: 1.5rem;
    height: 1.5rem;

    &:hover:not(.active) path {
      stroke: var(--vinous);
    }
    &.active path {
      stroke: var(--vinous);
    }
  }
`;

export const ButtonSettings = styled.div`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  vertical-align: center;
  cursor: pointer;
  a {
    color: var(--main);
    transition: all 0.3s ease-in;
    :hover {
      color: var(--vinous);
    }
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  :hover svg {
    color: var(--vinous);
    path {
      fill: var(--vinous);
    }
  }
`;
export const Count = styled.span`
  font-size: 0.6rem;
  line-height: 0.9rem;
  background-color: var(--vinous);
  color: var(--white);
  border-radius: 50%;
  padding: 0.05rem 0.35rem;
  position: absolute;
  right: -0.4rem;
  top: -0.4rem;
`;
