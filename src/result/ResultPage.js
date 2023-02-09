import React, { useContext } from "react";
import OtherResults from "./OtherResults";
import Result from "./Result";
import Btns from "./Btns";

import Dogs from "../data/dogsDB";
import { ResultContext } from "../test/ResultProvider";

const dogs = new Dogs();

function ResultPage() {
  //정상적으로 테스트가 끝나면 result에 강아지 종류가 담겨있습니다.
  const { result } = useContext(ResultContext);

  return (
    <div>
      <Result dogs={dogs} />
      <OtherResults />
      <Btns />
    </div>
  );
}

export default ResultPage;
