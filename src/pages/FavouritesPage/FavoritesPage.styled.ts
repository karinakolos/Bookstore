import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 0 7rem;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

export const NoFavorites = styled.div`
  margin: 5rem 0 7rem;
  display: flex;
  justify-content: center;
  img {
    max-width: 7rem;
    height: auto;
    opacity: 0.8;
  }
`;
