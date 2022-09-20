import React from "react";
import FiftyFiftyDivContent from "../components/globalComponent/twoDivInRow/fiftyFiftyDivContent";
import SmallForm from "../components/globalComponent/smallForm";
import graphiqImg01 from "../assets/img/sales-crm/graphic-image-01.png";
import ImgNdestwosec from "../components/globalComponent/twoDivInRow/imgNdestwosec";
import CrmContentSection from "../components/globalComponent/twoDivInRow/twoDivInnerContentSmall";
import graphicImage from "../assets/img/graphic-image.png";
import SingleDivComp from "../components/globalComponent/singleDivComp";
import HeadingAndSignupBtn from "../components/globalComponent/InputtextAndBtn/headingAndSignupBtn";
import FrequentlyAskedQustion from "../components/globalComponent/frequentlyAskedQustion";
import FrequentlyAskedQuestionsContent from "../content/frequentlyAskedQuestionsContent";
import HeadingParagraphBtn from "../components/globalComponent/InputtextAndBtn/headingParagraphBtn";
const SalesCrm = (props) => {
  const { funcNav ,funcUsrDashboardNav,funcmainFooter} = props;
  funcNav(true);
  funcUsrDashboardNav(false)
  funcmainFooter(true)
  return (
    <>
      <div className="container">
        <FiftyFiftyDivContent>
          <SmallForm
            title="A free sales CRM eco-system"
            firstLabel="Name"
            secondLabel="Email"
            paragraph="that promotes your business growth, not stifles it"
            btnText="Join Now"
          />
          <img src={graphiqImg01} alt="Description" />
        </FiftyFiftyDivContent>
        <HeadingParagraphBtn
          heading="CRM systems don't have to be complex to boost your sales. MailSale is the proof."
          headingClss="text-[3.3rem] font-[600] leading-14 text-center my-6"
          paragraph="With little learning curve you can organize your lead base and focus on the right deals."
        />
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

export default SalesCrm;
