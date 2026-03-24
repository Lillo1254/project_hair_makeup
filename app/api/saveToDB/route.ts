import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import db from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    console.log("➡️ saveToDB chiamata");

    const data = await req.formData();
    console.log("📦 formData ricevuto");

    const files = data.getAll("files") as File[];
    const folder = data.get("folder") as string;

    console.log("📁 folder:", folder);
    console.log("📸 numero file:", files.length);

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("❌ TOKEN Blob mancante!");
      return NextResponse.json({ error: "TOKEN mancante" }, { status: 500 });
    }

    if (!folder) {
      return NextResponse.json({ error: "Folder mancante" }, { status: 400 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "Nessun file da salvare" }, { status: 400 });
    }

    const savedPaths: string[] = [];

    for (const file of files) {
      console.log("➡️ Upload file:", file.name, file.type);

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const blob = await put(`${folder}/${Date.now()}-${file.name}`, buffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      console.log("✔️ Blob salvato:", blob.url);

      const publicUrl = blob.url;
      savedPaths.push(publicUrl);

      console.log("➡️ Salvataggio nel DB:", publicUrl);

      await db.query(
        `INSERT INTO media (${folder === "imagesGallery" ? "gallery" :
                             folder === "imagesOffers" ? "offers" :
                             "videos"}) VALUES (?)`,
        [publicUrl]
      );

      console.log("✔️ DB OK");
    }

    return NextResponse.json({ savedPaths });
  } catch (error) {
    console.error("❌ ERRORE saveToDB:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
