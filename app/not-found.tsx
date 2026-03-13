import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonPrimary from "./components/buttons/ButtonPrimary";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">

      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl font-light tracking-widest uppercase mb-6">
          404
        </h1>

        <p className="text-gray-300 max-w-lg">
          Siamo spiacenti, forse c'è stato un errore di scrittura ma non
          troviamo la pagina da lei cercata.
        </p>

        <div className="mt-10">
          <Link href="/">
            <ButtonPrimary label="Torna alla Home" />
          </Link>
        </div>

      </main>

      <Footer
      
        
      />

    </div>
  );
}