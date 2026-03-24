import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    await db.query("INSERT INTO media (videos) VALUES (?)", [url]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Errore DB video:", err);
    return NextResponse.json({ error: "Errore DB" }, { status: 500 });
  }
}
