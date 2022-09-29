import styled from "@emotion/styled";

export const WrapperFooter = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  display: block;
  :before {
    content: "";
    display: block;
    height: 1px;
    background: #23282b;
    opacity: 0.4;
    width: 100%;
    margin: 3rem auto 0;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #a8a8a8;
  padding: 1.5rem 0;
`;
