import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--main);
  }
`;
export const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--main);
  @media (max-width: 440px) {
    font-size: 2rem;
  }
`;
export const Image = styled.div`
  width: 120px;
  height: 120px;
  padding-bottom: 0.5rem;
  svg {
    path {
      fill: var(--main);
    }
    width: 100%;
    height: auto;
  }
  @media (max-width: 440px) {
    width: 70px;
    height: 70px;
  }
`;
export const ButtonToHome = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--main);
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  :hover {
    opacity: 1;
  }
`;
