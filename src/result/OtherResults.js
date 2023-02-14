import { useEffect, useState } from "react";
import { getRandomIdArr } from "../data/getRandomIdArr";

import * as OtherResultsComponents from "./components/OtherResultsComponents";

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
    <OtherResultsComponents.Container>
      <OtherResultsComponents.Title>
        다른 종 결과보기
      </OtherResultsComponents.Title>
      <OtherResultsComponents.Box>
        <OtherResultsComponents.ImgBox>
          <OtherResultsComponents.Img src={firstRandomDog.img} />
          <OtherResultsComponents.ResultTitle>
            {firstRandomDog.name}
          </OtherResultsComponents.ResultTitle>
        </OtherResultsComponents.ImgBox>
        <OtherResultsComponents.ImgBox>
          <OtherResultsComponents.Img src={secondRandomDog.img} />
          <OtherResultsComponents.ResultTitle>
            {secondRandomDog.name}
          </OtherResultsComponents.ResultTitle>
        </OtherResultsComponents.ImgBox>{" "}
      </OtherResultsComponents.Box>{" "}
    </OtherResultsComponents.Container>
  );
}

export default OtherResults;
