import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";

const Profile = ({ funcNav, funcUsrDashboardNav, funcmainFooter } ) => {
    funcNav(false);
    funcUsrDashboardNav(false);
    funcmainFooter(false);
    return (
        <AdminPagesWrapper>
        <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
            <div>
                <AdminTitle title={"Profile"} />
            </div>
            <div>
                
            </div>
        </AdminDashboardMainContentWrapper>
         
          
      </AdminDashboardSidebarNav>
    </AdminPagesWrapper>
    );
}

export default Profile;
