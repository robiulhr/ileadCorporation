import React from "react";
import graphicImage01 from "../assets/img/graphic-image03.png";
import ImgNdestwosec from "../components/globalComponent/twoDivInRow/imgNdestwosec";
import CrmContentSection from "../components/globalComponent/twoDivInRow/twoDivInnerContentSmall";
import graphicImage from "../assets/img/graphic-image.png";
import SingleDivComp from "../components/globalComponent/singleDivComp";
import HeadingAndSignupBtn from "../components/globalComponent/InputtextAndBtn/headingAndSignupBtn";
import FrequentlyAskedQustion from "../components/globalComponent/frequentlyAskedQustion";
import FrequentlyAskedQuestionsContent from "../content/frequentlyAskedQuestionsContent";
import HeadingParagraphBtn from "../components/globalComponent/InputtextAndBtn/headingParagraphBtn";
import FindNowBtn from "../components/globalComponent/InputtextAndBtn/findNowBtn";
const EmailFinder = (props) => {
  const { funcNav ,funcUsrDashboardNav,funcmainFooter} = props;
  funcNav(true);
  funcUsrDashboardNav(false)
  funcmainFooter(true)
  return (
    <>
      <div className="container">
        <div className="w-full flex-row-center">
          <img className="w-[550px]" src={graphicImage01} alt="" />
        </div>
        <HeadingParagraphBtn
          heading="Email Finder"
          headingClss="text-[3.3rem] font-[600] leading-14 text-center my-0"
          paragraph="Find any email. Anywhere."
        />
        <FindNowBtn label={"Search"} submitBtn={true} btnText={"Find Now"}>
          <h1 className="dashboard-findbtn-heading text-normal-dark-blue my-4 text-[1.5rem] ml-[-10rem]">
            Your perfect lead is a click away. Let's find them.
          </h1>
        </FindNowBtn>
        <div className="my-44 flex-coloum-center">
          <h1 className="dashboard-findbtn-heading">
            We have found over <span>260 million leads</span> for over{" "}
            <span>680,000 users</span> in the last 12 months
          </h1>
          <button className="btn btn-primary-blue-transparent px-20 border-2 text-[1.3rem]">
            Join Now
          </button>
        </div>
        <div className="my-14">
          <ImgNdestwosec flexRowReverse>
            <CrmContentSection
              reverseDiv
              title="Here is TagLine 1 tagline 2 tagtagLine 3"
              paragraph="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
              btnText="Learn More"
            />
            <img src={graphicImage} alt="description" />
          </ImgNdestwosec>
        </div>
        <div className="my-14">
          <ImgNdestwosec>
            <CrmContentSection
              title="Here is TagLine 1 tagline 2 tagtagLine 3"
              paragraph="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
              btnText="Learn More"
            />
            <img src={graphicImage} alt="description" />
          </ImgNdestwosec>
        </div>
      </div>
      <div className="my-20">
        <SingleDivComp
          title="Here is TagLine 1"
          paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo."
          btnText="Read More"
        />
      </div>
      <FrequentlyAskedQustion
        title="Frequently asked questions"
        questions={FrequentlyAskedQuestionsContent}
      />
      <div className="mt-40">
        <HeadingAndSignupBtn />
      </div>
    </>
  );
};

export default EmailFinder;
