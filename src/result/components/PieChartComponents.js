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
  margin-bottom: 100px;
`;

export const Wrapper = styled.div`
  margin-top: 24px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Title = styled.h5`
  max-height: 36px;
  width: 100%;
  height: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;

  color: ${(props) => props.theme.darkGray};
`;

export const Description = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 74px;

  color: ${(props) => props.theme.lightGray};
`;

export const PieWrapper = styled.div`
  margin-top: 30px;
`;
