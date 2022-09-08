import React from "react";
import mainlogo from "../../../assets/img/logo/logo.png";
import Inputfeild from "../InputtextAndBtn/inputfeild";
import SearchIcon from "@mui/icons-material/Search";
import smallProfile from "../../../assets/img/smallprofile.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
const UserDashboardNav = () => {
  return (
    <div className="flex-row-center-between mt-28 mb-28 container">
      <div className="w-3/12">
        <Link to="/">
          <img src={mainlogo} alt="main logo" />
        </Link>
      </div>
      <div className="w-5/12 ml-[-3rem]">
        <Inputfeild label="Search leads, categories">
          <SearchIcon />
        </Inputfeild>
      </div>
      <div className="w-[27%] flex-row-center">
        <div className=" flex-row-center w-1/2">
          <img src={smallProfile} alt="" />
          <div className="mx-3">
            <p>Hello, Jack</p>
            <h2 className="text-[1rem] text-normal-dark-blue">
              My Account <ArrowDropDownIcon />
            </h2>
          </div>
        </div>
        <div className="w-1/2">
          <div className=" flex-row-center justify-end w-full">
            <div className="cart mx-4">
              <AddShoppingCartIcon />
            </div>
            <div>
              <p>My cart</p>
              <h2 className="text-[1rem] text-normal-dark-blue">
                0.00 <ArrowDropDownIcon />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardNav;
