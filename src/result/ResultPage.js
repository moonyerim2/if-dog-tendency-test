import React, { useContext, useEffect, useState } from "react";
import OtherResults from "./OtherResults";
import Result from "./Result";
import Btns from "./Btns";
import PieCharts from "./PieCharts";

import Dogs from "../data/dogsDB";

import { ResultContext } from "../test/ResultProvider";

const dogs = new Dogs();

function ResultPage() {
  //정상적으로 테스트가 끝나면 result에 강아지 종류가 담겨있습니다.
  const { result } = useContext(ResultContext);

  const [dog, setDog] = useState({});

  useEffect(() => {
    dogs.get(setDog, result);
  }, []);

  return (
    <div>
      <Result species={result} dogs={dogs} />
      <PieCharts dogs={dogs} />
      <OtherResults species={result} dogs={dogs} />
      <Btns />
    </div>
  );
}

export default ResultPage;
