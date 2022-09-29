import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: #313037;
  }
`;
export const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #313037;
`;
export const Image = styled.div`
  width: 120px;
  height: 120px;
  padding-bottom: 0.5rem;
  svg {
    path {
      fill: #313037;
    }
    width: 100%;
    height: auto;
  }
`;
export const ButtonToHome = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: #313037;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  :hover {
    opacity: 1;
  }
`;
