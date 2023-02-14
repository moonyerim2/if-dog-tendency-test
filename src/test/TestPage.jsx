import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LinearDeterminate from './LinearDeterminate';
import { ResultContext } from './ResultProvider';
import { qnaList } from './qna';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyledProgressBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  max-width: 330px;
  width: 100%;
  top: 30px;

  .MuiBox-root {
    margin: 0;
  }
`;

const Question = styled.p`
  font-size: 28px;
  font-family: 'FlowerSalt';
  margin-top: 35px;
  padding: 0 20px;
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
      navigate('/result');
      return;
    }
    scoreUp(type);
    setIndex(index + 1);
  };

  return (
    <Wrapper>
      <StyledProgressBar>
        <LinearDeterminate progress={progress} />
      </StyledProgressBar>
      <Question>{q}</Question>
      <ul>
        {a.map(({ answer, type }, i) => (
          <li
            key={i}
            style={{
              position: 'relative',
              marginTop: '15px',
              width: '450px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              onClick={() => onClick(type)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '65%',
                height: '80px',
                fontSize: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {answer}
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/button.png`}
              style={{ width: '75%' }}
              alt="선택지"
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default TestPage;
