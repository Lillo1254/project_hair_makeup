
import ButtonBack from "../components/buttons/buttonBack";
import ButtonNavigate from "../components/buttons/buttonNavigate";
import serviziJson from "./servizi.json";

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Servizi Parrucchiere",
  url: "https://atestainsu.vercel.app/servicesPage",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Taglio capelli uomo",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Taglio capelli donna e colore",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Taglio capelli bambino",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Barba uomo",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Make-up artist",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Trucco sposa",
      },
    },
  ],
};

export default function PageServices() {
  return (
    <section className="min-h-screen expanda">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
    <div className="min-h-screen bg-gradient-to-b from-black/60 via-neutral-700 to-neutral-700 text-white bg_toghether">

      {/* HEADER */}
      <div className="text-center pt-15 relative overflow-hidden">
        <h3>I Nostri Servizi</h3>
        <h6>Qualità, stile e professionalità</h6>
      </div>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light tracking-widest uppercase mb-6 ">
            Listino Servizi Uomo
          </h2>
          <p className="text-gray-400">
            Scopri tutti i trattamenti disponibili nel nostro salone.
          </p>
        </div>
      </section>

      {/* LISTA SERVIZI PER CATEGORIA */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">

          {Object.entries(serviziJson.categorie).map(([categoria, servizi]) => (
            <div key={categoria}>
              <h3 className="text-2xl uppercase font-light mb-6 border-b border-neutral-800 pb-2">
                {categoria}
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                {servizi.map((servizio, index) => (
                  <div
                    key={index}
                    className="border border-neutral-800 p-8 hover:border-white transition duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-light uppercase tracking-wide">
                        {servizio.servizio}
                      </h4>
                      <span className="text-lg font-semibold">
                        €{servizio.prezzo}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-6">
                      {servizio.descrizione}
                    </p>

                    <ButtonNavigate label="Prenota" href="/prenotazioni" />
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">
          <ButtonBack label="Indietro" className="bg-red-400 p-2 rounded-xl hover: hover:scale-105" />
        </div>
      </section>


    </div>
    </section>
  );
}