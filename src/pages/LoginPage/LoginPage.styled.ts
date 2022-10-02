import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 40%;
  margin: 3rem auto 4rem;
  @media (max-width: 850px) {
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 80%;
    margin: 2rem auto 0;
  }
  @media (max-width: 350px) {
    width: 90%;
  }
`;
export const WrapperNav = styled.div`
  display: flex;
`;
export const SideNavLink = styled(NavLink)`
  flex-basis: 50%;
  color: var(--main);
  text-decoration: none;
  transition: all 0.8s ease-in;
  &.active {
    color: var(--vinous);
    :after {
      content: "";
      display: block;
      height: 2px;
      background: var(--vinous);
      width: 100%;
      margin: 0 auto 0.5rem;
    }
  }
  &:hover:not(.active) {
    opacity: 0.6;
  }
`;
