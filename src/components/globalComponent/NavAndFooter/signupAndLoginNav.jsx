import React from "react";
import mainlogo from "../../../assets/img/logo/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";

const SignupAndLoginNav = (props) => {
  const { title } = props;
  return (
    <div className="flex-row-center-between container my-28">
      <div className="w-5/12">
        <div className="">
          <Link to="/">
            <img src={mainlogo} alt="" />
          </Link>
        </div>
      </div>
      <div className="w-5/12">
        <h1 className="main-heading-primary-blue text-[30px] text-center">
          {title}
        </h1>
      </div>
      <div className="w-2/12 flex justify-end">
        <div className="relative group">
          <span className="hover:text-white ml-4 mr-6 cursor-default">
            <a href="home.html">
              <LanguageIcon /> English
            </a>
          </span>
          <ul className="main-nav-dropdown-menu flex-coloum-center ">
            <li>
              <Link to="#">English (En)</Link>
            </li>
            <li>
              <Link to="#">Português (Br)</Link>
            </li>

            <li>
              <Link to="#">简体中文 (Zh)</Link>
            </li>

            <li>
              <Link to="#">Українська (Ua)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignupAndLoginNav;
