import React from "react";
import AvatarCart from "./avatarCart";

const PricingStandardDescription02 = (props) => {
  const { ind } = props;
  return (
    <div className={`pricingStandartDescription-${ind}`}>
      <div className="triangle"></div>
      <div className="border-8 mx-5 rounded-3xl border-info flex-row-center">
        <div className="w-3/12 bg-info py-12 px-5 flex-coloum-center">
          <h2 className="main-paragraph-primary-blue mt-10 mb-5 text-[1.9rem] text-justify leading-5">
            Plan 2
          </h2>
          <ul className="ml-[-50px] my-10">
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
            <li className="main-paragraph-primary-blue text-start  m-1 text-[1.1rem] leading-5">
              Subline write here
            </li>
          </ul>
          <button className="btn btn-primary-blue-transparent py-2 px-20 text-[1.3rem] rounded-lg my-5">
            Buy Now
          </button>
          <button className="btn btn-primary-transparent-blue py-2 text-[1.3rem] rounded-lg px-[4.4rem]">
            Learn Now
          </button>
        </div>
        <div className="w-9/12 p-2 flex-row-center flex-wrap bg-white">
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <AvatarCart />
          <div className="shadow-md bg-normal-light-blue-100 h-[160px] w-[140px] m-2 flex-row-center">
            <p className="text-white">See All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStandardDescription02;
