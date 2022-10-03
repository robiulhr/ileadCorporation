import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import ToggleBtn from "../../components/globalComponent/muiComponent/toggleBtn";
import ColorInput from "../../components/globalComponent/InputtextAndBtn/colorInput";

const SiteSettings = () => {
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Settings"} />
          </div>
          <div className="ml-4 my-10 rounded-lg">
            <div className="mt-10">
              <div className="">
                <div className="bg-normal-dark-blue-400 rounded-xl mt-10">
                  <div className="flex-row-center-between bg-primary-blue-100 rounded-t-xl">
                    <h6 className="text-white text-[1.1rem] mx-10">
                      Site Settings
                    </h6>
                    <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                      Update
                    </button>
                  </div>
                  <div>
                    <div className="flex-row-center">
                      <div className="w-1/3">
                        <ColorInput />
                      </div>
                      <div className="w-1/3">
                        <ColorInput />
                      </div>
                      <div className="w-1/3">
                        <ColorInput />
                      </div>
                    </div>
                    <div className="py-10">
                      <div className="flex-row-center my-5">
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            User Registration
                          </p>
                          <ToggleBtn />
                        </div>
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Secure Password
                          </p>

                          <ToggleBtn />
                        </div>
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Agree Policy
                          </p>

                          <ToggleBtn />
                        </div>
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Force SSL
                          </p>

                          <ToggleBtn isDefaultChecked />
                        </div>
                      </div>
                      <div className="flex-row-center">
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Lead Export
                          </p>

                          <ToggleBtn />
                        </div>
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Email To Lead
                          </p>

                          <ToggleBtn />
                        </div>
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Dark Theme
                          </p>

                          <ToggleBtn />
                        </div>
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Devlopment Mode
                          </p>

                          <ToggleBtn isDefaultChecked />
                        </div>
                      </div>
                      <div className="flex-row-center justify-start">
                        <div className="w-1/4 flex-coloum-center">
                          <p className="py-3 text-light-white-600 text-start ml-[-2rem]">
                            Leads Import
                          </p>

                          <ToggleBtn isDefaultChecked />
                        </div>
                      </div>
                    </div>
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

export default SiteSettings;
