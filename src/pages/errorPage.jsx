import React from 'react'

const ErrorPage = (props) => {
    const {funcNav,funcUsrDashboardNav,funcmainFooter}=props
    funcNav(false)
    funcUsrDashboardNav(false)
    funcmainFooter(false)
    return (
        <div className='flex-row-center w-screen h-screen'>
            <h1 className='text-[6rem]'>404 page not found</h1>
        </div>
    )
}

export default ErrorPage;