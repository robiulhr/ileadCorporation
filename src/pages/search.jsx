import React from "react";
import UserDashboardNav from "../components/globalComponent/NavAndFooter/userDashboardNav";
import PaginationDiv from "../components/globalComponent/pagination";
import SearchResultSection from "../components/pageComponent/search/searchResultSection";
import SearchSingleItem from "../components/pageComponent/search/searchSingleItem";
import CustomSelectInput from "../components/globalComponent/InputtextAndBtn/customSelectInput";
const Search = (props) => {
  const { funcNav,funcUsrDashboardNav } = props;
  funcNav(false);
  funcUsrDashboardNav(true)
  return (
    <>
      <div className="container">
        <UserDashboardNav />
      </div>
      <div className="container">
        <div className="">
          <div className="">
            <p className="my-5 text-primary-gray-100">Lead Location</p>
          </div>
          <div className="flex-row-center-between">
            <div className="flex-row-center-between w-7/12">
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Select Country", "ferari", "lamborgini", "marchities"]}
              />
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Select City", "ferari", "lamborgini", "marchities car"]}
              />
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Select State", "ferari", "lamborgini", "marchities"]}
              />
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Zip", "ferari", "lamborgini", "marchities"]}
              />
            </div>
            <div className="flex-row-center w-3/12">
              <CustomSelectInput
                id="cars"
                name="car"
                data={[
                  "Select Categories",
                  "ferari",
                  "lamborgini",
                  "marchities select one of them",
                ]}
              />
            </div>
            <div className="flex-row-center justify-end w-2/12">
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Newer to Older", "ferari", "lamborgini", "marchities"]}
              />
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="">
            <p className="my-5 text-primary-gray-100">Lead Location</p>
          </div>
          <div className="flex-row-center-between">
            <div className="flex-row-center-between w-7/12">
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Select Country", "ferari", "lamborgini", "marchities"]}
              />
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Select City", "ferari", "lamborgini", "marchities car"]}
              />
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Select State", "ferari", "lamborgini", "marchities"]}
              />
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Zip", "ferari", "lamborgini", "marchities"]}
              />
            </div>
            <div className="flex-row-center w-3/12">
              <CustomSelectInput
                id="cars"
                name="car"
                data={[
                  "Select Categories",
                  "ferari",
                  "lamborgini",
                  "marchities select one of them",
                ]}
              />
            </div>
            <div className="flex-row-center justify-end w-2/12">
              <CustomSelectInput
                id="cars"
                name="car"
                data={["Newer to Older", "ferari", "lamborgini", "marchities"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SearchResultSection>
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
          <SearchSingleItem />
        </SearchResultSection>
      </div>
      <PaginationDiv />
    </>
  );
};

export default Search;
