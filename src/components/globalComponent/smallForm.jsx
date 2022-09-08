import React from "react";
import Inputfeild from "./InputtextAndBtn/inputfeild";
const SmallForm = (props) => {
  const { title, paragraph, firstLabel, secondLabel, btnText } = props;
  return (
    <div className="pr-[9rem] my-48 smallForm">
      <h1 className="main-heading-dark-blue pb-12">{title}</h1>
      <p className="main-paragraph-gray pb-16 text-justify text-[1.4rem]">
        {paragraph}
      </p>

      <form className="">
        <div className="pb-10">
          <Inputfeild label={firstLabel} />
        </div>
        <div>
          <Inputfeild label={secondLabel} />
        </div>
        <div className="flex-row-center justify-end py-5">
          <button
            type="submit"
            className="btn btn-primary-blue-transparent text-[1.4rem] py-3 px-16 rounded-[4rem]"
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SmallForm;
