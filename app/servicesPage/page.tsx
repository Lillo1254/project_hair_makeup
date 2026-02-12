import ButtonBack from "../components/buttons/buttonBack";
import CardService from "../components/cards/CardService";
import ButtonPrimary from "../components/buttons/ButtonPrimary";

export default function ServicesPage() {
    
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ===== HEADER PAGINA ===== */}
      <section className="relative py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase">
            I Nostri Servizi
          </h1>
          <p className="mt-6 text-gray-400">
            Professionalità, stile e cura dei dettagli per ogni esigenza.
          </p>

          <div className="mt-8 flex justify-center">
            <ButtonBack
              label="Indietro"
              className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-2 rounded transition"
            />
          </div>
        </div>
      </section>

      {/* ===== LISTA SERVIZI ===== */}
      <section className="px-6 pb-20 bg-neutral-700">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">

          <CardService
            title="Donna"
            description="Taglio, piega, colore, balayage e trattamenti personalizzati."
            image="https://picsum.photos/400?1"
          />

          <CardService
            title="Uomo"
            description="Taglio moderno o classico, barba e styling su misura."
            image="https://picsum.photos/400?2"
          />

          <CardService
            title="Bambino"
            description="Tagli pratici e alla moda in un ambiente accogliente."
            image="https://picsum.photos/400?4"
          />

          <CardService
            title="Make-up"
            description="Make-up naturale, cerimonia e shooting fotografici."
            image="https://picsum.photos/400?3"
          />

        </div>
      </section>

      {/* ===== CTA PRENOTAZIONE ===== */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-light tracking-wide">
          Pronto a rinnovare il tuo stile?
        </h2>

        <p className="mt-4 text-gray-400">
          Prenota ora il tuo appuntamento.
        </p>

        <div className="mt-8 flex justify-center">
          <ButtonPrimary label="Prenota ora" />
        </div>
      </section>

    </div>
  );
}
