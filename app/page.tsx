import ButtonPrimary from "./components/buttons/ButtonPrimary";
import CardService from "./components/cards/CardService";
import CardGallery from "./components/cards/CardGallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function PageHome() {

  return (
    <div className="min-h-screen bg-black text-white relative">


      <Navbar />

      <Header title="A Testa in Su" subtitle="Hair & Makeup Studio" />

      {/* === HERO ====== */}
      <section className="relative min-h-screen overflow-hidden">


        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-700" />

        {/* Contenuto */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-evenly text-center px-6">

          <div>

            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase">
              Stile che parla di te
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              Taglio uomo e donna in un ambiente elegante e minimale.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/calendarPage">
              <ButtonPrimary label="Prenota ora" />
            </Link>
          </div>

        </div>
      </section>

      {/* ====== SERVIZI ====== */}
      <section className="px-6 py-20 bg-neutral-700">
        
        <div className="flex justify-center  mb-10">
        <span className="text-4xl md:text-5xl font-light tracking-widest uppercase text-center p-2 bg-black rounded-xl">
          I Nostri Servizi
        </span>
        </div>

        <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-4">

          <CardService
            title="Donna"
            description="Tagli personalizzati e colore su misura."
            image="https://picsum.photos/400?1"
          />

          <CardService
            title="Uomo"
            description="Stile moderno e classico curato nei dettagli."
            image="https://picsum.photos/400?2"
          />

          <CardService
            title="Bambino"
            description="Stile moderno e classico curato nei dettagli."
            image="https://picsum.photos/400?2"
          />

          <CardService
            title="Make-up"
            description="Eleganza naturale per ogni occasione."
            image="https://picsum.photos/400?3"
          />

        </div>
      </section>

      {/* ============ GALLERIA ================ */}
      <section className="px-6 py-20 bg-neutral-700">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

          {Array.from({ length: 8 }).map((_, i) => (
            <CardGallery
              key={i}
              image={`https://picsum.photos/400?random=${i}`}
            />
          ))}

        </div>
      </section>

      {/* =============== FOOTER ========= */}
      <Footer
        name="A Testa in Su — Hair & Makeup Studio"
        address="Via Roma · Piccola Cittadina"
      />

    </div>
  );
}
