/* "use client"; */

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import ButtonBack from "../components/buttons/buttonBack";
import serviziJson from "./servizi.json";

export default function PageServices() {
  return (
    <div className="min-h-screen bg-black text-white bg_toghether">

<Navbar />
      {/* HEADER */}
      <div className="text-center pt-15 relative overflow-hidden">
        <h3>I Nostri Servizi</h3>
        <h6>Qualità, stile e professionalità</h6>
      </div>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light tracking-widest uppercase mb-6">
            Listino Servizi
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

                    <ButtonPrimary label="Prenota" />
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">
          <ButtonBack label="Indietro" className="bg-red-500 p-2 rounded-xl " />
        </div>
      </section>

      <Footer
        
       
      />
    </div>
  );
}