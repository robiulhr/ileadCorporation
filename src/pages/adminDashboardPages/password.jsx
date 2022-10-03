import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
const Password = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Password"} />
          </div>
          <div className="ml-4 my-10 rounded-lg" id="profile-page">
            <div className="flex-row-center-between bg-primary-blue-100">
              <h6 className="text-white text-[1.3rem] mx-10">
                Profile Settings
              </h6>
              <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                Update
              </button>
            </div>
            <div className="px-10 py-5 bg-normal-dark-blue-400">
              <div className="px-10 profle-form">
                <form action="" className="">
                  <div className="input-div">
                    <div className="label">Old Password</div>
                    <Inputfeild placeholder={"New Password"}  />
                  </div>
                  <div className="input-div">
                    <div className="label">New Password</div>
                    <Inputfeild placeholder={"New Password"} />
                  </div>
                  <div className="input-div">
                    <div className="label">Confirm Password</div>
                    <Inputfeild placeholder={"Confirm Password"} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AdminDashboardMainContentWrapper>
      </AdminDashboardSidebarNav>
    </AdminPagesWrapper>
  );
};

export default Password;
