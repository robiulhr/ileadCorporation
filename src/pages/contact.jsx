import React from "react";
import contactpageimg01 from "../assets/img/contact-page/contact-page-img-01.png";
import ContactForm from "../components/pageComponent/contactForm";
import ContactCredentials from "../components/pageComponent/contactCredentials";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Googlemap from "../components/pageComponent/googlemap";
import HeadingParagraphBtn from "../components/globalComponent/InputtextAndBtn/headingParagraphBtn";

const Contact = () => {
  return (
    <div>
      <div className="container"></div>
      <HeadingParagraphBtn
        heading="Contact Us"
        paragraph="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
      />
      <div>
        <img className="p-5 !pt-0" alt="contact" src={contactpageimg01} />
      </div>
      <ContactForm />
      <div className="flex-row-center mb-10">
        <ContactCredentials
          icon={<EmailIcon className="font-bold text-white !text-[70px]" />}
          bgColor={"bg-primary-blue"}
          title={<h1 className="text-[1.4rem] mb-2 font-normal">Email</h1>}
          content={
            <h5 className="text-[1.1rem] text-semibold text-primary-blue">
              info@demo.com
            </h5>
          }
        />
        <ContactCredentials
          icon={<CallIcon className="font-bold text-white !text-[70px]" />}
          bgColor={"bg-primary-green"}
          title={<h1 className="text-[1.4rem] mb-2 font-normal">Email</h1>}
          content={
            <h5 className="text-[1.1rem] text-semibold text-primary-green">
              +01xxxxxxxx
            </h5>
          }
        />
        <ContactCredentials
          icon={<MapsUgcIcon className="font-bold text-white !text-[70px]" />}
          bgColor={"bg-primary-red"}
          title={<h1 className="text-[1.4rem] mb-2 font-normal">Email</h1>}
          content={
            <h5 className="text-[1.1rem] text-semibold text-primary-red">
              +01xxxxxxxx
            </h5>
          }
        />
      </div>
      <Googlemap />
    </div>
  );
};

export default Contact;
