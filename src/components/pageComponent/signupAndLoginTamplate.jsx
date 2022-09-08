import React from "react";

const SignupAndLoginTamplate = (props) => {
  const { title, children } = props;

  return (
    <div className="flex-row-start-between container">
      <div className="w-4/12">
        <div className="relative pt-32 pt-20 pb-52">
          <div className="absolute left-[50%] top-[10%] w-[30px] h-[30px] rounded-full bg-balon-1"></div>
          <div className="absolute left-[60%] top-[40%] w-[70px] h-[70px] rounded-full bg-balon-2"></div>
          <div className="absolute left-[10%] top-[100%] w-[110px] h-[110px] rounded-full bg-balon-3"></div>
          <div className="absolute left-[0%] top-[60%] w-[60px] h-[60px] rounded-full bg-balon-2"></div>
          <div className="pr-10">
            <h2 className="main-heading-dark-blue text-[4.3rem]">{title}</h2>
          </div>
        </div>
      </div>
      <div className="w-4/12 mr-64">{children}</div>
    </div>
  );
};

export default SignupAndLoginTamplate;
