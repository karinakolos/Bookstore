import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 2.2rem;
  padding: 0 0 2.5rem;
  color: var(--main);
`;

export const WrapperPhoto = styled.div`
  position: relative;
  flex-basis: 40%;
  text-align: center;
  @media (max-width: 650px) {
    flex-basis: 100%;
    margin: 0 1rem;
  }
`;

export const ButtonLike = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  border: none;
  padding: 0.6rem;
  background: #0000;
  cursor: pointer;
  svg {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  :hover svg {
    fill: var(--vinous);
  }
`;

export const WrapperInfo = styled.div`
  flex-basis: 40%;
  @media (max-width: 850px) {
    flex-basis: 50%;
  }
  @media (max-width: 650px) {
    flex-basis: 100%;
    padding: 0 2rem;
  }
`;

export const WrapperInfoRight = styled.div`
  display: flex;
  justify-content: space-between;
  :nth-of-type(1) {
    padding: 0 0 0.5rem;
  }
  :nth-of-type(7) {
    padding: 0.5rem 0;
  }
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: var(--main);
`;

export const Pating = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: var(--main);
`;

export const PathOne = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  padding-right: 3rem;
  color: var(--light);
`;

export const PathTwo = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  color: var(--main);
  a {
    color: var(--main);
    transition: all 0.2s ease-in;
    :hover {
      color: var(--vinous);
    }
  }
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 6rem 0 1rem;
  color: var(--main);
  :after {
    content: "";
    display: block;
    height: 1px;
    background: var(--title);
    opacity: 0.4;
    width: 100%;
    margin: 1rem auto;
  }
`;

export const Desc = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  color: var(--main);
`;

export const WrapperForm = styled.div`
  margin: 5rem 1rem 4rem;
  padding: 3rem 2rem;
  background: var(--bg-form);
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 650px) {
    margin: 2rem 1rem 2rem;
  }
`;

export const WrapperFormSubscribe = styled.div`
  margin: 5rem 1rem 4rem;
  padding: 3rem 2rem;
  background: var(--bg-form);
  @media (max-width: 650px) {
    margin: 2rem 0.5rem 2rem;
    padding: 1rem 1rem;
  }
`;

export const TitleForm = styled.div`
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 4rem;
  color: var(--main);
`;

export const TitleSubscribe = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: var(--main);
  @media (max-width: 650px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const SubtitleSubscribe = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  padding: 0.5rem 0 2rem;
  line-height: 1.75rem;
  color: var(--main);
  @media (max-width: 650px) {
    font-size: 1rem;
    padding: 0.5rem 0 0;
  }
`;

export const Form = styled.div`
  position: relative;
  padding: 1.7rem 0;
  display: flex;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  display: flex;
`;

export const InputEmail = styled.div`
  flex-basis: 80%;
  display: flex;
  Input {
    outline: none;
    width: 100%;
    line-height: 3rem;
    padding-left: 1rem;
    border: 1px solid var(--border-input);
  }
`;

export const BtbSubscibe = styled.button`
  flex-basis: 20%;
  text-align: center;
  line-height: 3rem;
  background: var(--main);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--white);
  border: 1px solid var(--main);
  cursor: pointer;
  transition: all 0.3s ease-in;
  :hover {
    background: var(--vinous);
  }
  :disabled {
    background: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;
export const BtbSubscibeSuccessfull = styled.button`
  background: var(--manin);
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--white);
  border: 1px solid var(--main);
  cursor: pointer;
  transition: all 0.3s ease-in;
  :hover {
    background: var(--vinous);
  }
`;

export const Error = styled.div`
  color: red;
  position: absolute;
  top: 0;
`;
