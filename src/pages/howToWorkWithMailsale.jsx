import React from "react";
import SingleDivComp from "../components/globalComponent/singleDivComp";
import { Carousel } from "react-responsive-carousel";
import ImageAndTextCard from "../components/globalComponent/imageAndTextCard";
import BlogContent from "../content/blog";
import Pagination from "../components/globalComponent/pagination";
import HeadingParagraphBtn from "../components/globalComponent/InputtextAndBtn/headingParagraphBtn";

const HowToWorkWithMailsale = () => {
  return (
    <div className="howtoworkwithmailsale">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        <SingleDivComp
          title="Here is TagLine 1"
          paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo."
          btnText="Read More"
        />
        <SingleDivComp
          title="Here is TagLine 1"
          paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo."
          btnText="Read More"
        />
        <SingleDivComp
          title="Here is TagLine 1"
          paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo."
          btnText="Read More"
        />
      </Carousel>
      <HeadingParagraphBtn
        heading="How to work with MailSale"
        headingClss="!text-[3.4rem]"
        paragraph="Subline write here Subline write here write Sub line write here Subline write here woo Subline write here Subline write heress"
      />
      <div className="container">
        <div className="my-40 blogs-container">
          <ImageAndTextCard items={BlogContent} />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default HowToWorkWithMailsale;
