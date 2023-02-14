import React, { useContext, useEffect, useState } from "react";
import OtherResults from "./OtherResults";
import Result from "./Result";
import Btns from "./Btns";
import PieCharts from "./PieCharts";

import Dogs from "../data/dogsDB";

import { ResultContext } from "../test/ResultProvider";

const dogs = new Dogs();

function ResultPage() {
  const { result } = useContext(ResultContext);

  const [dog, setDog] = useState({});

  useEffect(() => {
    dogs.get(setDog, result);
  }, []);

  return (
    <div
      style={{
        height: "100%",
        padding: "0 20px",
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
