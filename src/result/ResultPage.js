import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import OtherResults from './OtherResults';
import Result from './Result';
import Btns from './Btns';
import PieCharts from './PieCharts';
import CubeLoading from '../loading/cubeLoading';

import Dogs from '../data/dogsDB';

const dogs = new Dogs();
function ResultPage() {
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const result = params.species;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div
      style={{
        height: '100%',
        padding: '0 20px',
        fontFamily: 'Pretendard',
      }}
    >
      {loading ? (
        <CubeLoading />
      ) : (
        <>
          <Result species={result} dogs={dogs} />
          <PieCharts dogs={dogs} />
          <OtherResults species={result} dogs={dogs} />
          <Btns />
        </>
      )}
    </div>
  );
}

export default ResultPage;
