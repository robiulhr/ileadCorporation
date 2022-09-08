import React from "react";
import HeadingAndSignupBtn from "../components/globalComponent/InputtextAndBtn/headingAndSignupBtn";
import SmallComSlider from "../components/globalComponent/smallComSlider";
import sliderBlogContent from "../content/sliderBlogContent";
import { Carousel } from "react-responsive-carousel";
import FiftyFiftyDivContent from "../components/globalComponent/twoDivInRow/fiftyFiftyDivContent";
import succsessStoriesSliderContent from "../content/succsessStoriesSliderContent";
import PrimaryTab from "../components/globalComponent/TabSection/primaryTab";
import ClientreveiwsBycatagoryContent from "../content/ClientreveiwsBycatagoryContent";
import ClientReviews from "../components/pageComponent/clientReviews";
import ReviewsPageSliderContentLeft from "../components/pageComponent/reviews/reviewsPageSliderContentLeft";
import ReviewsPageSliderContentRight from "../components/pageComponent/reviews/reviewsPageSliderContentRight";

const Reviews = (props) => {
  const { funcNav ,funcUsrDashboardNav} = props;
  funcNav(true);
  funcUsrDashboardNav(false)
  return (
    <div>
      <div className="container reviews">
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <FiftyFiftyDivContent>
              <ReviewsPageSliderContentLeft
                title={succsessStoriesSliderContent.heading}
                content={succsessStoriesSliderContent.paragraph}
                btnText="Read More"
              />
              <ReviewsPageSliderContentRight />
            </FiftyFiftyDivContent>
          </div>
          <div>
            <FiftyFiftyDivContent>
              <ReviewsPageSliderContentLeft
                title={succsessStoriesSliderContent.heading}
                content={succsessStoriesSliderContent.paragraph}
                btnText="Read More"
              />
              <ReviewsPageSliderContentRight />
            </FiftyFiftyDivContent>
          </div>
          <div>
            <FiftyFiftyDivContent>
              <ReviewsPageSliderContentLeft
                title={succsessStoriesSliderContent.heading}
                content={succsessStoriesSliderContent.paragraph}
                btnText="Read More"
              />
              <ReviewsPageSliderContentRight />
            </FiftyFiftyDivContent>
          </div>
        </Carousel>
      </div>

      <SmallComSlider items={sliderBlogContent} />
      <div className="container">
        <h2 className="main-heading-primary-blue !text-[2.2rem]">
          Client Reviews
        </h2>
        <p className="main-paragraph-gray pr-40 !text-[1.9rem]  tracking-tight font-medium">
          Subline write here Subline write here write Sub line write here
          Subline write here woo Subline write here Subline write heress
        </p>
      </div>
      <PrimaryTab
        List={ClientreveiwsBycatagoryContent.map((ele) => ele.category)}
      >
        {ClientreveiwsBycatagoryContent.map((ele, ind) => {
          return (
            <div className="transition duration-1000">
              {ele.content.map((element, index) => {
                return (
                  <ClientReviews
                    heading={element.heading}
                    paragraph={element.paragraph}
                    btnText={"Read More"}
                  />
                );
              })}

              <div className="flex-row-center justify-end my-10">
                <button className="btn btn-primary-blue-transparent">
                  Load More Reviews
                </button>
              </div>
            </div>
          );
        })}
      </PrimaryTab>
      <HeadingAndSignupBtn />
    </div>
  );
};

export default Reviews;
