import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const FindNowBtn = (props) => {
    const {label,submitBtn,btnText ,wrapperClass,children} = props;
    return (
        <>
            <div className='btn-findNowbtn-wrapper py-20'>
                {children}
                <form action="/action.php" className='flex-row-center'>
                    <div className={` ${wrapperClass? wrapperClass:''}`} >
                        <input type="text" id="fname"  className={`peer w-full ${!submitBtn ? "!rounded-[.6rem]" : ''}`} />
                        <SearchIcon/>
                        <label htmlFor="fname" className='peer-focus:top-[-1rem]'>{label}</label>
                    </div>
                      {submitBtn ?  <input type="submit" value={btnText} />:''}     
                </form>
            </div>
        </>
    );
}

export default FindNowBtn;
