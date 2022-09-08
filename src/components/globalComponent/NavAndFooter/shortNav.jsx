import React from "react";

const ShortNav = (props) => {
  const { children } = props;
  return (
    <div className="m-20 flex-row-around">
      <ul className="w-full main-nav-menu flex-row-center-between">
        {children.map((ele) => ele)}
      </ul>
    </div>
  );
};

export default ShortNav;
