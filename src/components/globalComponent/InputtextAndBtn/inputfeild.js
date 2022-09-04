import React from 'react';

const Inputfeild = (props) => {
    const {classes,label,children} = props
    return (
        <div className={`relative ${classes}`}>
            <input type="text" id="fname"  className='peer bg-transparent input-feild !w-full' />
            {children} 
            <label htmlFor="fname" className='input-feild-label peer-focus:bg-transparent peer-focus:top-[-2rem]'>{label}</label>
        </div>
    );
}

export default Inputfeild;
