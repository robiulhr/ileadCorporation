import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import ImageUploadInput from "../../components/globalComponent/InputtextAndBtn/imageUploadInput";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import PrimaryBlueSelect from "../../components/globalComponent/muiComponent/primaryBlueSelect";
import InfoCountCart from "../../components/pageComponent/adminPages/infoCountCart";

const LeadsDetails = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Import Lead"} />
          </div>
          <div className="ml-4 my-10 rounded-lg" id="profile-page">
            <div className="flex-row-center">
              <div className="w-4/12">
                <button className=" btn btn-primary-blue-transparent text-[.7rem] mt-10 px-4 py-1 rounded-lg">
                  Users Report
                </button>
              </div>
              <div className="w-8/12">
                <button className=" btn btn-primary-blue-transparent text-[.7rem] mx-10 mt-10 px-4 py-1 rounded-lg">
                  Users Report
                </button>
              </div>
            </div>
            <div className="flex-row-start-between mt-10">
              <div className="w-4/12">
                <ImageUploadInput label={"Profile Image (400px/400px)"} />
                <div className="my-7">
                  <div className="bg-primary-blue-100 rounded-t-xl">
                    <p className="text-white px-5 py-3 ">User Information</p>
                  </div>
                  <div className="flex-row-center-between px-5 py-2 my-1 bg-normal-dark-blue-400">
                    <span className="text-white text-[.9rem]">Full Name</span>
                    <span className="text-white text-[.9rem]">
                      Jhon Lekuimer
                    </span>
                  </div>
                  <div className="flex-row-center-between px-5 py-2 my-1 bg-normal-dark-blue-400">
                    <span className="text-white text-[.9rem]">Joined </span>
                    <span className="text-white text-[.9rem]">
                      At 13 May, 2022 11:25 AM
                    </span>
                  </div>
                  <div className="flex-row-center-between px-5 py-2 my-1 bg-normal-dark-blue-400">
                    <span className="text-white text-[.9rem]">Username</span>
                    <span className="text-white text-[.9rem]">
                      jhonlekuimer
                    </span>
                  </div>
                  <div className="flex-row-center-between px-5 py-2 my-1 rounded-b-md bg-normal-dark-blue-400">
                    <span className="text-white text-[.9rem]">Status</span>
                    <span className="text-green-500 text-[.9rem]">Active</span>
                  </div>
                </div>
                <div>
                <div className="bg-[red] rounded-xl mt-2">
                    <p className="text-white px-5 py-3 text-center">
                      Remove
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-8/12">
                <div className="px-10">
                  <div className="flex-row-center justify-start">
                    <div className="w-2/5 mr-10">
                      <InfoCountCart text={"Total Users"} count={"512,568"} />
                    </div>
                    <div className="w-2/5">
                      <InfoCountCart text={"Today Join"} count={"5,688"} />
                    </div>
                  </div>
                  <div className="bg-normal-dark-blue-400 rounded-xl mt-10">
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

export default LeadsDetails;
