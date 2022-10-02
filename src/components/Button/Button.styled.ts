import styled from "@emotion/styled";

export const WrapperButton = styled.div`
  display: block;
`;

export const ButtonLog = styled.div`
  text-align: center;
  background: var(--main);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 1rem 2rem;
  margin-top: 1rem;
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
