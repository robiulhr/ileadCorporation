import React from 'react';

const InfoCountCart = ({text,count}) => {
    return (
        <div className=' w-full h-full p-5 bg-normal-dark-blue-400 rounded-lg'>
            <div className='flex-row-center-between mb-4'>
                <p className=' text-light-white-500'>{text}</p>
                <button className='btn btn-primary-blue-transparent text-[.6rem] px-3 py-1 rounded-lg'>View</button>
            </div>
            <div className='mt-8'>
                <h3 className='text-white text-[3rem] font-bold text-end'>
                    {count}
                </h3>
            </div>
        </div>
    );
}

export default InfoCountCart;
