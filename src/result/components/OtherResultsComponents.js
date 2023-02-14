import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: transparent;
  max-height: 832px;
  height: 100%;
  margin-bottom: 70px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  text-align: center;
`;

export const ResultTitle = styled.h4`
  width: 100%;
  font-size: 18px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 180px;
  margin-bottom: 20px;
`;
