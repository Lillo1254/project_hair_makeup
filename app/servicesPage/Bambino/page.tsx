import ButtonNavigate from "@/app/components/buttons/buttonNavigate";
import ButtonBack from "../../components/buttons/buttonBack";
import serviziJson from "../servizi.json";

export default function PageKids() {
  // Filtriamo solo i servizi per bambini
  const serviziBimbi = serviziJson.categorie.Bimbi;




  return (
    <>
    <div className="min-h-screen bg-black text-white bg_toghether">

      {/* HEADER */}
      <div className="text-center pt-15 relative overflow-hidden">
        <h3>I Servizi per Bambini</h3>
        <h6>Tagli divertenti, delicati e alla moda</h6>
      </div>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light tracking-widest uppercase mb-6">
            Listino Servizi Bimbi
          </h2>
          <p className="text-gray-400">
            Tagli e trattamenti studiati per i più piccoli, con prodotti delicati e un servizio professionale.
          </p>
        </div>
      </section>

      {/* LISTA SERVIZI BAMBINI */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">

          {serviziBimbi.map((servizio, index) => (
            <div
              key={index}
              className="border border-neutral-800 p-8 hover:border-white transition duration-300"
            >
              {/* IMMAGINE SEGNAPOSTO */}
              <img
                src={`https://picsum.photos/seed/kids${index}/600/300`}
                alt={servizio.servizio}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-light uppercase tracking-wide">
                  {servizio.servizio}
                </h3>
                <span className="text-lg font-semibold">
                  €{servizio.prezzo}
                </span>
              </div>

              <p className="text-gray-400 mb-6">
                {servizio.descrizione}
              </p>

              <ButtonNavigate label="PRENOTA" href="/prenotazioni" />
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">
          <ButtonBack label="Indietro" className="bg-red-500 p-2 rounded-xl" />
        </div>
      </section>

    </div>
    </>
  );
}