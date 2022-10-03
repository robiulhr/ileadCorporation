import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import Inputfeild from "../../components/globalComponent/InputtextAndBtn/inputfeild";
import InputTextArea from "../../components/globalComponent/InputtextAndBtn/inputTextarea";
import ImageUploadInput from "../../components/globalComponent/InputtextAndBtn/imageUploadInput";
import TextAreaAutocomplete from "../../components/globalComponent/InputtextAndBtn/textAreaAutocomplete";
const SeoSettings = () => {
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
                      Search Engine Optimization (SEO)
                      </h6>
                      <button className="btn btn-transparent-light-blue rounded-xl py-1 px-4 my-3 mx-10">
                        Update
                      </button>
                    </div>
                    <form action="" className="py-4 px-10 profle-form">
                      <div className="flex-row-center">
                        <div className="w-1/3 seoSettingImageInput">
                          <ImageUploadInput label={"Upload Image"} />
                        </div>
                        <div className="w-2/3">
                          <div className="input-div ml-4">
                            <div className="label">Social Title</div>
                            <Inputfeild placeholder={"Admin Name"} />
                          </div>
                          <div className="input-div ml-4">
                            <div className="label">Social Description</div>
                            <InputTextArea placeholder={"Enter"} />
                          </div>
                        </div>
                      </div>

                      <div className="input-div">
                        <div className="label">Meta Keywords</div>
                        <TextAreaAutocomplete />
                      </div>
                      <div className="input-div">
                        <div className="label">Meta Description</div>
                        <InputTextArea placeholder={"Enter"} />
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

export default SeoSettings;
