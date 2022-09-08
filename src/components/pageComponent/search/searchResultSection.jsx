import React from "react";
import { Link } from "react-router-dom";

const SearchResultItem = (props) => {
  const { children } = props;
  return (
    <div className="my-20 container">
      <div className="flex-row-center-between bg-normal-light-blue-100">
        <div className="w-8/12">
          <p className="ml-10">Search Result</p>
        </div>
        <div className="w-3/12 flex-row-center-between">
          <div>
            <form action="#">
              <input
                className="border my-4 !rounded-xl relative top-1"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1" className=" mx-3 !my-4">
                {" "}
                Select All
              </label>
            </form>
          </div>
          <p className="mr-10">
            <Link to="#" className="priveryAndTermsLink">
              Unlock All
            </Link>
          </p>
        </div>
      </div>
      <div className="my-20">{children.map((ele) => ele)}</div>
    </div>
  );
};

export default SearchResultItem;
