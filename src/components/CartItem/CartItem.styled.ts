import styled from "@emotion/styled";
export const Wrapper = styled.div`
  :after {
    content: "";
    display: block;
    height: 1px;
    background: #23282b;
    opacity: 0.4;
    width: 100%;
    margin: 3rem auto 2rem;
  }
`;

export const WrapperCartItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const WrapperImageItem = styled.div`
  width: 16rem;
  height: 12rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const WrapperDescItem = styled.div`
  margin: 0 2rem;
  flex-basis: 50%;
`;

export const Title = styled.div`
  padding: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;

  color: #313037;
`;
export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #b9aca8;
`;
export const Quantity = styled.div`
  padding: 2rem 0 0 2rem;
  display: flex;
  align-items: center;
`;
export const Value = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0 0.5rem;

  color: #313037;
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 2.5;
  line-height: 3.75rem;
  margin: auto 3rem;
  color: #313037;
`;
export const ButtonAddItem = styled.button`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  background-color: #0000;
  cursor: pointer;
`;
export const ButtonDeleteItem = styled.button`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 0.5rem;
  background-color: #0000;
  cursor: pointer;
`;
export const DeleteItem = styled.button`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 2rem;
  background-color: #0000;
  cursor: pointer;
`;
