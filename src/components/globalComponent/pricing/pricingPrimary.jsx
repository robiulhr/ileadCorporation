import React from "react";

const PricingPrimary = (props) => {
  const { title, description, price, btnText } = props;
  return (
    <div className="w-1/3 mx-3 p-10 border-4 border-normal-light-blue-100 rounded-[3rem] h-full">
      <h1 className="main-heading-primary-blue text-[2rem] text-center">
        {title}
      </h1>
      <p className="main-paragraph-primary-blue text-center mb-10">
        {description}
      </p>
      <p className="main-paragraph-primary-blue text-center text-[1.6rem] font-[800]">
        {price}
      </p>
      <div className="flex-row-center">
        <button className="btn btn-primary-blue-transparent mb-6 mt-10 px-16 py-3 text-center text-[1.2rem] rounded-[4rem]">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default PricingPrimary;
