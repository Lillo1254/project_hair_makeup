import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT gallery, offers, videos FROM media ORDER BY id DESC LIMIT 100");
    const row = rows[0] || { gallery: null, offers: null, videos: null };

    // garantisce che siano sempre array
    const gallery = row.gallery ? [row.gallery].flat() : [];
    const offers = row.offers ? [row.offers].flat() : [];
    const videos = row.videos ? [row.videos].flat() : [];

    return NextResponse.json({ gallery, offers, videos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore lettura DB" }, { status: 500 });
  }
}