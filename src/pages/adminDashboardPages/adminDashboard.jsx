import React, { useContext } from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "./adminPagesWrapper";
import { AdminContext } from "../../context/appContext";
import InfoCountCart from "../../components/pageComponent/adminPages/infoCountCart";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import AdminPerscentCount from "../../components/pageComponent/adminPages/adminPerscentCount";
import FourDivRow from "../../components/pageComponent/adminPages/fourDivRow";
import SimpleBarChart from "../../components/pageComponent/adminPages/SimpleBarChart";
import CustomActiveShapePieChart from "../../components/pageComponent/adminPages/customActiveShapePieChart";
import SelectMui from "../../components/globalComponent/InputtextAndBtn/selectMui";
import PaieChartLatestHistory from "../../components/pageComponent/adminPages/paieChartLatestHistory";
const AdminDashboard = (props) => {
  const { funcNav, funcUsrDashboardNav, funcmainFooter } = props;
  funcNav(false);
  funcUsrDashboardNav(false);
  funcmainFooter(false);

  const { adminSidebarShow } = useContext(AdminContext);
  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <div
          className={`${
            !adminSidebarShow ? "w-[calc(100%-250px)]" : "w-[100%]"
          } px-10`}
        >
          <div>
            <AdminTitle title={"Dashboard"} />
          </div>
          <div className="flex-row-center">
            <div className="w-1/2">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mx-4 mt-10 px-4 py-1 rounded-lg">
                Users Report
              </button>
            </div>
            <div className="w-1/2">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mx-4 mt-10 px-4 py-1 rounded-lg">
                Leads Report
              </button>
            </div>
          </div>
          <FourDivRow>
            <InfoCountCart text={"Total Users"} count={"512,568"} />
            <InfoCountCart text={"Today Join"} count={"5,688"} />
            <InfoCountCart text={"Total Leads"} count={"100,000"} />
            <InfoCountCart text={"Today Import"} count={"20,000"} />
          </FourDivRow>
          <div className="mb-10 flex-row-center">
            <div className="w-[41%]">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mt-10 ml-[-1.9rem] px-4 py-1 rounded-lg">
                Sales Analytics
              </button>
            </div>
            <div className="w-[26%]">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mt-10 px-4 py-1 rounded-lg">
                Users Analytics
              </button>
            </div>
            <div className="w-[26%]">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mx-10 mt-10 px-4 py-1 rounded-lg">
                Leads Analytics
              </button>
            </div>
          </div>
          <div className="flex-row-center mb-10 h-[600px]">
            <div className="w-[41%] h-full bg-normal-dark-blue-400 p-10 pb-32 ml-2 rounded-2xl">
              <div className="flex justify-end">
                <button className="btn btn-primary-blue-transparent text-[.6rem] px-3 py-1 rounded-lg">
                  View
                </button>
              </div>
              <div className="my-4 flex-row-center justify-start">
                <p className=" text-primary-white-200 inline-block ml-10 mr-2">
                  Sales Report Chart
                </p>{" "}
                <SelectMui />
              </div>
              <SimpleBarChart />
            </div>
            <div className="w-[26%] bg-normal-dark-blue-400 mx-8 h-full flex-coloum-center rounded-2xl">
              <div className="w-full px-8 mt-10  flex-row-center-end">
                <button className="btn btn-primary-blue-transparent text-[.6rem] px-3 py-1 rounded-lg">
                  View
                </button>
              </div>
              <div className="h-[270px] w-full">
                <CustomActiveShapePieChart />
              </div>
              <div className="h-[250px] w-full">
                <PaieChartLatestHistory />
              </div>
            </div>

            <div className="w-[26%] bg-normal-dark-blue-400 h-full flex-coloum-center rounded-2xl">
              <div className="w-full px-8 mt-10  flex-row-center-end">
                <button className="btn btn-primary-blue-transparent text-[.6rem] px-3 py-1 rounded-lg">
                  View
                </button>
              </div>
              <div className="h-[270px] w-full">
                <CustomActiveShapePieChart />
              </div>
              <div className="h-[250px] w-full">
                <PaieChartLatestHistory />
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary-blue-transparent text-[.7rem] mx-4 mt-10 px-4 py-1 rounded-lg">
              Quick Link
            </button>
          </div>
          <FourDivRow>
            <AdminPerscentCount
              heading={"Active Users"}
              paragraph={["50K Active User", "79% Active"]}
            />
            <AdminPerscentCount
              heading={"Active Leads"}
              paragraph={["50K Active User", "79% Active"]}
            />
            <AdminPerscentCount
              heading={"Sales Analytics"}
              paragraph={["50K Active User", "60% Sale"]}
            />
            <AdminPerscentCount
              heading={"Email to Users"}
              paragraph={["50K Active User", "19% Active"]}
            />
          </FourDivRow>
        </div>
      </AdminDashboardSidebarNav>
    </AdminPagesWrapper>
  );
};

export default AdminDashboard;
