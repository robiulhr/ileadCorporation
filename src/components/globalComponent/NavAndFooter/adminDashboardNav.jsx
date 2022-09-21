import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AdminContext } from "../../../context/appContext";
import lightLogo from "../../../assets/img/logo/light-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AccountProfileMenu from "../muiComponent/accountProfilemenu";
import NotificationMenu from "../muiComponent/notificationMenu";

const AdminDashboardNav = () => {
  const { adminSidebarShow, setAdminSidebarShow } = useContext(AdminContext);

  const handleSidebarShow = () => {
    setAdminSidebarShow(!adminSidebarShow);
  };
  return (
    <div className="px-6 py-3 bg-normal-dark-blue-100 flex-row-center-between">
      <div className="">
        <MenuIcon
          sx={{ color: "white", cursor: "pointer", display: "inline-block" }}
          onClick={handleSidebarShow}
        />
        <Link to={"/admin/dashboard"}>
          <img src={lightLogo} alt="" className="w-[150px] inline-block mx-10" />
        </Link>
      </div>
      <div className="flex-row-center">
        <IconButton size="large" aria-label="search" color="inherit">
          <SearchIcon sx={{color:"white",fontSize:"2rem"}}/>
        </IconButton>
        <NotificationMenu/>
        <AccountProfileMenu/>
      </div>
    </div>
  );
};

export default AdminDashboardNav;
