import React from "react";
import HeadingAndSignupBtn from "../components/globalComponent/InputtextAndBtn/headingAndSignupBtn";
import ImageAndTextCard from "../components/globalComponent/imageAndTextCard";
import ShortNav from "../components/globalComponent/NavAndFooter/shortNav";
import SmallComSlider from "../components/globalComponent/smallComSlider";
import sliderBlogContent from "../content/sliderBlogContent";
import BlogContent from "../content/blog";
import Pagination from "../components/globalComponent/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FiftyFiftyDivContent from "../components/globalComponent/twoDivInRow/fiftyFiftyDivContent";
import succsessStoriesSliderContent from "../content/succsessStoriesSliderContent";
import ReviewsPageSliderContentLeft from "../components/pageComponent/reviews/reviewsPageSliderContentLeft";
import ReviewsPageSliderContentRight from "../components/pageComponent/reviews/reviewsPageSliderContentRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Inputfeild from "../components/globalComponent/InputtextAndBtn/inputfeild";
import SearchIcon from "@mui/icons-material/Search";
const SuccsesStories = (props) => {
  const { funcNav,funcUsrDashboardNav } = props;
  funcNav(true);
  funcUsrDashboardNav(false)
  return (
    <div className="SuccsesStories">
      <div className="container pt-20">
        <h1 className="main-heading-dark-blue text-[3.5rem] my-6">
          Here is TagLine 1
        </h1>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <FiftyFiftyDivContent>
              <ReviewsPageSliderContentRight />
              <ReviewsPageSliderContentLeft
                title={succsessStoriesSliderContent.heading}
                content={succsessStoriesSliderContent.paragraph}
                btnText="Read More"
              />
            </FiftyFiftyDivContent>
          </div>
          <div>
            <FiftyFiftyDivContent>
              <ReviewsPageSliderContentRight />
              <ReviewsPageSliderContentLeft
                title={succsessStoriesSliderContent.heading}
                content={succsessStoriesSliderContent.paragraph}
                btnText="Read More"
              />
            </FiftyFiftyDivContent>
          </div>
          <div>
            <FiftyFiftyDivContent>
              <ReviewsPageSliderContentRight />
              <ReviewsPageSliderContentLeft
                title={succsessStoriesSliderContent.heading}
                content={succsessStoriesSliderContent.paragraph}
                btnText="Read More"
              />
            </FiftyFiftyDivContent>
          </div>
        </Carousel>
        <ShortNav searchFeild>
          {[
            { Title: "Newest", dropDown: false },
            { Title: "POPULAR", dropDown: false },
            {
              Title: "CATEGORIES",
              dropDown: true,
              dropDownItem: ["item1", "item2"],
            },
          ].map((ele, ind) => {
            return (
              <li
                className={`text-[1rem] mx-20 flex-auto ${
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
          {
            <div className="ml-40 mt-[-1rem] flex-auto">
              <Inputfeild classes="w-full" label="Search">
                <SearchIcon />
              </Inputfeild>
            </div>
          }
        </ShortNav>
      </div>
      <SmallComSlider items={sliderBlogContent} />
      <HeadingAndSignupBtn />
      <div className="container">
        <div className="my-40 blogs-container">
          <ImageAndTextCard items={BlogContent} />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default SuccsesStories;
