import { useState, useEffect } from "react";
import * as ResultComponents from "./components/ResultsComponents";

function Result({ dogs, species }) {
  const [result, setResult] = useState({});
  const [total, setTotal] = useState(0);

  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(`/images/${species}.jpg`); // species
    dogs.update(species);
    dogs.get(setResult, species);
  }, []);

  useEffect(() => {
    dogs.getParticipants(setTotal);
  }, [total]);

  return (
    <ResultComponents.Container>
      <ResultComponents.Box>
        <ResultComponents.Title>내가 개가 된다면?</ResultComponents.Title>
        <ResultComponents.ResultImg src={img} />
        <ResultComponents.ResultSubTitle>
          {result.subtitle}
        </ResultComponents.ResultSubTitle>
        <ResultComponents.ResultTitle>
          {result.name}
        </ResultComponents.ResultTitle>
        <ResultComponents.ResultBody>
          {result.contents}
        </ResultComponents.ResultBody>
      </ResultComponents.Box>
    </ResultComponents.Container>
  );
}

export default Result;
