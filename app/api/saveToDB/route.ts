import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const files = data.getAll("files") as File[];
    const folder = data.get("folder") as string;

    const savedPaths: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + "-" + file.name;
      const filePath = path.join(process.cwd(), "public", folder, filename);
      await writeFile(filePath, buffer);

      const publicPath = `/${folder}/${filename}`;
      savedPaths.push(publicPath);

      if (folder === "imagesGallery") await db.query("INSERT INTO media (gallery) VALUES (?)", [publicPath]);
      else if (folder === "imagesOffers") await db.query("INSERT INTO media (offers) VALUES (?)", [publicPath]);
      else if (folder === "videoGallery") await db.query("INSERT INTO media (videos) VALUES (?)", [publicPath]);
    }

    return NextResponse.json({ savedPaths });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore salvataggio DB" }, { status: 500 });
  }
}