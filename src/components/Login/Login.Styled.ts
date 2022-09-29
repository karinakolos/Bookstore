import styled from "@emotion/styled";

export const Error = styled.div`
  color: red;
`;
export const WrapperError = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem auto;
  padding: 0.4rem 1rem;
  border: 1px solid red;
  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: red;
    margin-right: 0.5rem;
    path {
      fill: red;
    }
  }
`;
