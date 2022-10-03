import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import { AdminContext } from '../../../context/appContext';

const AdminDashboardContextwrapper = ({children}) => {
    const [adminSidebarShow,setAdminSidebarShow ]= useState(false);
    return (
        <>
            <AdminContext.Provider value={{adminSidebarShow,setAdminSidebarShow }}>
                    <Outlet/>
            </AdminContext.Provider>
        </>
    );
}

export default AdminDashboardContextwrapper;
