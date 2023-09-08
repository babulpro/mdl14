import { NextResponse } from "next/server";
 import nodemailer from  "nodemailer"

 export async function GET(res,req){
    const {searchParams} = new URL(res.url);
    let toEmail = searchParams.get('email')

    let Transporter = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth:{
            user:"info@teamrabbil.com",
            pass:"~sR4[bhaC[Qs"
        },
        tls:{rejectUnauthorized:false}
    })

    //prepare email

    let myEmail ={
        from:"test Email From Next Js Application<info@teamrabbil.com>",
        to:toEmail,
        subject:"test Email From Next JS Application",
        text:"Test Email From Next JS Application"

    }

    try{
       let result = await Transporter.sendMail(myEmail);
       return NextResponse.json({msg:result})

    }
    catch(e){
      return NextResponse.json({msg:"not success"})
    }

  
 }






