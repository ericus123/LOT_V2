import * as V from "victory";

const data = [
  {quarter: "Jan", earnings: 0},
  {quarter: "Feb", earnings: 10},
  {quarter: "Mar", earnings: 10},
  {quarter: "Apr", earnings: 40},
   {quarter: "May", earnings: 40},
  {quarter: "Jun", earnings: 10},
  {quarter: "Jul", earnings: 40},
  {quarter: "Aug", earnings: 0}
];

const HomeChart = () => {
    return (
      <V.VictoryChart >
        <V.VictoryBar 
          style={{ data: { fill: "#1B27AF" } }}
          data={data}
          x="quarter"
          y="earnings"
        />
      </V.VictoryChart>
    );
  };
export default HomeChart;