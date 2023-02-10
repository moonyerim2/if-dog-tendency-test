import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LinearDeterminate from "./LinearDeterminate";
import { ResultContext } from "./ResultProvider";
import { qnaList } from "./qna";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Question = styled.p`
  font-size: 30px;
`;

function TestPage() {
  const navigate = useNavigate();
  const { scoreUp, countScore, setResult } = useContext(ResultContext);
  const [index, setIndex] = useState(0);
  const { q, a } = qnaList[index];
  const progress = ((index + 1) / qnaList.length) * 100;

  const onClick = (type) => {
    if (index === qnaList.length - 1) {
      setResult(countScore());
      navigate("/result");
      return;
    }
    scoreUp(type);
    setIndex(index + 1);
  };

  return (
    <Wrapper>
      <LinearDeterminate progress={progress} />
      <Question>{q}</Question>
      <ul>
        {a.map(({ answer, type }, i) => (
          <li
            key={i}
            style={{
              position: "relative",
              marginTop: "20px",
              width: "450px",
            }}
          >
            <button
              type="button"
              onClick={() => onClick(type)}
              style={{
                position: "absolute",
                top: "20px",
                left: 0,
                width: "100%",
                height: "80px",
                fontSize: "25px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {answer}
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/button.png`}
              style={{ width: "100%" }}
              alt="선택지"
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default TestPage;
