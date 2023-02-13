import { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import * as PieChartsComponents from "./components/PieChartComponents";

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
        <PieChartsComponents.PieWrapper>
          <PieChart width={500} height={210}>
            <Pie
              data={dogsDataArr}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
              width={600}
              height={310}
              isAnimationActive={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#8884d8"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                    fontSize="15px"
                  >
                    {dogsDataArr[index].name} ({dogsDataArr[index].value}%)
                  </text>
                );
              }}
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
      </PieChartsComponents.Wrapper>
    </PieChartsComponents.Container>
  );
}
