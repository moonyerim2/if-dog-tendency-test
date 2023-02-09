import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LinearDeterminate from "./LinearDeterminate";
import { ResultContext } from "./ResultProvider";
import { qnaList } from "./qna";

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
    <>
      <LinearDeterminate progress={progress} />
      <div>{q}</div>
      <ul>
        {a.map(({ answer, type }, i) => (
          <li key={i}>
            <button type="button" onClick={() => onClick(type)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TestPage;
