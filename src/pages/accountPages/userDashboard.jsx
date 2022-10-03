import React from 'react'
import { Outlet } from 'react-router-dom'
import UserDashboardNav from '../../components/globalComponent/NavAndFooter/userDashboardNav'
const UserDashboard = () => {
    return (
        <>
          <UserDashboardNav />
          <Outlet/>
        </>
    )
}

export default UserDashboard