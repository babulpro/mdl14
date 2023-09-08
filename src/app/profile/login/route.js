import { NextResponse } from "next/server";
import { SignJWT} from "jose";

export async function POST(req,res){
    const JSONBody = await req.json()
    let username = JSONBody['user']
    let password = JSONBody['password']
    
    
    //database

    if(username ==="ABC" && password ==="123"){

        const payload = {username:username}

        const Key = new TextEncoder().encode(process.env.JWT_KEY);


        let token = await new SignJWT(payload)
          .setProtectedHeader({alg:'HS256'})
         .setIssuedAt()
         .setIssuer('https://localhost:3000')
         .setExpirationTime('2h')
         .sign(Key)

        return NextResponse.json({status:"ok",msg:"login success",token:token},{status:200})
    }

    else{
        return NextResponse.json({status:"fail",msg:"invalid user"},{status:401})
    }


}

