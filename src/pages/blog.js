import React from 'react';
import ImgNdestwosec from '../components/globalComponent/twoDivInRow/imgNdestwosec';
import graphicImage01 from '../assets/img/blog-page/graphicImage01.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ShortNav from '../components/globalComponent/NavAndFooter/shortNav';
import SmallComSlider from '../components/globalComponent/smallComSlider';
import HeadingAndSignupBtn from '../components/globalComponent/InputtextAndBtn/headingAndSignupBtn'
import ImageAndTextCard from '../components/globalComponent/imageAndTextCard';
import BlogContent from '../content/blog';
import sliderBlogContent from '../content/sliderBlogContent';
import Pagination from '../components/globalComponent/pagination';
import DashboardpageContentSection from '../components/globalComponent/twoDivInRow/twoDivInnercontentSection';


const Blog = () => {
    
    return (
        <div>
            <div className='container'>
            <Carousel autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>
                <div>
                  
                     <ImgNdestwosec >
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
                <ImgNdestwosec >
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
                <ImgNdestwosec >
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
            <ShortNav 
            searchFeild
            items={[
                {Title:'Newest',
                 dropDown:false,
                },
                {Title:'POPULAR',
                 dropDown:false,

                },
                {Title:'CATEGORIES',
                 dropDown:true,
                 dropDownItem:['item1','item2']
                }
            ]} 
            />
            
            </div>
            <SmallComSlider 
             items={sliderBlogContent} />
             <HeadingAndSignupBtn/>
             <div className='container'>
             <div className='my-40 blogs-container'>
                    <ImageAndTextCard 
                    items={BlogContent}  />
             </div>
             </div>
             <Pagination/>
        </div>

        
    );
}

export default Blog;
