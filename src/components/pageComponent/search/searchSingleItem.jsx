import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/img/avatar-small.png";
const SearchSingleItem = () => {
  return (
    <div className="flex-row-center-between px-10 border shadow">
      <div className="">
        <input type="checkbox" />
      </div>
      <div className="p-3">
        <img src={avatar} alt="" />
      </div>
      <div>
        <Link to="" className="text-primary-gray-100">
          Lamong Chiao
        </Link>
      </div>
      <div>
        <Link to="" className="text-primary-gray-100">
          Accountant
        </Link>
      </div>
      <div>
        <Link to="" className="text-primary-gray-100">
          500 N Michigan Ave suite 600-1, Chicago, IL 60611, United States
        </Link>
      </div>
      <div>
        <button className="btn-primary-blue-transparent rounded-full py-1 px-6 text-[.91rem]">
          Unlock
        </button>
      </div>
    </div>
  );
};

export default SearchSingleItem;
