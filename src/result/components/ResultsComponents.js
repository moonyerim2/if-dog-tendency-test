import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  max-height: 832px;
  height: 100%;
  margin-bottom: 40px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  padding-top: 80px;
  padding-bottom: 20px;
  width: 100%;
  height: 36px;
  text-align: center;
  color: #704702;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0 auto;
`;

export const ResultSubTitle = styled.h4`
  width: 100%;
  height: 30px;
  font-size: 18px;
  line-height: 20px;

  color: #909090;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
`;

export const ResultTitle = styled.h4`
  width: 100%;
  height: 50px;

  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  color: #fa9d00;

  /* Inside auto layout */
  padding: 0 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 100%;
  text-align: center;
`;

export const ResultBody = styled.span`
  max-width: 500px;
  height: 120px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

export const ResultImg = styled.img`
  width: 100%;
  max-width: 200px;
  padding-bottom: 15px;
`;
