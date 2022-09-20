import React from "react";

const AdminPerscentCount = ({heading,paragraph}) => {
  return (
    <div className=" w-full h-full py-10 px-2 bg-normal-dark-blue-400 rounded-lg">
      <div className="mb-4">
        <h2 className="text-center text-white text-[2rem] font-bold">{heading}</h2>
      </div>
      <div className="mt-4 flex-row-center">
        <p className=" text-primary-white-700 text-[.8rem] ml-10 text-center font-bold">{paragraph[0]}</p>
      <ul className="">
            <li className="text-primary-white-700 mx-8 list-disc">{paragraph[1]}</li>
      </ul>
      </div>
    </div>
  );
};

export default AdminPerscentCount;
