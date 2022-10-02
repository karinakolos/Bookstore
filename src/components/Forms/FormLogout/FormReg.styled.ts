import styled from "@emotion/styled";

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: var(--main);
`;
export const WrapperInput = styled.div`
  display: flex;
  padding-bottom: 1.2rem;
  input {
    width: 100% !important;
    height: 2.5rem;
    padding: 0 1rem;
    border: 1px solid var(--border-input);
    outline: none;
  }
`;
export const Button = styled.button`
  text-align: center;
  background: var(--main);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 1rem;
  margin-top: 0.5rem;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease-in;
  :hover {
    background: var(--vinous);
  }
  :active {
    background: var(--vinous);
  }
  :focus {
    background: var(--vinous);
  }
`;
export const Error = styled.div`
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const WrapperEmail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const WrapperPassword = styled.div`
  position: relative;
`;
