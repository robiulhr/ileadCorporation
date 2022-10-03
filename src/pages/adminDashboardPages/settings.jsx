import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import PrimaryBlueSelect from "../../components/globalComponent/muiComponent/primaryBlueSelect";
import InputTextArea from "../../components/globalComponent/InputtextAndBtn/inputTextarea";
import ImageUploadInput from "../../components/globalComponent/InputtextAndBtn/imageUploadInput";
const Settings = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Settings"} />
          </div>
          <div className="ml-4 my-10 rounded-lg" id="profile-page">
            <div className="mt-10">
              <div className="">
                <div className="">
                  <div className="bg-normal-dark-blue-400 rounded-xl mt-10">
                    <div className="flex-row-center-between bg-primary-blue-100 rounded-t-xl">
                      <h6 className="text-white text-[1.1rem] mx-10">
                        General Settings
                      </h6>
                      <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                        Save
                      </button>
                    </div>
                    <form action="" className="py-4 px-10 profle-form">
                      <div className="flex-row-center">
                        <div className="w-1/3 input-div mr-4">
                          <div className="label">Name</div>
                          <Inputfeild placeholder={"Admin Name"} />
                        </div>
                        <div className="w-2/3 input-div ml-4">
                          <div className="label">Email</div>
                          <Inputfeild placeholder={"admin@gmail.com"} />
                        </div>
                      </div>
                      <div className="flex-row-center">
                        <div className="w-1/3 input-div mr-3">
                          <div className="label">City</div>
                          <Inputfeild placeholder={"Orange Park"} />
                        </div>
                        <div className="w-1/3 input-div mx-3">
                          <div className="label">State</div>
                          <Inputfeild placeholder={"Florida"} />
                        </div>
                        <div className="w-1/3 input-div ml-3">
                          <div className="label">Country</div>
                          <div className="h-[50px]">
                            <PrimaryBlueSelect />
                          </div>
                        </div>
                      </div>
                      <div className="input-div">
                        <div className="label">Zip/Postal</div>
                        <InputTextArea placeholder={"Enter"} />
                      </div>
                      <div className="flex-row-center justify-start mb-10">
                        <div className="w-1/3 mr-10">
                          <div className="label">Logo</div>
                          <ImageUploadInput label={"Upload Image"} />
                        </div>
                        <div className="w-1/3">
                          <div className="label">Favicon</div>
                          <ImageUploadInput label={"Upload Image"} />
                        </div>
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

export default Settings;
