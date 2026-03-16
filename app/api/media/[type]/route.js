import db from "@/lib/db";

export async function GET(request, context) {
  const { params } = context;
  const { type } = await params;

  const validColumns = ["gallery", "offers", "video"];
  if (!validColumns.includes(type)) {
    return Response.json({ error: "Colonna non valida" }, { status: 400 });
  }

  try {
    const [results] = await db.query(
      `SELECT ${type} 
       FROM media 
       WHERE ${type} IS NOT NULL
       ORDER BY id DESC
       LIMIT 6`
    );

    const paths = results.flatMap(row => {
      const value = row[type];

      if (typeof value === "string" && value.startsWith("[")) {
        return JSON.parse(value);
      }

      if (Array.isArray(value)) {
        return value;
      }

      return [value];
    });

    return Response.json(paths);
  } catch (error) {
    console.error("DB ERROR:", error);
    return Response.json({ error: "Errore del database" }, { status: 500 });
  }
}
