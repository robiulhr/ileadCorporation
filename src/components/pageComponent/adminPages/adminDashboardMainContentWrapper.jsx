import React, { useContext } from "react";
import { AdminContext } from "../../../context/appContext";

const AdminDashboardMainContentWrapper = ({children}) => {
  const { adminSidebarShow } = useContext(AdminContext);

    return (
        <div
          className={`${
            !adminSidebarShow ? "w-[calc(100%-250px)]" : "w-[100%]"
          } px-10`}
        >
          {children}
          
        </div>
    );
}

export default AdminDashboardMainContentWrapper;
