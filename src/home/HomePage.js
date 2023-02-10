import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const TitleImg = styled.img`
  display: block;
  margin: 120px auto 0;
`;

const DescriptionImg = styled.img`
  display: block;
  margin: 64px auto 0;
`;

const StartButtonImg = styled.img`
  display: block;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const startClick = () => {
    navigate("/test");
  };

  return (
    <div className="container">
      <header>
        <h2 style={{ color: "transparent" }}>Hot 도그</h2>
        <TitleImg
          src={`${process.env.PUBLIC_URL}/header.png`}
          alt="테스트 제목"
        />
      </header>
      <section>
        {/* <img alt= insert_img> */}
        <DescriptionImg
          src={`${process.env.PUBLIC_URL}/description.png`}
          alt="테스트 설명"
        />
        <p style={{ color: "transparent" }}>
          Hot 도그를 먹은 당신,, 다음날 눈을 떠보니 강아지가 되어있었다..!!
          과연-? 나는 어떤 강아지 일까?
        </p>
      </section>
      <div
        style={{
          position: "relative",
          width: "320px",
          height: "80px",
          margin: "0 auto",
        }}
      >
        <button
          className="start-btn"
          onClick={startClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "320px",
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
    </div>
  );
};

export default HomePage;
