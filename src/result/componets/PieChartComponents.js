import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  width: 350px;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 100px;
  display: flex;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 24px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
  margin-left: 130px;
`;

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 600;
  width: 200px;
  color: ${(props) => props.theme.darkGray};
  margin-bottom: 10px;
`;

export const Description = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.lightGray};
`;

export const RatioWrapper = styled.div``;

export const LangColorBox = styled.div`
  background-color: ${({ idx }) => idx};
  width: 12.5px;
  height: 12.5px;
  border-radius: 50%;
  margin-right: 7px;
`;

export const LangColorBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const PieWrapper = styled.div`
  margin-top: 30px;
`;

export const LangText = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.lightGray};

  margin-right: 7px;
`;
