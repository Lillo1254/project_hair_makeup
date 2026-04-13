import ButtonNavigate from "@/app/components/buttons/buttonNavigate";
import ButtonBack from "@/app/components/buttons/buttonBack";
import serviziJson from "../servizi.json";

type Servizio = {
  servizio: string;
  prezzo: number | string;
  valuta: string;
  descrizione: string;
};

type CategorieJSON = {
  Uomo: Servizio[];
  Donna: Servizio[];
  Bimbi: Servizio[];
  "Make-up": Servizio[];
};

type ServiziJSON = {
  categorie: CategorieJSON;
};

type PageProps = {
  params: Promise<{
    categoria: string;
  }>;
};

// Mappa URL → chiavi JSON reali
const categorieMap: Record<string, keyof CategorieJSON> = {
  uomo: "Uomo",
  donna: "Donna",
  bambino: "Bimbi",
  bimbi: "Bimbi",
  "make-up": "Make-up",
  makeup: "Make-up",
};

export default async function PageCategoria({ params }: PageProps) {
  // FIX Next.js 15: params è una Promise
  const { categoria } = await params;

  const categoriaLower = categoria.toLowerCase();
  const categoriaJsonKey = categorieMap[categoriaLower];

  if (!categoriaJsonKey) {
    return (
      <div className="text-white p-10 text-center">
        <h2 className="text-3xl mb-4">Categoria non trovata</h2>
        <ButtonBack label="Torna indietro" className="bg-red-400 p-2 rounded-xl hover: hover:scale-105" />
      </div>
    );
  }

  const servizi = (serviziJson as ServiziJSON).categorie[categoriaJsonKey];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/60 to-neutral-700 text-white expanda">

      {/* HEADER */}
      <div className="text-center pt-15 relative overflow-hidden">
        <h3>I Servizi per {categoriaJsonKey}</h3>
        <h6>Scopri tutti i trattamenti disponibili</h6>
      </div>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light tracking-widest uppercase mb-6">
            Listino Servizi {categoriaJsonKey}
          </h2>
          <p className="text-gray-400">
            Trattamenti professionali pensati per te.
          </p>
        </div>
      </section>

      {/* LISTA SERVIZI */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">

          {servizi.map((servizio, index) => (
            <div
              key={index}
              className="border border-neutral-800 p-8 hover:border-white transition duration-300 shadow_price"
            >
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
          <ButtonBack label="Indietro" className="bg-red-400 p-2 rounded-xl hover: hover:scale-105" />
        </div>
      </section>

    </div>
  );
}
