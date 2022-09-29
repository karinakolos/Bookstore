import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

export const HeaderArrow = styled.div`
  display: block;
  :after {
    content: "";
    display: block;
    height: 1px;
    background: #23282b;
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
`;

export const LogoWrapper = styled.div``;

export const SearchBar = styled.div`
  position: relative;
  flex-basis: 30%;
  input {
    width: 100%;
    background: none;
    border: 1px solid #23282b;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #23282b;
    padding: 0.875rem 0 0.625rem 1.25rem;
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
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 2rem;
`;
export const SideNavLink = styled(NavLink)`
  position: relative;
  transition: all 0.8s ease-in;
  svg {
    width: 1.5rem;
    height: 1.5rem;

    &:hover:not(.active) path {
      stroke: #781a2b;
    }
    &.active path {
      stroke: #781a2b;
    }
  }
`;
export const ButtonLogOut = styled.div`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  padding: 0.1rem 0.5rem;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;

    &:hover {
      stroke: #781a2b;
    }
    &:active path {
      stroke: #781a2b;
    }
  }
  :hover {
    color: #781a2b;
  }
`;
export const Count = styled.span`
  font-size: 0.6rem;
  line-height: 0.9rem;

  background-color: #781a2b;
  color: #fff;
  border-radius: 50%;
  padding: 0 0.3rem;
  position: absolute;
  right: -0.4rem;
  top: -0.4rem;
`;
