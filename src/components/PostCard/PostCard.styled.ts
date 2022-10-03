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
  :hover {
    background: var(--bg-card);
  }
  @media (max-width: 844px) {
    :hover {
      background: none;
    }
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
  color: var(--main);
  text-transform: uppercase;
  margin: 1rem 0 1rem;
`;

export const PostAuthor = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2rem;
  color: var(--light);
`;
export const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--main);
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1rem 0.5rem;
`;
export const WrapperMain = styled.div`
  padding: 0.5rem 1rem 1rem;
`;
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
      fill: var(--vinous);
      transform: scale(1.15);
    }
    &:active {
      fill: var(--vinous);
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
