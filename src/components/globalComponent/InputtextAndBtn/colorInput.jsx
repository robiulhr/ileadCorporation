import React, { useState } from "react";

const ColorInput = () => {
  const [color, setcolor] = useState("rgba(43, 119, 255, 3)");
  const handleOnchange = (e) => {
    e.preventDefault();
    setcolor(e.target.value);
  };
  return (
    <div className="flex-coloum-center w-full my-10">
      <div className="rounded-full border-primary-gray-100 border-[1px] w-[160px] h-[160px] my-10">
        <div
          className="w-full h-full rounded-full border-[30px]"
          style={{ borderColor: `${color}` }}
        ></div>
      </div>

      <div>
        <input
          value={`${color}`}
          type="text"
          className="w-full bg-transparent border-[1px] rounded-md py-3 px-5 text-light-white-500 border-light-white-500"
          onChange={handleOnchange}
        />
      </div>
    </div>
  );
};

export default ColorInput;
