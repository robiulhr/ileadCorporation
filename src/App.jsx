import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import CustomerCare from "./pages/customerCare";
import SuccsesStories from "./pages/succsesStories";
import Reviews from "./pages/reviews";
import HowToWorkWithMailsale from "./pages/howToWorkWithMailsale";
import Pricing from "./pages/pricing";
import SalesCrm from "./pages/salesCrm";
import EmailApi from "./pages/emailApi";
import EmailMarketing from "./pages/emailMarketing";
import EmailFinder from "./pages/emailFinder";
import ProfileDashboard from "./pages/profileDashboard";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Search from "./pages/search";
import MyAccount from "./pages/accountPages/myAccount";
import AdminLogin from "./pages/adminDashboardPages/adminLogin";
import ErrorPage from "./pages/errorPage";
import AdminDashboard from "./pages/adminDashboardPages/adminDashboard";
import AdminDashboardContextwrapper from "./components/pageComponent/adminPages/adminDashboardContextwrapper";
import SalesAnalytics from "./pages/adminDashboardPages/salesAnalytics";
import UserAnalytics from "./pages/adminDashboardPages/userAnalytics";
import LeadsAnalytics from "./pages/adminDashboardPages/leadsAnalytics";
import Profile from "./pages/adminDashboardPages/profile";
import Dashboard from "./pages/dashboard";
import UserDashboard from "./pages/accountPages/userDashboard";
import Password  from "./pages/adminDashboardPages/password";
import UserDetails from "./pages/adminDashboardPages/userDetails";
import ImportLead from "./pages/adminDashboardPages/ImportLead";
import LeadsDetails from "./pages/adminDashboardPages/leadsDetails";
import Settings from "./pages/adminDashboardPages/settings";
import AppSettings from "./pages/adminDashboardPages/appSettings";
import Extension from "./pages/adminDashboardPages/extension";
import SeoSettings from "./pages/adminDashboardPages/seoSettings";
import SiteSettings from "./pages/adminDashboardPages/siteSettings";
import UserMannagement from "./pages/adminDashboardPages/userMannagement";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/customercare" element={<CustomerCare />} />
          <Route exact path="/succsesstories" element={<SuccsesStories />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route
            exact
            path="/howtoworkwithmailsale"
            element={<HowToWorkWithMailsale />}
          />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/salescrm" element={<SalesCrm />} />
          <Route exact path="/emailapi" element={<EmailApi />} />
          <Route exact path="/emailmarketing" element={<EmailMarketing />} />
          <Route exact path="/emailfinder" element={<EmailFinder />} />
          <Route exact path="/search" element={<Search />} />
        </Route>
        {/* login and signup routes */}
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        {/* User dashboard routes  */}
        <Route exact path="user" element={<UserDashboard />}>
          <Route
            exact
            path="profiledashboard"
            element={<ProfileDashboard />}
          />
          <Route exact path="myaccount" element={<MyAccount />} />
        </Route>
        {/* admin dashboard routes  */}
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="admin" element={<AdminDashboardContextwrapper />}>
          <Route exact path="dashboard" element={<AdminDashboard />} />
          <Route exact path="salesanalytics" element={<SalesAnalytics />} />
          <Route exact path="useranalytics" element={<UserAnalytics />} />
          <Route exact path="leadanalytics" element={<LeadsAnalytics />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="password" element={<Password />} />
          <Route exact path="userdetails" element={<UserDetails />} />
          <Route exact path="importleads" element={<ImportLead />} />
          <Route exact path="leadsDetails" element={<LeadsDetails/>} />
          <Route exact path="settings" element={<Settings/>} />
          <Route exact path="appsettings" element={<AppSettings/>} />
          <Route exact path="extension" element={<Extension/>} />
          <Route exact path="seosettings" element={<SeoSettings/>} />
          <Route exact path="sitesettings" element={<SiteSettings/>} />
          <Route exact path="usermannagement" element={<UserMannagement/>} />

        </Route>

        {/* error page  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
