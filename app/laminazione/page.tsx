import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Laminazione e Ricostruzione | A Testa In Su",
  description:
    "Scopri i trattamenti Laminazione Nevitaly e Ricostruzione Ego Bond. Capelli luminosi, protetti e forti con formule vegane e tecnologie all'avanguardia.",
};

export default function ServiziSpecialiPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-700">
      
      {/* HEADER SEMPLIFICATO (Indipendente da componenti esterni) */}
      <header className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase playfair_text mb-4">
          Trattamenti Esclusivi
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Rituali di luce e ricostruzione profonda per esaltare e proteggere la bellezza dei tuoi capelli.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-24">
        
        {/* LAMINAZIONE NEVITALY */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-neutral-200">
              Laminazione Nevitaly
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Un rituale di luce istantaneo formulato specificamente per capelli opachi e spenti.
              </p>
              <p>
                <strong>Per cosa si distingue da altri trattamenti?</strong> Per la sua formula completamente vegana. Contiene proteine e amminoacidi vegetali a basso peso molecolare. Questo significa che, a differenza di prodotti con alto peso molecolare, le molecole sono molto più piccole: il prodotto penetra più in profondità anziché restare solo in superficie.
              </p>
              <p>
                Sfrutta una texture liquida a <strong>tecnologia lamellare</strong> che veicola i principi attivi in modo ultra rapido sulla fibra del capello senza lunghi tempi di posa. 
              </p>
              <p>
                L&apos;azione districante leviga la struttura e la lucida rapidamente, lasciando i capelli leggeri per un risultato <strong>effetto specchio immediato</strong>.
              </p>
            </div>
          </div>
          
          {/* Box Immagine Placeholder - Sostituisci il div con <Image /> quando hai la foto */}
          <div className="w-full aspect-square md:aspect-[4/5] bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-2xl">
            <span className="text-5xl mb-4">✨</span>
            <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">
              Foto Prodotto<br />Laminazione Nevitaly
            </span>
          </div>
        </section>

        {/* RICOSTRUZIONE EGO BOND */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Box Immagine Placeholder - Ordine invertito su desktop */}
          <div className="order-2 md:order-1 w-full aspect-square md:aspect-[4/5] bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-2xl">
            <span className="text-5xl mb-4">🛡️</span>
            <span className="text-neutral-500 uppercase tracking-widest text-sm font-semibold">
              Foto Prodotto<br />Ego Bond
            </span>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-wider text-neutral-200">
              Ricostruzione Ego Bond
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Un trattamento pensato per proteggere, fortificare e ristrutturare la fibra capillare durante e dopo servizi tecnici come colorazioni o decolorazioni.
              </p>
              <p>
                <strong>Cosa fa?</strong> Rinforza i legami interni del capello e previene i danni futuri. Crea un film protettivo interno al capello che compatta le cuticole e aumenta la riflessione della luce. Restituisce corpo, morbidezza e gestibilità ai capelli stressati e trattati!
              </p>
              <p>
                Il principio attivo chiave è la <strong>Keravis Bond Technology</strong>: un mix di proteine e amminoacidi a basso peso molecolare che penetra in profondità nella corteccia del capello per riparare e ristrutturare, creando uno scudo esterno che aumenta l&apos;elasticità e previene le rotture.
              </p>
            </div>
          </div>
        </section>

        

        

        {/* MANTENIMENTO A CASA */}
        <section className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-neutral-200 mb-2">
            Il Segreto per un Risultato al 100%
          </h2>
          <h3 className="text-lg text-neutral-400 uppercase tracking-widest mb-8">
            L&apos;importanza del mantenimento a casa
          </h3>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-left md:text-center">
            <p>
              Il mantenimento a casa è il segreto fondamentale per prolungare i benefici di qualsiasi trattamento svolto in salone e per la protezione dei capelli nel tempo. Il salone rappresenta la cura d&apos;urto, ma la routine quotidiana determina come i capelli appariranno e reagiranno ogni singolo giorno.
            </p>
            <p>
              <strong>Perché è fondamentale?</strong><br />
              Ogni trattamento fatto in salone, come colorazione o schiaritura, sbiadisce e si ossida velocemente se lavato con prodotti inadatti. Shampoo e maschera specifici per ogni tipologia di capello sigillano i pigmenti e i nutrienti all&apos;interno, proteggono da agenti esterni come inquinamento e sole, mantenendo idratazione e nutrimento.
            </p>
            <p>
              Problematiche come forfora, cute grassa o secca si risolvono solo con la costanza e con i prodotti giusti, rispettando l&apos;equilibrio della cute.
            </p>
            
            <blockquote className="mt-8 border-l-4 border-neutral-500 pl-6 py-2 text-xl italic font-light text-white bg-neutral-800/30 rounded-r-lg">
              &quot;Andare dal parrucchiere senza fare il mantenimento è come andare dal dentista per una pulizia dei denti e poi smettere di lavarli a casa!&quot;
            </blockquote>
          </div>

          <div className="mt-12">
            <Link 
              href="/prenotazioni" 
              className="inline-block px-10 py-4 bg-white text-black uppercase tracking-widest font-bold text-sm rounded hover:bg-neutral-300 hover:rounded-full transition-all duration-300"
            >
              Prenota il tuo trattamento
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}