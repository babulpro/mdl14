import {CheckCookieAuth} from "@/app/utility/MiddlewareUtility";

import { NextResponse } from "next/server"
import { jwtVerify } from "jose"


 



export async function middleware(req,res,next){


    if(req.nextUrl.pathname.startsWith('/api/profile')){

 

        try{
            const reqHeaders =new Headers(req.headers);
            const Token = reqHeaders.get('token');

            const Key =new TextEncoder().encode(process.env.JWT_KEY);

            const decodedString = await jwtVerify(Token,Key);


            const username = decodedString['payload']['username'];

            reqHeaders.set('username',username);
            
            return NextResponse.next({
                request:{headers:reqHeaders}
            })

        }
        catch(e){
            
              return NextResponse.json({status:"fail",message:"invalid user"},{status:401})
           
        
        
        }
    }
  









}
















