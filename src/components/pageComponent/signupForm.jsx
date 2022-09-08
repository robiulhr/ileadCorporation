import React from "react";
import Inputfeild from "../globalComponent/InputtextAndBtn/inputfeild";
import googleLogo from "../../assets/img/flat-color-icons_google.png";
import { Link } from "react-router-dom";
const SignupAndSigninForm = () => {
  return (
    <div className="signupAndloginForm mb-64">
      <div className="">
        <h1 className="main-paragraph-primary-blue my-3 mx-1">First Name</h1>
        <Inputfeild label="Enter First Name" />
      </div>
      <div>
        <h1 className="main-paragraph-primary-blue my-3 mx-1">Last Name</h1>
        <Inputfeild label="Enter Last Name" />
      </div>
      <div>
        <h1 className="main-paragraph-primary-blue my-3 mx-1">Email</h1>
        <Inputfeild label="Enter Email" />
      </div>
      <div>
        <h1 className="main-paragraph-primary-blue my-3 mx-1">Phone Number</h1>
        <Inputfeild label="+1 XXX XXX XXXX" />
      </div>
      <div>
        <h1 className="main-paragraph-primary-blue my-3 mx-1">Password</h1>
        <Inputfeild label="Enter Password" />
      </div>
      <div className="!my-14">
        <button className="btn-primary-blue-transparent w-full">Sign Up</button>
      </div>
      <div className="">
        <p className="signupAndLogin-small-paragraph">
          By clicking Sign up you agree to mailsale and
          <a href="/terms&condition">
            <span className="priveryAndTermsLink">Privacy & Policy</span>
          </a>{" "}
          and
          <a href="/terms&condition">
            <span className="priveryAndTermsLink">Terms & Conditions</span>
          </a>
        </p>
      </div>
      <div className="!mt-20">
        <p className="signupAndLogin-small-paragraph">
          Already have an account?
          <a href="/login">
            <span className="priveryAndTermsLink"><Link to="/login">Sign In</Link></span>
          </a>
        </p>
      </div>
      <div className="!my-24">
        <p className="mb-5 signupAndLogin-small-paragraph">or</p>
        <button className="btn-primary-transparent-blue flex-row-center w-full border-2 border-primary-blue">
          <img src={googleLogo} alt="" className="mr-4" />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignupAndSigninForm;
