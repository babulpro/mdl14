import {headers} from "next/headers";

async function GetData(){
    const headersList = headers()
    return  headersList.get('email')
}


import React from 'react';
import AppNavBar from "@/app/component/AppNavBar";

const Page = async () => {
    const x = await GetData();
    return (
        <div>
            <AppNavBar/>
            <h1 className="text-center my-5 text-primary">Hello ,welcome to home of knowledge</h1>
            {x}
        </div>
    );
};

export default Page;