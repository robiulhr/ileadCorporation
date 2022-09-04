import React from 'react';

const PricingStandard = (props) => {
    const {bg,heading,pricing,paragraph} = props;
    return (
        <div className={`flex-coloum-center ${bg} rounded-3xl`}>
            <div className='h-[200px] w-[200px] rounded-full m-5 bg-red-200 flex-row-center'>
                <h1 className='main-heading-black text-[2rem]'>{heading}</h1>
            </div>
            <div className='p-6 rounded-3xl bg-red-200 m-5'>
                <p className='text-center my-4 text-[1.3rem] font-[600]'>{pricing}</p>
                <p className='text-center text-primary-gray-100 font-[500] leading-5'>{paragraph}</p>
            </div>
            
        </div>
    );
}

export default PricingStandard;
