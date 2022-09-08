import React from "react";

const ImgNdestwosec = (props) => {
  const { flexRowReverse, children } = props;
  return (
    <div
      className={`py-[5.5rem] flex-row-center ${
        flexRowReverse ? "!flex-row-reverse" : ""
      }`}
    >
      <div className={`w-1/2 ${flexRowReverse ? "text-end" : "text-start"}`}>
        {children[0]}
      </div>
      <div className={`w-1/2 p-8 ${flexRowReverse ? "!pl-0" : "!pr-0"}`}>
        {children[1]}
      </div>
    </div>
  );
};

export default ImgNdestwosec;
