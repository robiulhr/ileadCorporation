import React from "react";
import FindNowBtn from "../components/globalComponent/InputtextAndBtn/findNowBtn";
import CustomerReport from "../components/pageComponent/customerReport";
import avatar from "../assets/img/customerCare-page/avatar.png";

const CustomerCare = (props) => {
  const { funcNav ,funcUsrDashboardNav,funcmainFooter} = props;
  funcNav(true);
  funcUsrDashboardNav(false)
  funcmainFooter(true)
  return (
    <div>
      <div className="container">
        <h2 className="main-heading-dark-blue text-[2.6rem] mt-20 mb-10 mx-5 text-center">
          Guides, answers, and advice from MailSale Customer Care Team
        </h2>
        <p className="main-paragraph-gray text-center mb-3 px-32">
          Subline write here Subline write here write Sub line write here
          Subline write here woo Subline write here Subline write heress
        </p>
        <FindNowBtn label={"Search"} wrapperClass="w-[700px]" />
        <div className="mt-20 mb-40">
          <CustomerReport
            avatar={avatar}
            title="Heading 1"
            text="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
            btnText="Read More"
          />
          <CustomerReport
            avatar={avatar}
            title="Heading 2"
            text="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
            btnText="Read More"
          />
          <CustomerReport
            avatar={avatar}
            title="Heading 3"
            text="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
            btnText="Read More"
          />
          <CustomerReport
            avatar={avatar}
            title="Heading 4"
            text="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
            btnText="Read More"
          />
        </div>
        <div className="mt-40 mb-56  flex-coloum-center">
          <h2 className="main-heading-dark-blue text-center text-[2.8rem] m-5">
            Still have questions?
          </h2>
          <button className="btn btn-primary-transparent-blue px-48 my-5">
            Contact With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
