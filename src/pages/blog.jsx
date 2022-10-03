import React from "react";
import ImgNdestwosec from "../components/globalComponent/twoDivInRow/imgNdestwosec";
import graphicImage01 from "../assets/img/blog-page/graphicImage01.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ShortNav from "../components/globalComponent/NavAndFooter/shortNav";
import SmallComSlider from "../components/globalComponent/smallComSlider";
import HeadingAndSignupBtn from "../components/globalComponent/InputtextAndBtn/headingAndSignupBtn";
import ImageAndTextCard from "../components/globalComponent/imageAndTextCard";
import BlogContent from "../content/blog";
import sliderBlogContent from "../content/sliderBlogContent";
import Pagination from "../components/globalComponent/pagination";
import DashboardpageContentSection from "../components/globalComponent/twoDivInRow/twoDivInnercontentSection";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Inputfeild from "../components/globalComponent/InputtextAndBtn/inputfeild";


const Blog = () => {

  return (
    <div>
      <div className="container">
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <ImgNdestwosec>
              <DashboardpageContentSection
                title="Here is TagLine 1 tagline 2 tagtagLine 3"
                time="Time :"
                publisher="Publisher :"
                date="date :"
                paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo"
                btnText="Learn More"
              />
              <img src={graphicImage01} alt="description" />
            </ImgNdestwosec>
          </div>
          <div>
            <ImgNdestwosec>
              <DashboardpageContentSection
                title="Here is TagLine 1 tagline 2 tagtagLine 3"
                time="Time :"
                publisher="Publisher :"
                date="date :"
                paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo"
                btnText="Learn More"
              />
              <img src={graphicImage01} alt="description" />
            </ImgNdestwosec>
          </div>
          <div>
            <ImgNdestwosec>
              <DashboardpageContentSection
                title="Here is TagLine 1 tagline 2 tagtagLine 3"
                time="Time :"
                publisher="Publisher :"
                date="date :"
                paragraph="Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo"
                btnText="Learn More"
              />
              <img src={graphicImage01} alt="description" />
            </ImgNdestwosec>
          </div>
        </Carousel>
        <ShortNav>
          <li className="hover:text-primary-blue">Newest</li>
          <li className="hover:text-primary-blue">POPULAR</li>
          <li className="relative group ">
          <span className="cursor-default flex-row-center">
              CATEGORIES
                <ArrowDropDownIcon />
              </span>
            <ul className="main-nav-dropdown-menu flex-row-center">
              <li>item1</li>
              <li>item2</li>
            </ul>
          </li>
          <Inputfeild
              label="search"
          />
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

export default Blog;
