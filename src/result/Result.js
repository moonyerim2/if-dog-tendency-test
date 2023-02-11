import { useState, useEffect } from "react";
import OtherResults from "./OtherResults";

function Result({ dogs, species }) {
  const [result, setResult] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dogs.update(species);
    dogs.get(setResult, species);
  }, []);

  useEffect(() => {
    dogs.getParticipants(setTotal);
  }, [total]);

  return (
    <div>
      <br />
      {/* <button onClick={onDogAdd}>Add Dog</button> */}
      <br />
      <br />
      <span>
        <div key={result.id}>
          <span>{`당신이 개라면 ? ${result.name}  (${result.species})`}</span>
          <br />
          <span>{`${result.contents}`}</span>
        </div>
      </span>
      <br />
      <br />
      <br />

      <span>참여자수 : {total}</span>
    </div>
  );
}

export default Result;
