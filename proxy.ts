import {NextRequest, NextResponse} from "next/server";
import {jwtVerify} from "jose";

export async function proxy(req: NextRequest){
    const token = req.cookies.get("admin_token")?.value;

    if(!token){
        return NextResponse.redirect(new URL("/admin", req.url));
    
    }
    try {
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return NextResponse.next();

  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/admin", req.url));
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};