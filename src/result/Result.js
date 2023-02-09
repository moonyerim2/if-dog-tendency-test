import { useState, useEffect } from "react";

function Result({ dogs }) {
  const [result, setResult] = useState({});
  const [total, setTotal] = useState(0);
  const [ratios, setRatios] = useState([]);
  const [colDatas, setColDatas] = useState([]);

  const dog = {
    name: "시베리안 허스키",
    id: 5,
    mbti: "ISTJ",
    contents:
      "대형견인 허스키는 덩치만 컸지 순둥이랍니다. 아이들과 다른 작은 동물들과도 잘 지내죠. 하지만 독립적인 성격이랑 혼자인 시간도 필요해요!",
    img: "이미지",
    counts: 1,
  };

  useEffect(() => {
    dogs.get(setResult, dog.name);
  }, []);

  useEffect(() => {
    dogs.getParticipants(setTotal);
    dogs.getRatios(setRatios, total);
    dogs.getColumnDatas(setColDatas, "name");
  }, [total]);

  return (
    <div>
      <br />
      {/* <button onClick={onDogAdd}>Add Dog</button> */}
      <br />
      <br />
      <span>
        <div key={result.id}>
          <span>{`당신이 개라면 ? ${result.name} (${result.mbti})`}</span>
          <br />
          <span>{`${result.contents}`}</span>
        </div>
      </span>
      <br />
      <br />
      <br />

      <span>참여자수 : {total}</span>
      <br />
      <br />
      <br />
      <ul>
        {ratios.map((num, i) => {
          return (
            <li>
              <h1>{colDatas[i]}</h1>
              {String(num) + "% "}
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Result;
