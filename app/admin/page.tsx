"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPageLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Inserisci email e password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Errore login");
      }

      router.push("/admin/dashboard");

    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-neutral-800 p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-light tracking-widest uppercase">
            Area Admin
          </h1>
          <p className="mt-3 text-gray-400 text-sm">
            Inserisci le credenziali per accedere.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded focus:outline-none focus:border-white transition"
            />
          </div>

          {error && (
            <div className="bg-red-600/20 border border-red-500 text-red-400 p-3 rounded text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Accesso in corso..." : "Accedi"}
          </button>
        </form>
      </div>
    </div>
  );
}
