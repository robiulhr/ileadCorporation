import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import ImageUploadInput from "../../components/globalComponent/InputtextAndBtn/imageUploadInput";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import PrimaryBlueSelect from "../../components/globalComponent/muiComponent/primaryBlueSelect";

const ImportLead = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Import Lead"} />
          </div>
          <div className="ml-4 my-10 rounded-lg" id="profile-page">
            <div className="flex-row-start-between">
              <div className="w-4/12">
                <ImageUploadInput label={"Profile Image (400px/400px)"} />
              </div>
              <div className="w-8/12">
                <div className="px-10">
                  <div className="bg-normal-dark-blue-400 rounded-xl">
                    <div className="flex-row-center-between bg-primary-blue-100 rounded-t-xl">
                      <h6 className="text-white text-[1.1rem] mx-10">
                        Information of Jhon Lekuimer
                      </h6>
                      <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                        Save
                      </button>
                    </div>
                    <form action="" className="py-4 px-10 profle-form">
                      <div className="input-div">
                        <div className="label">Name</div>
                        <Inputfeild placeholder={"Admin Name"} />
                      </div>
                      <div className="input-div">
                        <div className="label">Email</div>
                        <Inputfeild placeholder={"admin@gmail.com"} />
                      </div>
                      <div className="input-div">
                        <div className="label">Phone Numer</div>
                        <Inputfeild placeholder={"+1 659 893 568"} />
                      </div>
                      <div className="input-div">
                        <div className="label">Address</div>
                        <Inputfeild placeholder={"United State"} />
                      </div>
                      <div className="flex-row-center">
                        <div className="w-1/2 input-div mr-3">
                          <div className="label">City</div>
                          <Inputfeild placeholder={"Orange Park"} />
                        </div>
                        <div className="w-1/2 input-div ml-3">
                          <div className="label">State</div>
                          <Inputfeild placeholder={"Florida"} />
                        </div>
                      </div>
                      <div className="flex-row-center">
                        <div className="w-1/2 input-div mr-3">
                          <div className="label">Zip/Postal</div>
                          <Inputfeild placeholder={"10011"} />
                        </div>
                        <div className="w-1/2 input-div ml-3">
                          <div className="label">Country</div>
                          <div className="h-[50px]">
                            <PrimaryBlueSelect />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="bg-normal-dark-blue-400 my-10 rounded-xl">
                    <div className="flex-row-center-between bg-primary-blue-100 rounded-t-xl">
                      <h6 className="text-white text-[1.1rem] mx-10">
                        Information of Jhon Lekuimer
                      </h6>
                      <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                        Save
                      </button>
                    </div>
                    <form action="" className="py-4 px-10 profle-form">
                      <div className="flex-row-center">
                        <div className="w-1/2 input-div mr-3">
                          <div className="label">Country</div>
                          <div className="h-[50px]">
                            <PrimaryBlueSelect />
                          </div>
                        </div>
                        <div className="w-1/2 input-div ml-3">
                          <div className="label">Zip/Postal</div>
                          <Inputfeild placeholder={"10011"} />
                        </div>
                      </div>
                      <div className="flex-row-center">
                        <div className="w-1/2 input-div mr-3">
                          <div className="label">City</div>
                          <Inputfeild placeholder={"Orange Park"} />
                        </div>
                        <div className="w-1/2 input-div ml-3">
                          <div className="label">State</div>
                          <Inputfeild placeholder={"Florida"} />
                        </div>
                      </div>
                      <div className="flex-row-center">
                        <div className="w-1/2 input-div mr-3">
                          <div className="label">Zip/Postal</div>
                          <Inputfeild placeholder={"10011"} />
                        </div>
                        <div className="w-1/2 input-div ml-3">
                          <div className="label">Country</div>
                          <div className="h-[50px]">
                            <PrimaryBlueSelect />
                          </div>
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

export default ImportLead;
