import React from "react";

const Inputfeild = (props) => {
  const { classes, label,id,placeholder, children } = props;
  return (
    <div className={`relative ${classes}`}>
      <input
        type={id}
        id="fname"
        className="peer bg-transparent input-feild !w-full"
        placeholder={placeholder}
      />
      {children}
      <label
        htmlFor={id}
        className="input-feild-label "
      >
        {label}
      </label>
    </div>
  );
};

export default Inputfeild;
