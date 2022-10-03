import React from "react";
import AdminDashboardSidebarNav from "../../components/globalComponent/NavAndFooter/adminDashboardSidebarNav";
import AdminPagesWrapper from "../../components/pageComponent/adminPages/adminPagesWrapper";
import InfoCountCart from "../../components/pageComponent/adminPages/infoCountCart";
import AdminTitle from "../../components/pageComponent/adminPages/adminTitle";
import FourDivRow from "../../components/pageComponent/adminPages/fourDivRow";
import SimpleBarChart from "../../components/pageComponent/adminPages/SimpleBarChart";
import CustomActiveShapePieChart from "../../components/pageComponent/adminPages/customActiveShapePieChart";
import SelectMui from "../../components/globalComponent/muiComponent/selectMui";
import PaieChartLatestHistory from "../../components/pageComponent/adminPages/paieChartLatestHistory";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";
import {
  SalesAnaliticsPageSalesAnaliticsData,
  adminDashboardPieChartdata,
} from "../../content/adminDashboardData";
const UserAnalytics = () => {

  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"User Analytics"} />
          </div>
          <div className="flex-row-center">
            <div className="w-1/2">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mx-4 mt-10 px-4 py-1 rounded-lg">
                User Joining
              </button>
            </div>
            <div className="w-1/2">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mx-4 mt-10 px-4 py-1 rounded-lg">
                Website Visitor
              </button>
            </div>
          </div>
          <FourDivRow>
            <InfoCountCart text={"Total Users"} count={"512,568"} />
            <InfoCountCart text={"Today Join"} count={"5,688"} />
            <InfoCountCart text={"Total Visiting"} count={"5,000.00 $"} />
            <InfoCountCart text={"Today Visiting"} count={"3,00.00 $"} />
          </FourDivRow>
          <div className="mb-10 flex-row-center">
            <div className="w-3/4">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mt-10 mx-4 px-4 py-1 rounded-lg">
                Total Joining
              </button>
            </div>
            <div className="w-1/4">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mt-10 px-4 py-1 rounded-lg">
                Website Visitor
              </button>
            </div>
          </div>
          <div className="flex-row-center mb-10 h-[600px]">
            <div className="w-3/4 h-full bg-normal-dark-blue-400 p-10 pb-32 ml-2 rounded-2xl">
              <div className="my-4 flex-row-center justify-start">
                <p className=" text-primary-white-200 inline-block ml-10 mr-2">
                  Sales Report Chart
                </p>{" "}
                <SelectMui />
              </div>
              <SimpleBarChart data={SalesAnaliticsPageSalesAnaliticsData} />
            </div>
            <div className="w-1/4 bg-normal-dark-blue-400 mx-8 h-full flex-coloum-center rounded-2xl">
              <div className="h-[270px] w-full">
                <CustomActiveShapePieChart data={adminDashboardPieChartdata} />
              </div>
              <div className="h-[250px] w-full">
                <PaieChartLatestHistory />
              </div>
            </div>
          </div>
        </AdminDashboardMainContentWrapper>
      </AdminDashboardSidebarNav>
    </AdminPagesWrapper>
  );
};

export default UserAnalytics;
