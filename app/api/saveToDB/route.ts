// app/api/saveToDB/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const files = data.getAll("files") as File[];
    const folder = data.get("folder") as string;

    if (!folder) {
      return NextResponse.json({ error: "Folder mancante" }, { status: 400 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "Nessun file da salvare" }, { status: 400 });
    }

    const savedPaths: string[] = [];

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Upload su Vercel Blob
      const blob = await put(`${folder}/${Date.now()}-${file.name}`, buffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      const publicUrl = blob.url;
      savedPaths.push(publicUrl);

      // Salva nel DB
      if (folder === "imagesGallery") {
        await db.query("INSERT INTO media (gallery) VALUES (?)", [publicUrl]);
      } else if (folder === "imagesOffers") {
        await db.query("INSERT INTO media (offers) VALUES (?)", [publicUrl]);
      } else if (folder === "videoGallery") {
        await db.query("INSERT INTO media (videos) VALUES (?)", [publicUrl]);
      }
    }

    return NextResponse.json({ savedPaths });
  } catch (error) {
    console.error("Errore saveToDB:", error);
    return NextResponse.json({ error: "Errore salvataggio DB" }, { status: 500 });
  }
}
