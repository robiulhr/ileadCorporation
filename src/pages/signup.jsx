import React from "react";
import SignupAndLoginNav from "../components/globalComponent/NavAndFooter/signupAndLoginNav";
import SignupAndLoginTamplate from "../components/pageComponent/signupAndLoginTamplate";
import SignupForm from "../components/pageComponent/signupForm";
import MainFotter from "../components/globalComponent/NavAndFooter/mainFotter";
const Signup = () => {
  return (
    <div className="">
      <SignupAndLoginNav title="Create your account for fast growth" />
      <SignupAndLoginTamplate title="Better ideas for fast growth">
        <SignupForm />
      </SignupAndLoginTamplate>
      <MainFotter />
    </div>
  );
};

export default Signup;
