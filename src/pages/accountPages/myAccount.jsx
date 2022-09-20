import React from 'react';
const MyAccount = (props) => {
    const {funcNav,funcUsrDashboardNav,funcmainFooter} = props
    funcNav(false)
    funcUsrDashboardNav(true)
    funcmainFooter(false)
    return (
        <div>
            
        </div>
    );
}

export default MyAccount;
