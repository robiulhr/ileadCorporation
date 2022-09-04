import React from 'react';

const ContentSection = (props) => {
    const {title,time,date,publisher,paragraph,btnText,children} = props;
    return (
        <div>
            <div className=''>
                <h1 className="main-heading-dark-blue pb-12">{title}</h1>
                {time? <span className='pr-2 text-[1.3rem] text-start capitalize'>{time}</span> :""}
                    {date ? <span className='text-[1.3rem] capitalize'>{date}</span> :""}
                    {publisher? <div className='py-3'><span className='text-[1.3rem] capitalize'>{publisher}</span></div> : ""} 
                    <p className="main-paragraph-gray pb-16 text-justify">{paragraph}</p>
                    <div className="">
                   { btnText?
                    <button className="btn btn-primary-blue-transparent">{children} {btnText}</button>
                    :""
                   }
                </div>
            </div>
        </div>
    );
}

export default ContentSection;
