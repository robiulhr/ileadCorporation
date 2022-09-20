import React from 'react';
const AdminPagesWrapper = (props) => {
   const {children} =props
    return (
        <div className='w-screen min-h-screen bg-cover bg-no-repeat bg-admin-page-bg'>
            <div className='w-full min-h-screen h-full bg-black opacity-80 flex-row-center'>
                {children}
            </div>
        </div>

    );
}

export default AdminPagesWrapper;
