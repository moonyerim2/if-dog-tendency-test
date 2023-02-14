import styled from "styled-components";

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 500px;
  margin: 30px 0px;
`;
const Btn = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
const OzPageBtn = styled(Btn)`
  background: #1552f0;
  margin-top: 20px;
`;
const TeamPageBtn = styled(Btn)`
  background: #fa9d00;
  margin-top: 20px;
`;

const Info = styled.h1`
  margin-top: 100px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  color: #919191;
`;

function OzCtaBtns() {
  return (
    <BtnBox>
      <Info>
        본 심리테스트는 오즈코딩스쿨 린스타트업 맞춤형 Serverless MVP 개발
        전문가 양성 과정 1기 2팀이 2일 만에 구현한 결과물입니다.
      </Info>
      <TeamPageBtn>
        <a href="https://legend-palm-1f1.notion.site/2-_-cce963197d034ae5b0ab4a1bd3530365">
          2 팀 소개 페이지
        </a>
      </TeamPageBtn>
      <OzPageBtn>
        <a href="https://ozcodingschool.com/">OZ 코딩스쿨 알아보기</a>
      </OzPageBtn>
    </BtnBox>
  );
}

export default OzCtaBtns;
