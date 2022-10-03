import React from "react";
import ImgNdestwosec from "../components/globalComponent/twoDivInRow/imgNdestwosec";
import MailIcon from "@mui/icons-material/Mail";
import graphicImage01 from "../assets/img/graphic-images/graphic-image-01.png";
import graphicImage02 from "../assets/img/graphic-images/graphic-image-02.png";
import graphicImage03 from "../assets/img/graphic-images/graphic-image-03.png";
import graphicImage04 from "../assets/img/graphic-images/graphic-image-04.png";
import graphicImage05 from "../assets/img/graphic-images/graphic-image-05.png";
import FindNowBtn from "../components/globalComponent/InputtextAndBtn/findNowBtn";
import DashboardpageContentSection from "../components/globalComponent/twoDivInRow/twoDivInnercontentSection";
const Dashboard = () => {
  return (
    <>
      <div className="container">
        <ImgNdestwosec>
          <DashboardpageContentSection
            title="Deliver Exceptional Email Experiences with MailSale"
            paragraph="Leverage the email service that customer-first brands trust for reliable inbox delivery at scale."
            btnText="Let’s Work Together"
          >
            <MailIcon />
          </DashboardpageContentSection>
          <img src={graphicImage01} alt="description" />
        </ImgNdestwosec>
        <FindNowBtn label={"Search"} submitBtn={true} btnText={"Find Now"}>
          <h1 className="dashboard-findbtn-heading">
            We have found over <span>260 million leads</span> for over{" "}
            <span>680,000 users</span> in the last 12 months
          </h1>
        </FindNowBtn>
        <ImgNdestwosec flexRowReverse={true}>
          <DashboardpageContentSection
            title="Sales CRM"
            paragraph="CRM systems don't have to be complex to boost your sales. MailSale is the proof. With little learning curve you can organize your lead base and focus on the right deals."
            btnText="Learn More"
          />
          <img src={graphicImage02} alt="description" />
        </ImgNdestwosec>
        <ImgNdestwosec>
          <DashboardpageContentSection
            title="Email API"
            paragraph="Integrate in minutes with our email API and trust your emails reach the inbox."
            btnText="Learn More"
          />
          <img src={graphicImage03} alt="description" />
        </ImgNdestwosec>
        <ImgNdestwosec flexRowReverse={true}>
          <DashboardpageContentSection
            title="Email Marketing"
            paragraph="CRM systems don't have to be complex to boost your sales. MailSale is the proof. With little learning curve you can organize your lead base and focus on the right deals."
            btnText="Learn More"
          />
          <img src={graphicImage04} alt="description" />
        </ImgNdestwosec>
        <ImgNdestwosec>
          <DashboardpageContentSection
            title="Email Finder"
            paragraph="Integrate in minutes with our email API and trust your emails reach the inbox."
            btnText="Learn More"
          />
          <img src={graphicImage05} alt="description" />
        </ImgNdestwosec>
      </div>
      <div className="pt-16 pb-52 flex-coloum-center">
        <div>
          <h1 className="main-heading-dark-blue text-[3rem]">
            Ready to start sending?
          </h1>
        </div>
        <div className="m-10">
          <button className="btn btn-primary-blue-transparent px-36 border-4 text-[1.7rem]">
            Sign Up
          </button>
          <button className="btn btn-primary-transparent-blue px-36 border-4 mx-14 text-[1.7rem]">
            Talks to Sales
          </button>
          <button className="btn btn-primary-transparent-blue px-36 border-4 text-[1.7rem]">
            Pricing
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
