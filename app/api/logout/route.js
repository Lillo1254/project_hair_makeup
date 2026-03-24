import { NextResponse } from "next/server";

export async function POST(req){
    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", "",{
        httpsOnly: true,
        secure: false, //da cambiare solo con sito online https in true
        sameSite: "strict",
        path: "/",
        maxAge: 0,
    });
    /* console.log("Logout effettuato" ); */
    return response;
    }
