import React from "react";
import SignupAndLoginNav from "../components/globalComponent/NavAndFooter/signupAndLoginNav";
import SigninForm from "../components/pageComponent/signinForm";
import SignupAndLoginTamplate from "../components/pageComponent/signupAndLoginTamplate";
import MainFotter from "../components/globalComponent/NavAndFooter/mainFotter";

const Login = () => {
  return (
    <div className="">
      <SignupAndLoginNav title="Create your account for fast growth" />
      <SignupAndLoginTamplate title="We’re here to help you grow">
        <SigninForm />
      </SignupAndLoginTamplate>
      <MainFotter />
    </div>
  );
};

export default Login;
