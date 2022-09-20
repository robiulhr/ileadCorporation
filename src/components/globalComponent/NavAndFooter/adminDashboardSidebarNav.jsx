import React, { useEffect,useContext } from 'react';
import AdminDashboardNav from './adminDashboardNav';
import AdminDashboardSidebar from './adminDashboardSidebar';
import { AdminContext } from '../../../context/appContext';


const AdminDashboardSidebarNav = (props) => {
  const {children} = props
  const {adminSidebarShow } = useContext(AdminContext);
  

  useEffect(() => {

  }, [adminSidebarShow]);

  return (
    <div className='w-full h-full min-h-screen'>
        <div>
            <AdminDashboardNav/>
        </div>
        <div className='flex flex-row'>
              <AdminDashboardSidebar/>
              {children}
        </div>
    </div>
  );
}

export default AdminDashboardSidebarNav;
