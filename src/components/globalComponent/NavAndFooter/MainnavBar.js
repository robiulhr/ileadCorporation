import React from 'react';
import mainlogo from '../../../assets/img/logo/logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";

const MainnavBar = () => {
    return (
     <div className='container'>
          <div className='flex-row-center-between py-24'>
            <div className='w-3/12'>
                <div className='main-nav-logo'>
                    <Link to='/'>
                         <img src={mainlogo} alt='main logo'/>
                    </Link>
                </div>
            </div>
            <div className='lg:w-5/12 w-9/12'>
                <ul className='main-nav-menu flex-row-center-between'>
                   <li>
                        <Link to='/'>Home</Link>
                   </li> 
                   <li className='relative group'>
                        <span className='cursor-default'>Tools<ArrowDropDownIcon/></span>
                        <ul className='main-nav-dropdown-menu flex-row-center '>
                              <li>
                                   <Link to='/salescrm'>Sales CRM</Link>
                              </li>
                              <li>
                                   <Link to='/emailfinder'>Email Finder</Link>
                              </li>
                              <li>
                                   <Link to='/emailmarketing'>Email Marketing</Link>
                              </li>
                              <li>
                                   <Link to='/emailapi'>Email Api</Link>
                              </li>
                        </ul>
                   </li> 
                   <li>
                        <Link to='/pricing'>Pricing</Link>
                   </li> 
                   <li className='relative group'>
                        <span className='cursor-default'>Why mailsale<ArrowDropDownIcon/></span>
                        <ul className='main-nav-dropdown-menu flex-row-center '>
                              <li>
                                   <Link to='/succsesstories'>Success Stories</Link>
                              </li>
                              <li>
                                   <Link to='/reviews'>Reviews</Link>
                              </li>
                              <li>
                                   <Link to="/howtoworkwithmailsale">How to Work With Mailsale</Link>
                              </li>
                        </ul>
                   </li> 
                   <li>
                        <Link to='/blog'>Blog</Link>
                   </li> 
                   <li>
                        <Link to='/customercare'>Customer Care</Link>
                   </li> 
                   <li className='relative group'>
                        <Link to='home.html'>EN<ArrowDropDownIcon/></Link>
                        <ul className='main-nav-dropdown-menu flex-coloum-center nav-language-menu'>
                              <li>
                                   <Link to='home.html'>Hello world</Link>
                              </li>
                              <li>
                                   <Link to='home.html'>Hello world</Link>
                              </li>
                        </ul>
                   </li> 
                   <li className='btn btn-transparent-light-blue'>
                        <Link to='/contact'>Get in Touch</Link>
                   </li> 
                </ul>
            </div>
        </div>
     </div>
        
    );
}

export default MainnavBar;
