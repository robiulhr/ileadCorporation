import React, { useRef, useEffect, useState } from "react";

const PrimaryTab = (props) => {
  const { List, children } = props;
  const listItemRefs = useRef([]);
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    listItemRefs.current.forEach((ele, ind) => {
      ele.addEventListener("click", (event) => {
        event.srcElement.classList.add("!text-primary-blue");
        setCurrentItem(ind);
        listItemRefs.current.forEach((e, i) => {
          if (ind !== i) e.classList.remove("!text-primary-blue");
        });
      });
    });
  });

  return (
    <div className="container my-20 primaryTabContainer" id="primaryTab">
      <div className="flex-row-center items-start">
        <div className="primaryTabList w-3/12 my-40" id="primaryTabLeft">
          <ul>
            {List.map((ele, ind) => {
              return (
                <li>
                  <a
                    href={`#content-${ind}`}
                    ref={(el) => (listItemRefs.current[ind] = el)}
                    id={`list-${ind}`}
                    className={`${ind === 0 ? "!text-primary-blue" : ""}`}
                  >
                    {ele}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="w-9/12 my-20 primaryTabContent relative"
          id="primaryTabRight"
        >
          {children[currentItem]};
        </div>
      </div>
    </div>
  );
};

export default PrimaryTab;
