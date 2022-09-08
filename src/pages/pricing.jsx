import React from "react";
import HeadingParagraphBtn from "../components/globalComponent/InputtextAndBtn/headingParagraphBtn";
import PrimaryTab from "../components/globalComponent/TabSection/primaryTab";
import PricingPrimaryContent from "../content/pricingPrimary";
import PricingPrimary from "../components/globalComponent/pricing/pricingPrimary";
import PricingStandardContent from "../content/pricingStandard";
import StandartTab from "../components/globalComponent/TabSection/standartTab";
import PricingStandardDesCription01 from "../components/pageComponent/pricing/pricingStandardDesCription01";
import PricingStandrdDescriptionContent from "../content/pricingStandrdDescriptionContent";
const Pricing = (props) => {
  const { funcNav ,funcUsrDashboardNav} = props;
  funcNav(true);
  funcUsrDashboardNav(false)
  return (
    <div className="pricingPage" id="pricingPage">
      <div className="container">
        <HeadingParagraphBtn
          heading="Headline 1"
          paragraph="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
          btnText="Sign Up"
        />
      </div>
      <div>
        <StandartTab List={PricingStandardContent}>
          {PricingStandrdDescriptionContent.map((ele, ind) => {
            return (
              <PricingStandardDesCription01
                ind={ind}
                leftText={ele.leftText}
                headingRight={ele.headingRight}
                paragraph={ele.paragraph}
              />
            );
          })}
        </StandartTab>
      </div>
      <div className="container">
        <HeadingParagraphBtn
          heading="Headline 1"
          paragraph="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
        />
      </div>
      <div className="">
        <PrimaryTab List={PricingPrimaryContent.map((ele) => ele.category)}>
          {PricingPrimaryContent.map((ele, ind) => {
            return (
              <div>
                <div className="transition duration-1000 flex-row-center min-h-[500px] h-auto">
                  {ele.content.map((element, index) => {
                    return (
                      <PricingPrimary
                        title={element.plan}
                        description={element.description}
                        price={element.price}
                        btnText={"Buy Now"}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </PrimaryTab>
      </div>
    </div>
  );
};

export default Pricing;
