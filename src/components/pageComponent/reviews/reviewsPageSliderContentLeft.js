import React from 'react';

const ReviewsPageSliderContentLeft = (props) => {
    const {title,content,btnText} = props
    return (
        <>
             <div className="w-full h-[600px] bg-normal-light-blue-100 p-10">
                        
                            <h3 className="main-heading-white text-[2.5rem] text-left">{title}</h3>
                        
                            {
                                content.map((ele,ind)=>{
                                    return  <p key={ind} className="main-paragraph-gray text-white text-left text-[1.3rem] font-semibold leading-6 mb-10">
                                                {ele}
                                            </p>                
                                })
                            }
                        
                        
                        <div className='flex-row-center justify-start'>
                            <button className='btn border-none btn-primary-blue-transparent py-2 rounded-3xl px-10'>
                                    {btnText}
                            </button>
                        </div>
                </div>
        </>
    );
}

export default ReviewsPageSliderContentLeft;
