import styled from "@emotion/styled";

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 50%;
`;
export const InputLabel = styled.label`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #313037;
`;
export const WrapperInput = styled.div`
  display: flex;
  padding-bottom: 1.1rem;
  input {
    width: 100% !important;
    height: 2.5rem;
    padding: 0 1rem;
    border: 1px solid #e7e7e7;
    outline: none;
  }
`;
export const Button = styled.button`
  text-align: center;
  background: #313037;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  margin-top: 0.4rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.8rem;

  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in;
  :hover {
    background: #781a2b;
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
export const Successfully = styled.div`
  font-size: 1.1rem;
  color: #781a2b;
  line-height: 1.6rem;
  margin: 1rem auto;
`;
