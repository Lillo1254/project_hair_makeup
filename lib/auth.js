import pool from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginAdmin(email, password) {

  
  const [rows] = await pool.query(
    "SELECT * FROM admin WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    throw new Error("Admin non trovato");
  }

  const admin = rows[0];

 
  const isValid = await bcrypt.compare(password, admin.password);

  if (!isValid) {
    throw new Error("Password errata");
  }

  
  const token = jwt.sign(
    { id: admin.id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return token;
}
