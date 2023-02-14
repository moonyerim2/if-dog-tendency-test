import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 27px;
  text-align: center;
  color: black;
  overflow: hidden;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  height: 40px;
  background-color: #fff7eb;
  color: black;
  cursor: pointer;
`;

function OzCtaBtns() {
  return (
    <Container>
      <h1 style={{ lineHeight: '20px' }}>
        본 심리테스트는 오즈코딩스쿨 린스타트업 맞춤형 Serverless MVP 개발
        전문가 양성 과정 1기 2팀이 구현한 결과물입니다.
      </h1>
      <InputBox>
      <a href="https://ozcodingschool.com/">
        <Input type="button" value="OZ 코딩스쿨 알아보기"></Input>
      </a>
      <a href="https://www.notion.so/2team-Info-b53eb76edaf1494b922628b76b6faf58">
        <Input type="button" value="팀 소개 페이지"></Input>
      </a>
      </InputBox>
    </Container>
  );
}

export default OzCtaBtns;
