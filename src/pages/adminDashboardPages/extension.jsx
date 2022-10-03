import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import PrimaryBlueSelect from "../../components/globalComponent/muiComponent/primaryBlueSelect";
import { Switch } from "@mui/material";
const Extension = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Extensions"} />
          </div>
          <div className="ml-4 my-10 rounded-lg" id="profile-page">
            <div className="mt-10">
              <div className="">
                <div className="">
                  <div className="bg-normal-dark-blue-400 rounded-xl mt-10">
                    <div className="flex-row-center-between bg-primary-blue-100 rounded-t-xl">
                      <h6 className="text-white text-[1.1rem] mx-10">
                        Extension Details
                      </h6>
                      <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                        Update
                      </button>
                    </div>
                    <form action="" className="py-4 px-10 profle-form pl-14">
                      <div className="w-1/4 input-div">
                        <div className="label">Country</div>
                        <div className="h-[50px]">
                          <PrimaryBlueSelect />
                        </div>
                      </div>
                      <div className="input-div relative">
                        <div className="label">App Link</div>
                        <Switch sx={{position:"absolute",right:"20px",top:"44px",zIndex:"1"}} defaultChecked />
                        <Inputfeild placeholder={"Enter"} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AdminDashboardMainContentWrapper>
      </AdminDashboardSidebarNav>
    </AdminPagesWrapper>
  );
};

export default Extension;
