import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 2.2rem;
  padding: 0 0 2.5rem;
  color: #313037;
`;
export const WrapperButton = styled.div`
  margin: 1rem 0;
  font-size: 0.9rem;
  a {
    color: #781a2b;
    opacity: 0.65;
    transition: all 0.3s ease-in;
    :hover {
      opacity: 1;
    }
  }
`;

export const TotalSum = styled.div`
  margin: 4rem 0 0;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 573px) {
    margin: 2rem 0 0;
  }
`;

export const TotalSumItems = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  @media (max-width: 573px) {
    flex-basis: 60%;
  }
  @media (max-width: 400px) {
    flex-basis: 100%;
    padding: 0 1rem;
  }
`;
export const TotalSumItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TitleItem = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #a8a8a8;
`;
export const Summ = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #313037;
`;
export const Vat = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #313037;
`;

export const FinalSumm = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  text-transform: uppercase;
  color: #313037;
  @media (max-width: 857px) {
    font-size: 1.5rem;
    line-height: 2.75rem;
  }
  @media (max-width: 573px) {
    font-size: 1.2rem;
    line-height: 2.75rem;
  }
`;
export const Value = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;
  color: #313037;
  @media (max-width: 857px) {
    font-size: 1.3rem;
    line-height: 2.75rem;
  }
  @media (max-width: 573px) {
    font-size: 1.1rem;
    line-height: 2.75rem;
  }
`;
