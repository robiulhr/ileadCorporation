import React from "react";

const ImageAndTextCard = (props) => {
  const { items } = props;
  return (
    <>
      {items.map((ele, ind) => {
        return (
          <div>
            <div className="">
              <div>
                <img src={ele.image} alt="item" />
              </div>
              <div className="py-5">
                <h3 className="main-heading-dark-blue text-[2rem]">
                  {ele.heading}
                </h3>
                <p className="main-paragraph-gray text-[1.6rem] leading-7">
                  {ele.paragraph}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImageAndTextCard;
