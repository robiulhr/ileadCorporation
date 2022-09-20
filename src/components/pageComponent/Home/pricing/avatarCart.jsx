import React from "react";
import avatar from "../../../../assets/img/avatar.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
const AvatarCart = () => {
  return (
    <div className="flex-coloum-center w-fit py-2 px-4 shadow-md mx-2 my-1">
      <img className="" src={avatar} alt="" />
      <h1 className="text-center text-[1rem] m-2">Griamani Klw</h1>
      <p className="text-center text-[.7rem] mb-1">Accountant</p>
      <p className="text-center text-[.7rem] ml-[-1rem]">
        <AddLocationIcon /> Chicago
      </p>
    </div>
  );
};

export default AvatarCart;
