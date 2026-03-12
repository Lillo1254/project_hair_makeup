import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import db from "@/lib/db";

export async function DELETE(req: NextRequest) {
  try {
    const { path: filePath } = await req.json();
    if (!filePath) return NextResponse.json({ error: "Path mancante" }, { status: 400 });

    // rimuove dal filesystem
    try { await fs.unlink(path.join(process.cwd(), "public", filePath)); } catch {}

    // rimuove dal DB
    await db.query("DELETE FROM media WHERE gallery = ? OR offers = ? OR videos = ?", [filePath, filePath, filePath]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore cancellazione" }, { status: 500 });
  }
}