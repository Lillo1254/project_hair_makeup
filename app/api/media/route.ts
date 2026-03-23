// app/api/media/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query<any[]>(
      "SELECT gallery, offers, videos FROM media ORDER BY id DESC"
    );

    const row = rows?.[0] ?? { gallery: null, offers: null, videos: null };

    const gallery = row.gallery ? [row.gallery] : [];
    const offers = row.offers ? [row.offers] : [];
    const videos = row.videos ? [row.videos] : [];

    return NextResponse.json({ gallery, offers, videos });
  } catch (error) {
    console.error("DB ERROR:", error);
    return NextResponse.json({ error: "Errore DB" }, { status: 500 });
  }
}
