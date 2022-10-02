import styled from "@emotion/styled";

export const TitleSettings = styled.div`
  padding-top: 2.3rem;
  font-size: 1.5rem;
  color: var(--title);
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
export const TitleSettingsFirst = styled.div`
  font-size: 1.5rem;
  color: var(--title);
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
export const Wrapper = styled.div``;

export const WrapperCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 0.5rem 0;
  @media (max-width: 850px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 2fr;
  }
`;
export const Item = styled.div`
  font-size: 1.1rem;
  color: var(--main);
  line-height: 1.6rem;
`;
export const ItemChange = styled.div`
  font-size: 1.2rem;
  color: var(--main);
  line-height: 1.6rem;
  padding: 1rem 0;
`;

export const LogOut = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 1rem;
  a {
    color: var(--main);
    font-size: 1.2rem;
    transition: all 0.3s ease-in;
  }
  :hover a {
    color: var(--vinous);
  }
  @media (max-width: 850px) {
    margin: 2rem 0 1rem;
  }
`;
