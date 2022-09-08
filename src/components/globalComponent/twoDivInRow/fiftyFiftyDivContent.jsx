import React from "react";

const FiftyFiftyDivContent = (props) => {
  const { children } = props;
  return (
    <div className=" w-full flex-row-center">
      <div className="pr-5 w-1/2">{children[0]}</div>
      <div className="pl-5 w-1/2">{children[1]}</div>
    </div>
  );
};

export default FiftyFiftyDivContent;
