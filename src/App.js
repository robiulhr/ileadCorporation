import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainnavBar from './components/globalComponent/NavAndFooter/MainnavBar';
import Dashborad from './pages/dashboard'
import Blog from './pages/blog'
import Contact from './pages/contact'
import CustomerCare from './pages/customerCare'
import MainFotter from './components/globalComponent/NavAndFooter/mainFotter';
import SuccsesStories from './pages/succsesStories';
import Reviews from './pages/reviews';
import HowToWorkWithMailsale from './pages/howToWorkWithMailsale';
import Pricing from './pages/pricing';
import SalesCrm from './pages/salesCrm';
import EmailApi from './pages/emailApi';
import EmailMarketing from './pages/emailMarketing';
import EmailFinder from './pages/emailFinder';
function App() {
  return (
    <Router>
        <MainnavBar/>
        <Routes>
          <Route exact path="/"  element={<Dashborad/>} />
          <Route exact path="/blog"  element={<Blog/>} />
          <Route exact path="/contact"  element={<Contact/>} />
          <Route exact path="/customercare"  element={<CustomerCare/>} />
          <Route exact path="/succsesstories"  element={<SuccsesStories/>} />
          <Route exact path="/reviews"  element={<Reviews/>} />
          <Route exact path="/howtoworkwithmailsale"  element={<HowToWorkWithMailsale/>} />
          <Route exact path="/pricing"  element={<Pricing/>} />
          <Route exact path="/salescrm"  element={<SalesCrm/>} />
          <Route exact path="/emailapi"  element={<EmailApi/>} />
          <Route exact path="/emailmarketing"  element={<EmailMarketing/>} />
          <Route exact path="/emailfinder"  element={<EmailFinder/>} />

        </Routes>
        
        <MainFotter/>

     </Router>
  );
}

export default App;
