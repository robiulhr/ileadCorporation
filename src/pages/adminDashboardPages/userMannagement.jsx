import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import InputTextArea from "../../components/globalComponent/InputtextAndBtn/inputTextarea";
import RichTextEditor from "../../components/pageComponent/adminPages/richTextEditor";
const UserMannagement = () => {
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
                        Android App
                        </h6>
                        <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                          Save
                        </button>
                      </div>
                      <form action="" className="py-4 px-10 profle-form">
                          <div className="input-div">
                            <div className="label">App Link</div>
                            <Inputfeild placeholder={"Enter"} />
                          </div>
                        <div className="input-div">
                          <div className="label">Short Description</div>
                          <InputTextArea placeholder={"Enter"} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="">
                  <div className="">
                        <RichTextEditor/>
                  </div>
                </div>
              </div>
            </div>
          </AdminDashboardMainContentWrapper>
        </AdminDashboardSidebarNav>
      </AdminPagesWrapper>
    );
}

export default UserMannagement;
