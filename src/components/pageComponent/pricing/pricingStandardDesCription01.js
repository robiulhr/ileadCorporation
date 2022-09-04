import React from 'react';

const PricingStandardDesCription01 = (props) => {
    const {leftText,headingRight,paragraph} = props
    return (
        <div>
            <div>
                <p>
                    {leftText}
                </p>
                <button>Buy Now</button>
                <button>Learn Now</button>
            </div>
            <div>
                <h1>{headingRight}</h1>
                {paragraph.map(ele=><p>{ele}</p>)}
            </div>
        </div>
    );
}

export default PricingStandardDesCription01;
