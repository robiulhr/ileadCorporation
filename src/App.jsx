import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainnavBar from "./components/globalComponent/NavAndFooter/MainnavBar";
import Dashborad from "./pages/dashboard";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import CustomerCare from "./pages/customerCare";
import MainFotter from "./components/globalComponent/NavAndFooter/mainFotter";
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
import UserDashboardNav from "./components/globalComponent/NavAndFooter/userDashboardNav";
import MyAccount from "./pages/accountPages/myAccount";
function App() {
  const [mainNabShow, setMainNavShow] = useState(true);
  const [userDashboardNavShow, setuserDashboardNavShow] = useState(true);
  return (
    <Router>
      {mainNabShow && <MainnavBar />}
      {userDashboardNavShow && <UserDashboardNav />}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dashborad
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/blog"
          element={
            <Blog
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/contact"
          element={<Contact />}
          funcNav={setMainNavShow}
          funcUsrDashboardNav={setuserDashboardNavShow}
        />
        <Route
          exact
          path="/customercare"
          element={
            <CustomerCare
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/succsesstories"
          element={
            <SuccsesStories
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/reviews"
          element={
            <Reviews
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/howtoworkwithmailsale"
          element={
            <HowToWorkWithMailsale
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/pricing"
          element={
            <Pricing
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/salescrm"
          element={
            <SalesCrm
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/emailapi"
          element={
            <EmailApi
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/emailmarketing"
          element={
            <EmailMarketing
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/emailfinder"
          element={
            <EmailFinder
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/profiledashboard"
          element={
            <ProfileDashboard
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Signup
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Login
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/search"
          element={
            <Search
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
        <Route
          exact
          path="/myaccount"
          element={
            <MyAccount
              funcNav={setMainNavShow}
              funcUsrDashboardNav={setuserDashboardNavShow}
            />
          }
        />
      </Routes>

      <MainFotter />
    </Router>
  );
}

export default App;