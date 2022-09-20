import React,{useState} from 'react';
import { AdminContext } from '../../context/appContext';

const AdminDashboardContextwrapper = ({children}) => {
    const [adminSidebarShow,setAdminSidebarShow ]= useState(false);
    return (
        <>
            <AdminContext.Provider value={{adminSidebarShow,setAdminSidebarShow }}>
                    {children}
            </AdminContext.Provider>
        </>
    );
}

export default AdminDashboardContextwrapper;
