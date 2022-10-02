import styled from "@emotion/styled";

export const WrapperMainContent = styled.div``;
export const Wrapper = styled.div``;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

export const Paginate = styled.div`
  ul {
    display: table;
    margin: 2rem auto 0;
  }
  li {
    display: inline-block;
    a {
      display: inline-block;
      text-align: center;
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.4rem;
      border: 1px solid #afa89f;
      border-radius: 1.875rem;
      margin-right: 0.625rem;
      cursor: pointer;
      transition: all 0.3s ease-in;
      &:hover {
        background: var(--vinous);
        border: 1px solid var(--vinous);
        color: var(--white);
      }
    }
  }
  .selected {
    a {
      background: var(--vinous);
      border: 1px solid var(--vinous);
      color: var(--white);
    }
  }
  @media (max-width: 850px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      row-gap: 0.5rem;
      justify-content: center;
    }
  }
`;
export const TextError = styled.div`
  font-size: 1.3rem;
  margin: 0 auto 19rem;
`;
