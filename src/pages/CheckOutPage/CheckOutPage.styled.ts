import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;
export const WrapperForm = styled.div`
  flex-basis: 45%;
  input {
    display: flex;
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    margin: 0.5rem 0 1.5rem;
    padding-left: 1rem;
    outline: none;
  }
  textarea {
    width: 100% !important;
    height: 5rem !important;
    font-size: 1rem;
    margin: 1rem 0 2rem;
    padding: 0.7rem 0 0 1rem;
    outline: none;
  }
  select {
    height: 2.5rem;
    font-size: 1rem;
  }
`;
export const WrapperItem = styled.div`
  flex-basis: 40%;
  margin: auto 1rem;
  padding: 2rem;
  border: 1px solid var(--title);
`;
export const TitleForm = styled.div`
  font-size: 1.5rem;
  color: #23282b;
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
export const Label = styled.p`
  font-size: 1.1rem;
  color: var(--main);
  line-height: 1.6rem;
`;

export const Necessarily = styled.span`
  font-size: 1.1rem;
  color: red;
`;

export const ItemTitle = styled.div`
  font-size: 1.5rem;
  padding: 0 0 1.5rem;
  color: var(--title);
`;
export const ItemDescription = styled.div`
  font-size: 1.1rem;
  color: var(--main);
  line-height: 1.6rem;
  :after {
    content: "";
    display: block;
    height: 1px;
    background: var(--title);
    opacity: 0.4;
    width: 100%;
    margin: 0.5rem auto;
  }
`;
export const Book = styled.div`
  font-size: 1.1rem;
  color: var(--light);
  padding-bottom: 0.5rem;
`;
export const Books = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
`;
export const WrapperCol = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 1rem;
  padding: 0.5rem 0;
`;
export const Item = styled.div`
  font-size: 1.1rem;
  color: var(--main);
  line-height: 1.6rem;
`;
export const Error = styled.div`
  font-size: 1rem;
  color: red;
  line-height: 1.3rem;
  padding: 1rem 0;
`;

export const Cheque = styled.div`
  width: 50%;
  margin: 1rem auto;
  padding: 2rem;
  background: #fff;
`;
export const Alert = styled.div`
  font-size: 1rem;
  color: #313037;
  padding: 2rem 0;
  :after {
    content: "";
    display: block;
    height: 1px;
    background: var(--title);
    opacity: 0.4;
    width: 100%;
    margin: 2rem auto 0;
  }
`;
