import OtherResults from "./OtherResults";
import Result from "./Result";
import Btns from "./Btns";

import Dogs from "../data/dogsDB";

const dogs = new Dogs();

function ResultPage() {
  return (
    <div>
      <Result dogs={dogs} />
      <OtherResults />
      <Btns />
    </div>
  );
}

export default ResultPage;
