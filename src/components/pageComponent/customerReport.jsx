import React from "react";
const CustomerReport = (props) => {
  const { avatar, title, text, btnText } = props;
  return (
    <div className="flex-row-around w-[90%] mx-auto my-10">
      <div className="w-3/12 p-10 !pl-0 mr-5">
        <img src={avatar} alt="avatar" className="" />
      </div>
      <div className="w-9/12 p-3 mt-10">
        <h2 className="main-heading-dark-blue text-[1.9rem] px-2">{title}</h2>
        <p className="main-paragraph-gray text-[1.6rem] p-2 pb-5">{text}</p>
        <button className="btn btn-primary-blue-transparent py-3 text-[1rem] px-16">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default CustomerReport;
