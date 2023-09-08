import React from 'react';
import AppNavBar from '../component/AppNavBar';

const Page = () => {
    return (
        <div>
            <AppNavBar/>
            <h1 className='my-5'>this is the home page with middleware verification</h1>
            <p>l</p>
        </div>
    );
};

export default Page;