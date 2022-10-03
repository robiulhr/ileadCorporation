import React from 'react'
import { Outlet } from "react-router-dom";
import MainnavBar from "../components/globalComponent/NavAndFooter/MainnavBar";
import MainFotter from '../components/globalComponent/NavAndFooter/mainFotter'

const Home = () => {
    return (
        <>
           <MainnavBar />
               <Outlet />
           <MainFotter />
        </>
    )
}
 
export default Home; 