import React from "react";

const CustomSelectInput = (props) => {
  const { name, id, data } = props;
  return (
    <div className="">
      <select name={name} id={id} className="px-5 selectInput-container">
        {data.map((ele) => (
          <option value={ele.toLowerCase()}>{ele}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectInput;
