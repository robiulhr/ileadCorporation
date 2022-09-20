import React,{useState,useEffect} from "react";
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
    sales: 400,
    amt: 2400,
    bg: "rgba(114, 183, 242, 1)",
  },
  {
    name: "Feb",
    sales: 398,
    amt: 2210,
    bg: "rgba(69, 160, 237, 1)",
  },
  {
    name: "Mar",
    sales: 300,
    amt: 2290,
    bg: "rgba(22, 136, 232, 1)",
  },
  {
    name: "Apr",
    sales: 308,
    amt: 2000,
    bg: "rgba(18, 109, 186, 1)",
  },
  {
    name: "May",
    sales: 450,
    amt: 2181,
    bg: "rgba(13, 81, 139, 1)",
  },
  {
    name: "Jun",
    sales: 300,
    amt: 2500,
    bg: "#0b3f6c",
  },
];


const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="flex-row-center-around">
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`} className="text-light-white-500 text-[.8rem] flex"><span className={`w-[15px] mx-2 h-[15px] bg-[${entry.bg}] mt-1`}></span> {entry.name}</li>
        ))
      }
    </ul>
  );
}


const SimpleBarChart = () => {
  const [activeIndex,setactiveIndex] =  useState(0)

const handleMouseOver = (data, index) => {
      setactiveIndex(index)
}
useEffect(() => {
  console.log(activeIndex)
  
}, [activeIndex]);
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
          <CartesianGrid
            strokeDasharray="3"
            horizontalPoints={[
              55, 105, 155, 205, 255, 305
            ]}
            verticalPoints={[
              100, 150, 200, 250, 300, 350, 400
            ]}
          />
          <XAxis
            dataKey="name"
            padding={{ left: 50, right: 50 }}
            strokeWidth={3}
            stroke={"#216BEE"}
            tick={false} 
            
          />
          <YAxis
            domain={[100, 560]}
            strokeWidth={3}
            stroke={"#216BEE"}
            tickCount={7}
          />
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
            cursor={{ fill: "rgba(0, 50, 139, 0.3)" }}
            itemStyle={{ color: "white" }}
          />
          <Legend payload={data} content={renderLegend} />
          

          <Bar
            dataKey="sales"
            animationBegin={5}
            animationDuration={2000}
            label={false}
            onMouseOver={handleMouseOver}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.bg}
                stroke={"#2f6Bce"}
                strokeWidth={index===activeIndex?4:0}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleBarChart;
