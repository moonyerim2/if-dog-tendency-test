import { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import * as PieChartsComponents from "./componets/PieChartComponents";

export default function PieCharts({ dogs }) {
  const COLORS = [
    "#5dddde",
    "#ddddff",
    "#0000de",
    "#33dd55",
    "#ff2255",
    "#ff9900",
  ];

  const [total, setTotal] = useState(0);
  const [dogsDataArr, setDogsDataArr] = useState([]);

  useEffect(() => {
    dogs.getParticipants(setTotal);
    dogs.getRatioNameArr(setDogsDataArr, total);
  }, [total]);

  return (
    <PieChartsComponents.Container>
      <PieChartsComponents.Wrapper>
        <PieChartsComponents.Header>
          <PieChartsComponents.Title>IF-DOG 비율</PieChartsComponents.Title>
          <PieChartsComponents.Description>
            전체 참여자수 기준
          </PieChartsComponents.Description>
        </PieChartsComponents.Header>
        <PieChartsComponents.RatioWrapper>
          {dogsDataArr.map((dog, idx) => (
            <PieChartsComponents.LangColorBoxWrapper
              key={`${dog.name}-${dog.value}`}
            >
              <PieChartsComponents.LangColorBox idx={COLORS[idx]} />
              <div>
                <PieChartsComponents.LangText>
                  {dog.value}%
                </PieChartsComponents.LangText>
                <PieChartsComponents.LangText>
                  {dog.name}
                </PieChartsComponents.LangText>
              </div>
            </PieChartsComponents.LangColorBoxWrapper>
          ))}
        </PieChartsComponents.RatioWrapper>
      </PieChartsComponents.Wrapper>

      <PieChartsComponents.PieWrapper>
        <PieChart width={200} height={200}>
          <Pie
            data={dogsDataArr}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={false}
          >
            {dogsDataArr.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </PieChartsComponents.PieWrapper>
    </PieChartsComponents.Container>
  );
}
