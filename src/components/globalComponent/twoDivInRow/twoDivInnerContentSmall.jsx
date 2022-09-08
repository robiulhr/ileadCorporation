import React from "react";

const TwoDivInnerContentSmall = (props) => {
  const { title, paragraph, reverseDiv } = props;

  return (
    <div>
      <div
        className={`${reverseDiv ? "!text-end pl-10" : "!text-start pr-10"}`}
      >
        <h1 className="main-heading-dark-blue text-[3.2rem] pb-12">{title}</h1>
        <p className="main-paragraph-gray text-[1.8rem] font-[450] pb-16">
          {paragraph}
        </p>
        <div className=""></div>
      </div>
    </div>
  );
};

export default TwoDivInnerContentSmall;
