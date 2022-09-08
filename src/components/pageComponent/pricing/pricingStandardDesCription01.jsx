import React from "react";

const PricingStandardDesCription01 = (props) => {
  const { ind, leftText, headingRight, paragraph } = props;
  return (
    <div className={`pricingStandartDescription-${ind}`}>
      <div className="triangle"></div>
      <div className="border-8 mx-5 rounded-3xl border-info flex-row-center">
        <div className="w-3/12 bg-info py-12 px-5 flex-coloum-center">
          <p className="main-paragraph-primary-blue mt-10 mb-5 text-[1.3rem] text-justify leading-5">
            {leftText}
          </p>
          <button className="btn btn-primary-blue-transparent py-2 px-20 text-[1.3rem] rounded-lg my-5">
            Buy Now
          </button>
          <button className="btn btn-primary-transparent-blue py-2 text-[1.3rem] rounded-lg px-[4.4rem]">
            Learn Now
          </button>
        </div>
        <div className="w-9/12 p-10 bg-white">
          <h1 className="my-4 main-heading-primary-blue text-[1.9rem]">
            {headingRight}
          </h1>
          {paragraph.map((ele) => (
            <p className="main-paragraph-primary-blue mb-5">{ele}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingStandardDesCription01;
