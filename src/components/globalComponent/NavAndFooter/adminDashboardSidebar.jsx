import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonCheck from "../../../assets/img/icon/personCheck.png";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SaleAnalytics from "../../../assets/img/icon/saleAnalytics.png";
import Useranalytics from "../../../assets/img/icon/useranalytics.png";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import seoIcon from "../../../assets/img/icon/seoIcon.png";
import { AdminContext } from "../../../context/appContext";
import { Link } from "react-router-dom";
const AdminDashboardSidebar = () => {
  const { adminSidebarShow } = useContext(AdminContext);

  return (
    <div
      className={` bg-normal-dark-blue-300 h-max transition-all ${
        adminSidebarShow
          ? "w-0 translate-x-[-250px]"
          : "w-[250px]"
      } mb-28`}
    >
      <ul className="admin-sidebar-menu">
        <li className="!mb-4 !mt-7">
          <Link
            to="/admin/dashboard"
            className="flex-row-center justify-start ml-5 w-full"
          >
            <HomeIcon sx={{ margin: "0px 10px" }} /> Dashboard
          </Link>
        </li>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            User Management
          </p>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <GroupIcon sx={{ margin: "0px 10px" }} /> All Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <img src={PersonCheck} alt="" className="mx-[10px]" /> Active
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <PersonRemoveIcon sx={{ margin: "0px 10px" }} /> Deactivate User
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <PersonOffOutlinedIcon sx={{ margin: "0px 10px" }} /> Banned Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <MarkEmailReadOutlinedIcon sx={{ margin: "0px 10px" }} /> Email to
              Users
            </Link>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Lead Management
          </p>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <GroupIcon sx={{ margin: "0px 10px" }} /> All Leads
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <img src={PersonCheck} alt="" className="mx-[10px]" /> Active
              Leads
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <PersonRemoveIcon sx={{ margin: "0px 10px" }} /> Deactivate Leads
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <PersonOffOutlinedIcon sx={{ margin: "0px 10px" }} /> Removed
              Leads
            </Link>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Analytics
          </p>
          <li>
            <Link
              to="/admin/salesanalytics"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <img src={SaleAnalytics} alt="" className="mx-[10px]" /> Sales
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/admin/useranalytics"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <img src={Useranalytics} alt="" className="mx-[10px]" /> User
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/admin/leadanalytics"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <BarChartOutlinedIcon sx={{ margin: "0px 10px" }} /> Lead
              Analytics
            </Link>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Settings
          </p>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <SettingsRoundedIcon sx={{margin:"0px 10px"}}/> General
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <DisplaySettingsRoundedIcon sx={{margin:"0px 10px"}} /> Site
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <img src={seoIcon} alt="" className="mx-[10px]" /> SEO
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <AppShortcutRoundedIcon sx={{ margin: "0px 10px" }} /> App Section
            </Link>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Extra
          </p>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <ExtensionRoundedIcon sx={{margin:"0px 10px"}}/> Extensions
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dashboard"
              className="flex-row-center justify-start ml-5 w-full"
            >
              <CleaningServicesRoundedIcon sx={{margin:"0px 10px"}} /> Clear Cache
            </Link>
          </li>
          
        </div>
      </ul>
    </div>
  );
};

export default AdminDashboardSidebar;
