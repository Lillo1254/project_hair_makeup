// app/api/saveToDB/route.ts
import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db"; // la tua connessione al DB
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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

    // crea la cartella se non esiste
    const folderPath = path.join(process.cwd(), "public", folder);
    await mkdir(folderPath, { recursive: true });

    const savedPaths: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(folderPath, filename);

      // VALIDAZIONE LATO SERVER
      if (folder === "videoGallery" && file.type !== "video/mp4") {
        return NextResponse.json(
          { error: `Il file ${file.name} non è un MP4 valido` },
          { status: 400 }
        );
      }

      await writeFile(filePath, buffer);

      const publicPath = `/${folder}/${filename}`;
      savedPaths.push(publicPath);

      // inserisci nel DB
      if (folder === "imagesGallery") {
        await db.query("INSERT INTO media (gallery) VALUES (?)", [publicPath]);
      } else if (folder === "imagesOffers") {
        await db.query("INSERT INTO media (offers) VALUES (?)", [publicPath]);
      } else if (folder === "videoGallery") {
        await db.query("INSERT INTO media (videos) VALUES (?)", [publicPath]);
      }
    }

    return NextResponse.json({ savedPaths });
  } catch (error) {
    console.error("Errore saveToDB:", error);
    return NextResponse.json({ error: "Errore salvataggio DB" }, { status: 500 });
  }
}