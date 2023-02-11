import { useEffect, useState } from "react";
import { getRandomIdArr } from "../data/getRandomIdArr";

function OtherResults({ dogs, species }) {
  // const [dog, setDog] = useState({});
  const [firstRandomDog, setFirstRandomDog] = useState({});
  const [secondRandomDog, setSecondRandomDog] = useState({});

  useEffect(() => {
    const idArr = getRandomIdArr(dogs, 6, 2, species);
    dogs.getDogById(setFirstRandomDog, idArr[0] + 1);
    dogs.getDogById(setSecondRandomDog, idArr[1] + 1);
  }, []);

  return (
    <div>
      <h1>다른 종 결과보기</h1>
      <br />
      <ul>
        <li>
          <h2>{firstRandomDog.name}</h2>
          <br />
          <span>{firstRandomDog.contents}</span>
          <br />
          <br />
          <br />
        </li>
        <li>
          <h2>{secondRandomDog.name}</h2>
          <br />
          <span>{secondRandomDog.contents}</span>
        </li>
      </ul>
    </div>
  );
}

export default OtherResults;
