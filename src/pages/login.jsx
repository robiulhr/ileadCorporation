import React from "react";
import SignupAndLoginNav from "../components/globalComponent/NavAndFooter/signupAndLoginNav";
import SigninForm from "../components/pageComponent/signinForm";
import SignupAndLoginTamplate from "../components/pageComponent/signupAndLoginTamplate";

const Login = (props) => {
  const { funcNav ,funcUsrDashboardNav} = props;
  funcNav(false);
  funcUsrDashboardNav(false)
  return (
    <div className="">
      <SignupAndLoginNav title="Create your account for fast growth" />
      <SignupAndLoginTamplate title="We’re here to help you grow">
        <SigninForm />
      </SignupAndLoginTamplate>
    </div>
  );
};

export default Login;
