import React from 'react';
import lightLogo from '../../../assets/img/logo/light-logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import {Link} from "react-router-dom";

const MainFotter = () => {
    return (
        <div className='main-footer-wrapper'>
            <div className='flex-row-center pb-10'>
                <div className='w-5/12 flex-coloum-start-center'>
                    <div className='mb-5'>
                    <Link to='/'>
                        <img className='ml-[2rem] w-[400px]' alt='light logo' src={lightLogo} />
                    </Link>
                    </div>
                    <div className='my-6 mx-6'>
                        <h2 className='main-footer-headline'>Here is TagLine 1</h2>
                        <p className='main-footer-text'>
                            Subline write here Subline write here write Sub line wtte here Subline writes here woo Subline write here Subline write heressSubline write weher here Subline write here write Sub line write here Subline write where eir woo Subline writ e here Subline write heress Sub line write qhere write Subline write here write Sub line write here Subline write here woo
                        </p>
                    </div>
                    <div className='footer-social-links'>
                        <FacebookIcon/>
                        <YouTubeIcon/>
                        <TwitterIcon/>
                    </div>
                </div>
                <div className='w-7/12 flex-row-around pl-12'>
                    <div>
                        <ul className='main-footer-list'>
                            <li>
                                Resources
                            </li>

                            <li>
                                <Link to='/pricing'>Pricing</Link>
                            </li>
                            <li>
                                 <Link to='/blog'>Blog</Link>
                            </li>
                            <li>
                                 <Link to='/whymailsale'>Why MailSale</Link> 
                            </li>
                          
                            <li>
                                 <Link to='/customercare'>Customer Care</Link> 
                            </li>
                            <li>
                                 <Link to='/contact'>Get In Touch</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='main-footer-list'>
                            <li>
                                Features
                            </li>

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
                                 <Link to='/emailapi'>Email API</Link> 
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='main-footer-list'>
                            <li>
                                Get In Touch
                            </li>

                            <li>
                                <Link to='/signup'>Sign Up</Link>
                            </li>
                            <li>
                                 <Link to='/login'>Login</Link>
                            </li>
                            
                        </ul>
                    </div>

                </div>
            </div>
            <hr className='px-1 w-full h-[1px] bg-normal-light-blue'/>
            <div className='flex-row-center-between footer-copywright-section'>
                <div>
                    <p className='text-white text-2 px-4 pt-10' pb-3>
                        Copyright © 2022 by mailsale All rights reserved.
                    </p>
                    <div className='flex-row-center'>
                        <span className='hover:text-white ml-4 mr-6 text-light-white-500'><a href='home.html'>Terms and Conditions</a></span>
                        <ul className=''>
                            
                            <li>
                                <Link to='/privacypolicy'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to='/cooliepolicy'>Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='w-1/2'>
                <div className='flex-row-center'>
                        <span className='hover:text-white ml-4 mr-6 text-light-white-500'><a href='home.html'><LanguageIcon/></a></span>
                        <ul>
                            
                            <li>
                                <Link to='#'>English (En)</Link>
                            </li>
                            <li>
                                <Link to='#'>Português (Br)</Link>
                            </li>

                            <li>
                                <Link to='#'>简体中文 (Zh)</Link>
                            </li>

                            <li>
                                <Link to='#'>Українська (Ua)</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFotter;
