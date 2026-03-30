import Image from "next/image";
import Link from "next/link";

export default function ChiSiamo() {
  const attrezzatura = "/pageChisiamo/attrezzOR.webP";
  const alterego = [
    "/pageChisiamo/alteregoAllVER.webp",
    "/pageChisiamo/alteregocassaOR.jpg",
    "/pageChisiamo/alteregolavOR.webP",
    "/pageChisiamo/alteregopiantOR.webp",
  ];
  const negozio = [
    "/pageChisiamo/vetrinaVer.webp",
    "/pageChisiamo/postdxVer.webp",
    "/pageChisiamo/postdoppsxVER.webp",
    "/pageChisiamo/lavaggVER.webp",
    "/pageChisiamo/fotocassa.jpg",
    "/pageChisiamo/entrataVer.webp",
  ];
  const selective = "/pageChisiamo/selectivelavVert.webp";

  return (
    <div className="bg-gradient-to-b from-black via-neutral-900 to-neutral-700 text-white">

      {/* HERO */}
      <section className="min-h-[40vh] flex flex-col justify-center items-center text-center px-6 ">
        <h1 className="text-4xl md:text-6xl uppercase tracking-widest mb-6 playfair_text">
          Chi Siamo
        </h1>
        <p className="max-w-2xl text-gray-300 text-lg">
          Un salone a Guidonia Montecelio dove stile, tecnica e passione si incontrano
          per creare un’esperienza autentica, pensata su misura per ogni cliente.
        </p>
      </section>

      {/* TRATTAMENTI */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-10 bg-neutral-700 rounded-xl shadow_price">
        <div className="space-y-4 text-center md:text-left ">
          <h2 className="text-3xl uppercase tracking-wider">Trattamenti</h2>
          <p className="text-gray-300 leading-relaxed">
            Offriamo trattamenti personalizzati per ogni tipo di capello, studiati per nutrire,
            rinforzare e valorizzare la chioma. Ogni servizio è costruito su misura per
            ottenere risultati visibili, duraturi e perfettamente in linea con il tuo stile.
          </p>
        </div>
        <Image
          src={alterego[1]}
          alt="Trattamenti capelli professionali Guidonia Montecelio"
          width={800}
          height={500}
          className="rounded-2xl mx-auto object-cover shadow_black"
        />
      </section>

      {/* PRODOTTI */}
      <section className="px-6 py-16 max-w-6xl mx-auto bg-neutral-700 rounded-xl mt-5 shadow_price">
        <h2 className="text-3xl uppercase text-center mb-10 tracking-wider">
          Prodotti Professionali
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
          <Image src={alterego[0]} alt="Prodotti professionali capelli" width={400} height={600} className="rounded-2xl mx-auto shadow_black" />
          <p className="text-gray-300 text-center md:text-left leading-relaxed">
            Utilizziamo solo prodotti professionali di alta qualità, selezionati per garantire
            protezione, brillantezza e salute del capello. Ogni prodotto è scelto per
            mantenere nel tempo il risultato ottenuto in salone.
          </p>
          <Image src={selective} alt="Linea prodotti parrucchiere" width={400} height={600} className="rounded-2xl mx-auto shadow_black" />
        </div>
      </section>

      {/* POSTAZIONI */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center bg-neutral-700 rounded-xl mt-10 shadow_price">
        <Image src={negozio[2]} alt="Postazione parrucchiere moderna" width={400} height={700} className="rounded-2xl mx-auto shadow_black" />
        <Image src={negozio[1]} alt="Postazione styling capelli" width={400} height={700} className="rounded-2xl mx-auto shadow_black" />
      </section>

      {/* LAVAGGIO */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center bg-neutral-700 rounded-xl mt-10 shadow_price">
        <Image src={negozio[3]} alt="Zona lavaggio relax parrucchiere" width={400} height={700} className="rounded-2xl mx-auto shadow_black" />
        <p className="text-gray-300 text-center md:text-left leading-relaxed">
          La zona lavaggio è pensata per offrire un momento di relax completo. Le poltrone
          ergonomiche e l’ambiente curato trasformano ogni lavaggio in un’esperienza
          piacevole e rigenerante.
        </p>
      </section>

      {/* ATTREZZATURA */}
      <section className="px-6 py-16 text-center max-w-5xl mx-auto bg-neutral-700 rounded-xl mt-10 shadow_price">
        <Image src={attrezzatura} alt="Attrezzatura parrucchiere professionale" width={900} height={500} className="rounded-2xl mx-auto shadow_black" />
        <p className="mt-6 text-gray-300 leading-relaxed">
          Utilizziamo attrezzature professionali di ultima generazione per garantire precisione
          e qualità. Phon, forbici e strumenti selezionati assicurano risultati sempre
          impeccabili.
        </p>
      </section>

      {/* FACCIATA */}
      <section className="px-6 py-16 max-w-6xl mx-auto bg-neutral-700 rounded-xl mt-10 shadow_price">
        <h2 className="text-3xl uppercase text-center mb-10 tracking-wider">
          Il Nostro Salone
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {negozio.slice(0, 3).map((img, i) => (
            <Image key={i} src={img} alt="Facciata salone parrucchiere Guidonia" width={400} height={600} className="rounded-2xl mx-auto shadow_black" />
          ))}
        </div>
        <p className="text-gray-300 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
          La facciata del nostro negozio rappresenta il primo contatto con il cliente: moderna,
          curata e accogliente, perfettamente integrata nel contesto di Guidonia Montecelio.
        </p>
      </section>

      {/* STORY */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl mb-4 uppercase tracking-wider">La Nostra Storia</h2>
        <p className="text-gray-300 leading-relaxed">
          Il salone nasce nel 2012 dalla passione di due ragazzi che, dopo esperienze nel
          centro di Roma, hanno deciso di creare uno spazio unico dedicato alla bellezza,
          unendo competenze, creatività e visione.
        </p>
      </section>

      {/* FILOSOFIA */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl mb-4 uppercase tracking-wider">Filosofia</h2>
        <p className="text-gray-300 leading-relaxed">
          Crediamo nel rapporto umano, nel`&apos;` ascolto e nella personalizzazione. Ogni cliente
          viene seguito con attenzione, con l`&apos;` obiettivo di valorizzare al massimo ogni tipo
          di capello e creare un legame di fiducia duraturo.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <Link
          href="/prenotazioni"
          className="inline-block px-10 py-4 border border-white text-white uppercase tracking-widest hover:rounded-3xl hover:bg-white hover:text-black transition-all duration-300"
        >
          Prenota Ora
        </Link>
      </section>

    </div>
  );
}