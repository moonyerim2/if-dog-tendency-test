import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomIdArr } from '../data/getRandomIdArr';

import * as OtherResultsComponents from './components/OtherResultsComponents';

function OtherResults({ dogs, species }) {
  const navigate = useNavigate();
  const [firstRandomDog, setFirstRandomDog] = useState({});
  const [secondRandomDog, setSecondRandomDog] = useState({});

  const onClickImgBox = (species) => {
    navigate(`/result/${species}`);
    window.location.reload();
  };

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
        <OtherResultsComponents.ImgBox
          onClick={() => onClickImgBox(firstRandomDog.species)}
        >
          <OtherResultsComponents.Img src={firstRandomDog.img} />
          <OtherResultsComponents.ResultTitle>
            {firstRandomDog.name}
          </OtherResultsComponents.ResultTitle>
        </OtherResultsComponents.ImgBox>
        <OtherResultsComponents.ImgBox
          onClick={() => onClickImgBox(secondRandomDog.species)}
        >
          <OtherResultsComponents.Img src={secondRandomDog.img} />
          <OtherResultsComponents.ResultTitle>
            {secondRandomDog.name}
          </OtherResultsComponents.ResultTitle>
        </OtherResultsComponents.ImgBox>{' '}
      </OtherResultsComponents.Box>{' '}
    </OtherResultsComponents.Container>
  );
}

export default OtherResults;
