import React from "react";
import SignupAndLoginNav from "../components/globalComponent/NavAndFooter/signupAndLoginNav";
import SignupAndLoginTamplate from "../components/pageComponent/signupAndLoginTamplate";
import SignupForm from "../components/pageComponent/signupForm";

const Signup = (props) => {
  const { funcNav,funcUsrDashboardNav,funcmainFooter } = props;
  funcNav(false);
  funcUsrDashboardNav(false)
  funcmainFooter(true)
  return (
    <div className="">
      <SignupAndLoginNav title="Create your account for fast growth" />
      <SignupAndLoginTamplate title="Better ideas for fast growth">
        <SignupForm />
      </SignupAndLoginTamplate>
    </div>
  );
};

export default Signup;
