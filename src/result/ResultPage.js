import React from 'react';
import { useParams } from 'react-router-dom';
import OtherResults from './OtherResults';
import Result from './Result';
import Btns from './Btns';
import PieCharts from './PieCharts';

import Dogs from '../data/dogsDB';

const dogs = new Dogs();
function ResultPage() {
  const params = useParams();
  const result = params.species;

  return (
    <div
      style={{
        height: '100%',
        padding: '0 20px',
      }}
    >
      <Result species={result} dogs={dogs} />
      <PieCharts dogs={dogs} />
      <OtherResults species={result} dogs={dogs} />
      <Btns />
    </div>
  );
}

export default ResultPage;
