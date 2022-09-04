import React from 'react';

const HeadingParagraphBtn = (props) => {
    const {heading,headingClss,paragraph,btnText}= props
    return (
             <div className='my-28 px-36'>
                 <h1 className={`${headingClss ? headingClss:""} main-heading-dark-blue text-center`}>{heading}</h1>
                 <p className='main-paragraph-gray text-center pt-5'>{paragraph}</p>
                 {
                    btnText?<div className='flex-row-center py-10'>
                         <button className='btn btn-primary-blue-transparent'>{btnText}</button>
                 </div>
                 :''
                 }
                 
             </div>
    );
}

export default HeadingParagraphBtn;
