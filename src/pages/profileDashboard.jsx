import React from "react";
import ShortNav from "../components/globalComponent/NavAndFooter/shortNav";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StandartTab from "../components/globalComponent/TabSection/standartTab";
import PricingStandardContent from "../content/pricingStandard";
import PricingStandardDescription02 from "../components/pageComponent/pricing/pricingStandardDescription02";
import PricingStandrdDescriptionContent from "../content/pricingStandrdDescriptionContent";
const ProfileDashboard = (props) => {
  const { funcNav,funcUsrDashboardNav } = props;
  funcNav(false);
  funcUsrDashboardNav(true)
  return (
    <>

      <div className="container">
        <div className="mt-40">
          <ShortNav searchFeild>
            {[
              { Title: "Accountant", dropDown: false },
              { Title: "Agriculture", dropDown: false },
              {
                Title: "Engineer",
                dropDown: false,
                dropDownItem: ["item1", "item2"],
              },
              { Title: "Healtcare", dropDown: false },
              { Title: "IT Sector", dropDown: false },
              { Title: "Marketing", dropDown: false },
              { Title: "Rider", dropDown: false },
              { Title: "Student", dropDown: false },
              { Title: "Teacher", dropDown: false },
            ].map((ele, ind) => {
              return (
                <li
                  className={`text-[1rem] ml-[-60px] flex-auto ${
                    ele.dropDown ? "relative group" : ""
                  }`}
                >
                  <a href="home.html" className="flex">
                    {ele.Title}
                    {ele.dropDown ? <ArrowDropDownIcon /> : ""}
                  </a>
                  {ele.dropDown ? (
                    <ul className="main-nav-dropdown-menu flex-coloum-center ">
                      {ele.dropDownItem.map((ele) => {
                        return (
                          <li>
                            <a href="home.html">{ele}</a>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ShortNav>
        </div>
      </div>
      <StandartTab List={PricingStandardContent}>
        {PricingStandrdDescriptionContent.map((ele, ind) => {
          return <PricingStandardDescription02 ind={ind} />;
        })}
      </StandartTab>
    </>
  );
};

export default ProfileDashboard;
