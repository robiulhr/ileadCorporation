import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SmallComSlider = (props) => {
    const {items} = props;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        adaptiveHeight:true,
        arrows:  false,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
    };
    return (
        <>
            <Slider {...settings} className='mt-40 mb-20 h-[600px]'>
               {
                    items.map((ele,ind)=>{
                       return <div key={ind} className='h-full' style={{ width: 630 }}>
                                <div>
                                    <img src={ele.image} alt='item' />
                                </div>
                                <div className='py-5'>
                                    <h3 className='main-heading-dark-blue text-[2rem]'>{ele.heading}</h3>
                                    <p className='main-paragraph-gray text-[1.6rem] leading-7'>{ele.paragraph}</p>
                                </div>
                        </div>
                    })
               }
                
                
                </Slider>
        </>
    );
}

export default SmallComSlider;
