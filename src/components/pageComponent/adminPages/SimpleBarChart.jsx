import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 400,
    amt: 2400,
    bg: "rgba(114, 183, 242, 1)",
  },
  {
    name: "Feb",
    pv: 398,
    amt: 2210,
    bg: "rgba(69, 160, 237, 1)",
  },
  {
    name: "Mar",
    pv: 300,
    amt: 2290,
    bg: "rgba(22, 136, 232, 1)",
  },
  {
    name: "Apr",
    pv: 308,
    amt: 2000,
    bg: "rgba(18, 109, 186, 1)",
  },
  {
    name: "May",
    pv: 450,
    amt: 2181,
    bg: "rgba(13, 81, 139, 1)",
  },
  {
    name: "Jun",
    pv: 300,
    amt: 2500,
    bg: "rgba(11, 63, 108, 1)",
  },
];
const SimpleBarChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          barCategoryGap={1}
        >
          <CartesianGrid  strokeDasharray="3" />
          <XAxis dataKey="name" padding={{ left: 50, right: 50 }} strokeWidth={3} stroke={"#216BEE"}  />
          <YAxis type="number" domain={[100, 560]}   strokeWidth={3} stroke={"#216BEE"} tickCount={10} />
          <Tooltip
            wrapperStyle={{
              background: "#216BEE",
              border: "none",
              outline: "none",
            }}
            contentStyle={{
              background: "transparent",
              border: "none",
              margin: "10px",
              outline: "none",
              color: "white",
            }}
            cursor={{fill:"rgba(0, 50, 139, 0.3)"}} 
            itemStyle={{ color: "white" }}
          />
            <Legend />

          <Bar dataKey="pv" animationBegin={5} animationDuration={2000} label={false} >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.bg}
                strokeWidth={index === 2 ? 4 : 1}
                onMouseOver={(e)=>{console.log(e)}}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleBarChart;
