import React from 'react';
import Inputfeild from '../../components/globalComponent/InputtextAndBtn/inputfeild';
import PasswordInput from '../../components/globalComponent/InputtextAndBtn/passwordInput';
import AdminPagesWrapper from '../../components/pageComponent/adminPages/adminPagesWrapper';
const AdminLogin = (props) => {
    const {funcNav,funcUsrDashboardNav,funcmainFooter} = props
    funcNav(false)
    funcUsrDashboardNav(false)
    funcmainFooter(false)
    return (
        <AdminPagesWrapper>
                  <div className='bg-primary-blue-400 py-20 px-28 admin-login rounded-lg'>
            <div>
                <h4 className='text-light-white-800 text-[1.8rem] text-center pb-3 font-bold'>Welcome to Admin Panel</h4>
                <p className='text-light-white-800 text-[1.2rem] text-center'>Login to your account</p>
            </div>
            <form action="" className='min-w-[400px]'>
                <div className='mb-8 mt-10' >
                    <div className='pb-2'>
                        <p className='text-light-white-500 font-bold text-[1.1rem]'>Username</p>
                    </div>
                    <Inputfeild
                        placeholder="Enter Username"
                    />
                </div>
                <div>
                    <div className='pb-2'>
                        <p className='text-light-white-500 font-bold text-[1.1rem]'>Password</p>
                    </div>
                    <PasswordInput
                        placeholder="Enter Password"
                    />
                </div>
                <div className='p-3'>
                    <p className='text-right'><a href="/forgotpassword" className='hover:text-primary-blue text-light-white-800 text-[.8rem] text-right'>Forgot Password</a></p>
                </div>
                <div className=''>
                    <button className='btn btn-primary-blue-transparent w-full mt-8 text-[1.3rem] py-3'>Login</button>
                </div>
            </form>
        </div>
        </AdminPagesWrapper>
      
    );
}

export default AdminLogin;
