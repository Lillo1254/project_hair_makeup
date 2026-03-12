import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import db from "@/lib/db";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

function sanitizeFilename(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.-]/g, "");
}

export async function POST(req: NextRequest) {
  try {

    const data = await req.formData();
    const files = data.getAll("files") as File[];
    const folder = data.get("folder") as string;

    if (!files.length) {
      return NextResponse.json(
        { error: "Nessun file ricevuto" },
        { status: 400 }
      );
    }

    const paths: string[] = [];

    for (const file of files) {

      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      const cleanName = sanitizeFilename(file.name.split(".")[0]);
      const filename = `${Date.now()}-${cleanName}`;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      /* ======================
         IMMAGINI
      ====================== */

      if (folder === "imagesGallery" || folder === "imagesOffers") {

        const allowedImages = ["jpg", "jpeg", "png", "webp"];

        if (!allowedImages.includes(ext)) {
          return NextResponse.json(
            { error: "Formato immagine non supportato" },
            { status: 400 }
          );
        }

        if (file.size > MAX_IMAGE_SIZE) {
          return NextResponse.json(
            { error: "Immagine troppo grande (max 5MB)" },
            { status: 400 }
          );
        }

        const webpFilename = `${filename}.webp`;

        const webpPath = path.join(
          process.cwd(),
          "public",
          folder,
          webpFilename
        );

        await sharp(buffer)
          .resize({
            width: 1920,
            withoutEnlargement: true
          })
          .webp({ quality: 80 })
          .toFile(webpPath);

        const publicPath = `/${folder}/${webpFilename}`;

        paths.push(publicPath);

        if (folder === "imagesGallery") {
          await db.query(
            "INSERT INTO media (gallery) VALUES (?)",
            [publicPath]
          );
        }

        if (folder === "imagesOffers") {
          await db.query(
            "INSERT INTO media (offers) VALUES (?)",
            [publicPath]
          );
        }

      }

      /* ======================
         VIDEO (SOLO MP4)
      ====================== */

      if (folder === "videoGallery") {

        if (ext !== "mp4") {
          return NextResponse.json(
            { error: "Sono ammessi solo video MP4" },
            { status: 400 }
          );
        }

        if (file.size > MAX_VIDEO_SIZE) {
          return NextResponse.json(
            { error: "Video troppo grande (max 100MB)" },
            { status: 400 }
          );
        }

        const videoFilename = `${filename}.mp4`;

        const videoPath = path.join(
          process.cwd(),
          "public",
          folder,
          videoFilename
        );

        await writeFile(videoPath, buffer);

        const publicPath = `/${folder}/${videoFilename}`;

        paths.push(publicPath);

        await db.query(
          "INSERT INTO media (videos) VALUES (?)",
          [publicPath]
        );

      }

    }

    return NextResponse.json({ paths });

  } catch (error) {

    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      { error: "Errore durante upload" },
      { status: 500 }
    );

  }
}