import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 23px;
  text-align:center;
  color:black;
  overflow:hidden;
}
`;

const Input = styled.input`
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  border-radius:3px;
  float:left;
  margin: 6px;
  background-color: #FFF7EB;
  color:black;
`;
function OzCtaBtns() {
  return (
    <Container>
      <h1>
        본 심리테스트는 오즈코딩스쿨 린스타트업 맞춤형 Serverless MVP 개발
        전문가 양성 과정 1기 2팀이 구현한 결과물입니다.
      </h1>
      <a href="https://ozcodingschool.com/">
        <Input type="button" value="OZ 코딩스쿨 알아보기"></Input>
      </a>
      <a href="https://legend-palm-1f1.notion.site/2-_-cce963197d034ae5b0ab4a1bd3530365">
        <Input type="button" value="팀 소개 페이지"></Input>
      </a>
    </Container>
  );
}

export default OzCtaBtns;
