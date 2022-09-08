import React from "react";
import Inputfeild from "../globalComponent/InputtextAndBtn/inputfeild";
import googleLogo from "../../assets/img/flat-color-icons_google.png";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <div className="signupAndloginForm mb-64">
      <div>
        <h1 className="main-paragraph-primary-blue my-3 mx-1">Email</h1>
        <Inputfeild label="Enter Email" />
      </div>
      <div>
        <h1 className="main-paragraph-primary-blue my-3 mx-1">Password</h1>
        <Inputfeild label="Enter Password" />
      </div>
      <div className="flex-row-center-between">
        <div>
          <form action="#">
            <input
              className="border mt-5 !rounded-xl"
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label
              for="vehicle1"
              className="signupAndLogin-small-paragraph mx-3 text-[1.3rem]"
            >
              {" "}
              Remeber Me
            </label>
          </form>
        </div>

        <p className="">
          <a href="/forgotpassword" className="priveryAndTermsLink">
            Forgot Password?
          </a>
        </p>
      </div>
      <div className="!my-14">
        <button className="btn-primary-blue-transparent w-full">Login</button>
      </div>
      <div className="!mt-20">
        <p className="signupAndLogin-small-paragraph">
          Don’t have an account?
          <a href="/login">
            <span className="priveryAndTermsLink"><Link to="/signup">Sign Up</Link></span>
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

export default SigninForm;
