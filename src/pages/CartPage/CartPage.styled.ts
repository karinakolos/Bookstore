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
`;

export const TotalSumItems = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
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
`;
export const Value = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.75rem;

  color: #313037;
`;
