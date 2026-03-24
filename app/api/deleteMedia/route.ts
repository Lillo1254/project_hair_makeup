// app/api/deleteMedia/route.ts
import { NextRequest, NextResponse } from "next/server";
import { del } from "@vercel/blob";
import db from "@/lib/db";

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const path = body.path;

    if (!path) {
      console.error("DELETE: path mancante nel body");
      return NextResponse.json({ error: "Path mancante" }, { status: 400 });
    }

    /* console.log("DELETE richiesto per:", path); */

    // Se è un URL Blob, prova a cancellare dal Blob
    if (path.startsWith("http")) {
      try {
        await del(path, {
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        console.log("Blob cancellato:", path);
      } catch (err) {
        console.error("Errore cancellazione Blob (continuo comunque con il DB):", err);
      }
    } else {
      console.log("Path non è un URL Blob, salto cancellazione Blob");
    }

    // Cancella dal DB
    const [result] = await db.query(
      "DELETE FROM media WHERE gallery = ? OR offers = ? OR videos = ?",
      [path, path, path]
    );
    /* console.log("Righe DB cancellate:", result); */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore DELETE /api/deleteMedia:", error);
    return NextResponse.json({ error: "Errore cancellazione" }, { status: 500 });
  }
}
