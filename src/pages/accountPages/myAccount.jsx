import React from 'react';
const MyAccount = (props) => {
    const {funcNav,funcUsrDashboardNav} = props
    funcNav(false)
    funcUsrDashboardNav(true)
    return (
        <div>
            
        </div>
    );
}

export default MyAccount;
