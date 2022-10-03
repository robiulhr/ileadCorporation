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
import {
  SalesAnaliticsPageSalesAnaliticsData,
  adminDashboardPieChartdata,
} from "../../content/adminDashboardData";
import AdminDashboardMainContentWrapper from "../../components/pageComponent/adminPages/adminDashboardMainContentWrapper";

const SalesAnalytics = () => {

  return (
    <AdminPagesWrapper>
      <AdminDashboardSidebarNav>
        <AdminDashboardMainContentWrapper>
          <div>
            <AdminTitle title={"Sales Analytics"} />
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
            <div className="w-3/4">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mt-10 mx-4 px-4 py-1 rounded-lg">
                Sales Analytics
              </button>
            </div>
            <div className="w-1/4">
              <button className="btn btn-primary-blue-transparent text-[.7rem] mt-10 px-4 py-1 rounded-lg">
                Leads Analytics
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

export default SalesAnalytics;
