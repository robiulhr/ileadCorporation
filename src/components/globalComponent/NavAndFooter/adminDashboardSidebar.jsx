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
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AppShortcutRoundedIcon from "@mui/icons-material/AppShortcutRounded";
import DisplaySettingsRoundedIcon from "@mui/icons-material/DisplaySettingsRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import CleaningServicesRoundedIcon from "@mui/icons-material/CleaningServicesRounded";
import seoIcon from "../../../assets/img/icon/seoIcon.png";
import { AdminContext } from "../../../context/appContext";
import { NavLink } from "react-router-dom";
const AdminDashboardSidebar = () => {
  const { adminSidebarShow } = useContext(AdminContext);

  return (
    <div
      className={` bg-normal-dark-blue-300 h-max transition-all ${
        adminSidebarShow ? "w-0 translate-x-[-250px]" : "w-[250px]"
      } mb-28`}
    >
      <ul className="admin-sidebar-menu">
        <li className="!mb-4 !mt-7">
          <NavLink
            to="/admin/dashboard"
            style={({ isActive }) => {
              return {
                color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
              };
            }}
            className={({ isActive }) => {
              return `flex-row-center justify-start ml-5 w-full ${
                isActive ? "active" : ""
              }`;
            }}
          >
            <HomeIcon sx={{ margin: "0px 10px" }} /> Dashboard
          </NavLink>
        </li>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            User Management
          </p>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <GroupIcon sx={{ margin: "0px 10px" }} /> All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <img src={PersonCheck} alt="" className="mx-[10px]" /> Active
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <PersonRemoveIcon sx={{ margin: "0px 10px" }} /> Deactivate User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <PersonOffOutlinedIcon sx={{ margin: "0px 10px" }} /> Banned Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/usermannagement"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <MarkEmailReadOutlinedIcon sx={{ margin: "0px 10px" }} /> Email to
              Users
            </NavLink>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Lead Management
          </p>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <GroupIcon sx={{ margin: "0px 10px" }} /> All Leads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <img src={PersonCheck} alt="" className="mx-[10px]" /> Active
              Leads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <PersonRemoveIcon sx={{ margin: "0px 10px" }} /> Deactivate Leads
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <PersonOffOutlinedIcon sx={{ margin: "0px 10px" }} /> Removed
              Leads
            </NavLink>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Analytics
          </p>
          <li>
            <NavLink
              to="/admin/salesanalytics"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <img src={SaleAnalytics} alt="" className="mx-[10px]" /> Sales
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/useranalytics"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <img src={Useranalytics} alt="" className="mx-[10px]" /> User
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/leadanalytics"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <BarChartOutlinedIcon sx={{ margin: "0px 10px" }} /> Lead
              Analytics
            </NavLink>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">
            Settings
          </p>
          <li>
            <NavLink
              to="/admin/settings"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <SettingsRoundedIcon sx={{ margin: "0px 10px" }} /> General
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/sitesettings"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <DisplaySettingsRoundedIcon sx={{ margin: "0px 10px" }} /> Site
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/seosettings"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <img src={seoIcon} alt="" className="mx-[10px]" /> SEO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/appsettings"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <AppShortcutRoundedIcon sx={{ margin: "0px 10px" }} /> App Section
            </NavLink>
          </li>
        </div>
        <div className="my-4">
          <p className="mx-8 text-white mb-3 text-[1.1rem] font-bold">Extra</p>
          <li>
            <NavLink
              to="/admin/extension"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <ExtensionRoundedIcon sx={{ margin: "0px 10px" }} /> Extensions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard"
              style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(59 130 246 / 0.5)" : "inherit",
                };
              }}
              className={({ isActive }) => {
                return `flex-row-center justify-start ml-5 w-full ${
                  isActive ? "active" : ""
                }`;
              }}
            >
              <CleaningServicesRoundedIcon sx={{ margin: "0px 10px" }} /> Clear
              Cache
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default AdminDashboardSidebar;
