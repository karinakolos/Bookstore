import styled from "@emotion/styled";
export const Wrapper = styled.div`
  :after {
    content: "";
    display: block;
    height: 1px;
    background: var(--title);
    opacity: 0.4;
    width: 100%;
    margin: 3rem auto 2rem;
  }
`;

export const WrapperCartItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const WrapperImageItem = styled.div`
  flex-basis: 20%;
  width: 15rem;
  height: 15rem;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 573px) {
    flex-basis: 20%;
  }
  @media (max-width: 500px) {
    flex-basis: 100%;
    width: 12rem;
    height: 12rem;
  }
`;

export const WrapperDescItem = styled.div`
  margin: 2rem;
  flex-basis: 50%;

  @media (max-width: 573px) {
    flex-basis: 40%;
    margin: 0 0.5rem;
  }
  @media (max-width: 500px) {
    flex-basis: 50%;
  }
`;

export const Title = styled.div`
  padding: 0 0 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--main);
  @media (max-width: 573px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding: 0 0 0.5rem;
  }
`;
export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--subtitle);
  @media (max-width: 573px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;
export const Quantity = styled.div`
  padding: 2rem 0 0 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    padding: 2rem 0 0;
  }
`;
export const Value = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0 0.5rem;
  color: var(--main);
  @media (max-width: 573px) {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;
export const Price = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 3.75rem;
  margin: auto;
  color: var(--main);
  @media (max-width: 573px) {
    flex-basis: 20%;
    font-size: 1rem;
    line-height: 2.1rem;
  }
`;
export const ButtonAddItem = styled.button`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  background-color: #0000;
  color: var(--main);
  cursor: pointer;
`;
export const ButtonDeleteItem = styled.button`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  background-color: #0000;
  color: var(--main);
  cursor: pointer;
`;
export const DeleteItem = styled.button`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 2rem;
  color: var(--main);
  background-color: #0000;
  cursor: pointer;
  @media (max-width: 500px) {
    flex-basis: 15%;
  }
`;
