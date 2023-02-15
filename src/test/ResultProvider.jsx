import { createContext, useState } from 'react';
const ResultContext = createContext();

function ResultProvider({ children }) {
  const [result, setResult] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [count, setCount] = useState({
    welshCorgi: 0,
    retriever: 0,
    schnauzer: 0,
    husky: 0,
    beagle: 0,
    chihuahua: 0,
  });

  const scoreUp = (types) => {
    types.forEach((type) => {
      setCount((prevState) => {
        return { ...prevState, [type]: count[type] + 1 };
      });
    });
  };

  const countScore = () => {
    const max = Math.max(...Object.values(count));
    const resultToArray = Object.entries(count);
    return resultToArray.reduce(
      (result, [type, score]) => (score === max ? type : result),
      ''
    );
  };

  return (
    <>
      <ResultContext.Provider
        value={{
          result,
          count,
          isCompleted,
          scoreUp,
          countScore,
          setResult,
          setIsCompleted,
        }}
      >
        {children}
      </ResultContext.Provider>
    </>
  );
}
export { ResultContext, ResultProvider };
