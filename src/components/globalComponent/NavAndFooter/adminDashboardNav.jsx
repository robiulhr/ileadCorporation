import React,{useContext} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AdminContext } from '../../../context/appContext';
import lightLogo from '../../../assets/img/logo/light-logo.png'
const AdminDashboardNav = () => {
    const { adminSidebarShow,setAdminSidebarShow } = useContext(AdminContext);

	const handleSidebarShow = () => {
		setAdminSidebarShow(!adminSidebarShow);
	};
    return (
        <div className='px-6 py-5 bg-normal-dark-blue-100 flex-row'>
            <MenuIcon
                sx={{color:"white",cursor:"pointer",display:"inline-block"}}
                onClick={handleSidebarShow}
            />
            <img src={lightLogo} alt="" className='w-[150px] inline-block mx-10' />
        </div>
    );
}

export default AdminDashboardNav;
