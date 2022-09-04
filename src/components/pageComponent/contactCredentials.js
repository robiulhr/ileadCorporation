import React from 'react';
const ContactCredentials = (props) => {
    const {icon,title,content} = props;

    return (

        <div className='flex-row-around p-5 my-20'>
            <div className={`p-10 ${props.bgColor} rounded-3xl`}>
                {icon}
            </div>
            <div className='p-10'>
                {title}
                {content}
            </div>
        </div>
    );
}

export default ContactCredentials;
