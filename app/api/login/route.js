import { loginAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const token = await loginAdmin(email, password);

    const response = NextResponse.json({ success: true });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: false, // da cambiare quando sito online https in treu
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 2,
    });

    return response;

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}