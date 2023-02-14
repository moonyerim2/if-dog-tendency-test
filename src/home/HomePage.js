import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import Dogs from "../data/dogsDB"

const Wrapper = styled.div`
  max-width: 575px;
  min-width: 300px;
  margin: 0 auto;
`;

const TitleImg = styled.img`
  display: block;
  margin: 120px auto 0;
  width: 100%;
`;

const DescriptionImg = styled.img`
  display: block;
  width: 100%;
  margin: 64px auto 0;
  
  z-index:1;
`;

const StartButtonImg = styled.img`
  display: block;
  width: 100%;
  
`;
const CountPerson =styled.span`
  display:block;
  text-align:center;
  margin-top: -55px;
`;
  
  const HomePage = () => {
    const navigate = useNavigate();
    
    const dogs = new Dogs();//DB불러옴
    const [total, setTotal] = useState(0); //초기값 0으로 설정, USER수가 증가할때마다 setTotal에 저장 
    
    const startClick = () => {
      navigate("/test");
    };

    useEffect(() => {
      dogs.getParticipants(setTotal);//총 참여자 수 
    }, [total]);
  
  return (
    <Wrapper>
      
      <header>
        <h2 style={{ color: "transparent" }}>Hot 도그</h2>
        <TitleImg
          src={`${process.env.PUBLIC_URL}/header.png`}
          alt="테스트 제목"
        />
      </header>
      <section>
        <DescriptionImg
          src={`${process.env.PUBLIC_URL}/description.png`}
          alt="테스트 설명"
        />
        <p style={{ color: "transparent" }}>
          Hot 도그를 먹은 당신,, 다음날 눈을 떠보니 강아지가 되어있었다..!!
          과연-? 나는 어떤 강아지 일까?
        </p>
      </section>

      <CountPerson>
        현재 {total} 명이 참여 했어요. 
        {/*버튼 하단으로 위치 조정 예정 */}
      </CountPerson>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={startClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,  
            width: "100%",
            height: "80px",
            backgroundColor: "transparent",
            color: "transparent",
            border: "none",
          }}
        >
          Start
        </button>
        <StartButtonImg src={`${process.env.PUBLIC_URL}/start-button.png`} />
      </div>
      <footer>
      
      </footer>      
    </Wrapper>
  );
};

export default HomePage;
