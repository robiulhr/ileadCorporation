import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer,Legend,Cell,Tooltip } from 'recharts';


const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="flex-row-center-around p-1">
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`} className="text-light-white-500 text-[.8rem] flex"><span className={`w-[15px] mx-2 h-[15px] bg-[${entry.bg}] mt-1`}></span> {entry.name}</li>
        ))
      }
    </ul>
  );
}




const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };



const CustomActiveShapePieChart = ({data}) => {
   
  const [activeIndex,setactiveIndex] =  useState(0)

 const onPieEnter = (_, index) => {
    setactiveIndex(index)
  };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.bg}  />
            ))}
          </Pie>
          
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
        </PieChart>
      </ResponsiveContainer>
    );
}

export default CustomActiveShapePieChart;

