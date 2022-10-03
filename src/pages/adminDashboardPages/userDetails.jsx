import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import ImageUploadInput from "../../components/globalComponent/InputtextAndBtn/imageUploadInput";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import PrimaryBlueSelect from "../../components/globalComponent/muiComponent/primaryBlueSelect";
import InfoCountCart from "../../components/pageComponent/adminPages/infoCountCart";
import ToggleBtn from "../../components/globalComponent/muiComponent/toggleBtn";
const UserDetails = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"User Details"} />
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
            <div className="flex-row-start-between py-10">
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
                <div className="">
                  <div className="bg-primary-blue-100 rounded-t-xl">
                    <p className="text-white px-5 py-3 ">User Action</p>
                  </div>
                  <div className="bg-primary-blue-200 rounded-md mt-1">
                    <p className="text-white px-5 py-3 text-center">
                      Login Logs
                    </p>
                  </div>
                  <div className="bg-primary-blue-300 rounded-md mt-1">
                    <p className="text-white px-5 py-3 text-center">
                      Send Email
                    </p>
                  </div>
                  <div className="bg-primary-blue-600 rounded-md mt-1">
                    <p className="text-white px-5 py-3 text-center">
                      Login as User
                    </p>
                  </div>
                  <div className="bg-primary-blue-700 rounded-b-xl mt-1">
                    <p className="text-white px-5 py-3 text-center">
                      Email Log
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-8/12">
                <div className=" px-10">
                  <div className="flex-row-center justify-start">
                    <div className="w-2/5 mr-10">
                      <InfoCountCart text={"Total Users"} count={"512,568"} />
                    </div>
                    <div className="w-2/5">
                      <InfoCountCart text={"Today Join"} count={"5,688"} />
                    </div>
                  </div>
                  <div className="bg-normal-dark-blue-400 mt-10">
                    <div className="flex-row-center-between bg-primary-blue-100">
                      <h6 className="text-white text-[1.1rem] mx-10">
                        Information of Jhon Lekuimer
                      </h6>
                      <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                        Update
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
                      <div className="flex-row-center">
                        <div className="w-1/3 input-div mr-3">
                          <div className="label">Status</div>
                          <div className="h-[50px]">
                            <ToggleBtn />
                          </div>
                        </div>
                        <div className="w-1/3 input-div ml-3">
                          <div className="label">Email Verification</div>
                          <div className="h-[50px]">
                            <ToggleBtn />
                          </div>
                        </div>
                        <div className="w-1/3 input-div ml-3">
                          <div className="label">SMS Verification</div>
                          <div className="h-[50px]">
                            <ToggleBtn />
                          </div>
                        </div>
                      </div>
                      <div className="flex-row-center justify-start">
                        <div className="w-1/3 input-div mr-3">
                          <div className="label">2FA Status</div>
                          <div className="h-[50px]">
                            <ToggleBtn isDefaultChecked />
                          </div>
                        </div>
                        <div className="w-1/3 input-div ml-3">
                          <div className="label">2FA Verification</div>
                          <div className="h-[50px]">
                            <ToggleBtn />
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

export default UserDetails;
