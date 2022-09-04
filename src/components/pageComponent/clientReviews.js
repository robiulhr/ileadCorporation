import React from 'react';

const ClientReviews = (props) => {
    const {heading, paragraph,btnText} =props
    return (
        <div className='my-6 border-normal-light-blue-100 border-4 py-6 px-14 rounded-[3.5rem]'>
            <h1 
                className='my-4 main-heading-primary-blue text-[1.9rem]'>
                    {heading}
                        </h1>
                            {paragraph.map((e,i)=>{
                        return  <p className='main-paragraph-primary-blue mb-5'>{e}</p>
                            })
                        }
                    <div className='flex-row-center justify-start my-10'>
                        <button className='btn btn-primary-blue-transparent py-2 px-10 rounded-[4rem]'>{btnText}</button>
                    </div>
        </div>
    );
}

export default ClientReviews;
