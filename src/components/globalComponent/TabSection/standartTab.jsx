import React, { useState, useEffect, useRef } from "react";
import PricingStandard from "../../pageComponent/Home/pricing/pricingStandard";

const StandartTab = (props) => {
  const { List, children } = props;
  const listItemRefs = useRef([]);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    listItemRefs.current.forEach((ele, ind) => {
      document.addEventListener("click", (event) => {
        if (event.path.includes(ele)) {
          ele.classList.add("!border-normal-light-blue-100");
          setCurrentItem(ind);
          listItemRefs.current.forEach((e, i) => {
            if (ind !== i) e.classList.remove("!border-normal-light-blue-100");
          });
        }
      });
    });
  });

  return (
    <div className="container my-20 standardTabContainer" id="standardTab">
      <div className="flex-coloum-center items-start">
        <div className="standardTabList w-full my-10" id="standardTabLeft">
          <ul className="flex-row-center">
            {List.map((ele, ind) => {
              return (
                <li
                  href={`#content-${ind}`}
                  ref={(el) => (listItemRefs.current[ind] = el)}
                  id={`list-${ind}`}
                  className={`border-4 mx-5 rounded-3xl w-full hover:border-normal-light-blue-100 ${
                    ind === 0 ? "!border-normal-light-blue-100" : ""
                  }`}
                >
                  <PricingStandard
                    bg={`bg-${ele.type}`}
                    // bg="bg-danger"
                    // bg="bg-success"
                    // bg="bg-info"
                    heading={ele.plan}
                    pricing={ele.price}
                    paragraph={ele.description}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="w-full mb-20 mt-0 standardTabContent relative"
          id="standardTabRight"
        >
          {children[currentItem]}
        </div>
      </div>
    </div>
  );
};

export default StandartTab;
