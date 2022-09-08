import React from "react";

const SingleDivComp = (props) => {
  const { title, paragraph, btnText } = props;
  return (
    <div className="container mt-36 mb-20">
      <div className="flex-row-center h-[600px]  bg-normal-light-blue-100 px-20 py-10">
        <div className="h-full w-7/12 flex-row-center items-end">
          <div>
            <h2 className="main-heading-primary-blue text-[2.4rem]">{title}</h2>
            <p className="main-paragraph-primary-blue">{paragraph}</p>
          </div>
        </div>
        <div className="h-full w-5/12 flex-row-center items-end justify-end">
          <div className="pb-10">
            <button className="btn btn-primary-blue-transparent rounded-[4rem] text-[1.1rem] py-3 px-14 outline-none border-primary-blue border-2">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDivComp;
