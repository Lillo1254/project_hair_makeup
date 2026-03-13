'use client'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonPrimary from "./components/buttons/ButtonPrimary";

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">

      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-light tracking-widest uppercase mb-6">
          500
        </h1>

        <p className="text-gray-300 max-w-lg">
          Ci scusiamo per il disagio, al momento il sito non è navigabile.
          Torneremo presto ad essere attivi ed efficienti.
        </p>

        <div className="mt-10">
<ButtonPrimary label="Riprova" onClick={reset} />
        </div>

      </main>

      <Footer
        
        
      />

    </div>
  );
}