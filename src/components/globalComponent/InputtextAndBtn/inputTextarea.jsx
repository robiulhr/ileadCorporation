import React from "react";

const InputTextArea = (props) => {
  const { classes, label,id,placeholder, children } = props;
  return (
    <div className={`relative ${classes}`}>
      <textarea
        type={id}
        id="fname"
        className="peer bg-transparent inputTextArea !w-full"
        placeholder={placeholder}
        width="100%"
        height="150px"
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

export default InputTextArea;
