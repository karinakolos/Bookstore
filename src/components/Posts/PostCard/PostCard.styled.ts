import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  padding: 0 1rem 1rem;
  :hover {
    background: #f8e6e6;
  }
`;

export const PostImage = styled.div`
  height: 16.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1.25rem;
    transition: all 0.3s ease-in-out;
  }
`;
export const PostName = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #313037;
  text-transform: uppercase;
  margin: 1rem 0 1rem;
`;

export const PostAuthor = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #a8a8a8;
`;
export const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #313037;
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.7rem;
`;
export const WrapperMain = styled.div``;
export const WrapperButton = styled.div`
  display: flex;
`;

export const ButtonBasket = styled.button`
  border: none;
  padding: 0 0.5rem;
  background: #0000;
  cursor: pointer;
  svg {
    width: 1.45rem;
    height: 1.45rem;
    transition: all 0.2s ease-in;
    &:hover {
      fill: #781a2b;
      transform: scale(1.15);
    }
    &:active {
      fill: #781a2b;
      transform: scale(1.15);
    }
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  a {
    text-decoration: none;
  }
`;
