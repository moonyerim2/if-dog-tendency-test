import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;

  /* Inside auto layout */

  flex: none;
  order: 1;
  margin-bottom: 60px;
`;

export const Header = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

export const Title = styled.h5`
  max-height: 36px;
  width: 100%;
  height: 100%;

  font-weight: 700;
  font-size: 25px;
  line-height: 36px;

  color: ${(props) => props.theme.darkGray};
`;

export const Description = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  color: ${(props) => props.theme.lightGray};
`;

export const PieWrapper = styled.div`
  .recharts-wrapper {
    width: 100% !important;
  }

  .recharts-surface {
    width: 100% !important;
  }
`;
