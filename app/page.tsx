import CardService from "./components/cards/CardService";
import CardGallery from "./components/cards/CardGallery";
import Header from "./components/Header";
import Link from "next/link";
import { headers } from "next/headers";
import CardOffers from "./components/cards/CardOffers";
import ButtonNavigate from "./components/buttons/buttonNavigate";
import Observer from "./components/observers/Observer";
import LogoSvg from "./components/cards/CardsReview";


export const metadata = {
  title: "Parrucchiere Setteville Guidonia | A Testa In Su",
  description:
    "Parrucchiere a Setteville Guidonia Montecelio. Taglio uomo, donna e bambino, colore, barba e make-up professionale.",
  keywords:
    "Parrucchiere Guidonia, Parrucchiere Setteville, Parrucchiere Roma, Taglio capelli uomo, Taglio capelli donna, Colore capelli, Barba, Make-up artist",
  openGraph: {
    title: "Parrucchiere Setteville Guidonia | A Testa In Su",
    description:
      "Parrucchiere uomo, donna e bambino a Setteville Guidonia. Taglio, colore, barba e make-up professionale.",
    url: "https://atestainsu.vercel.app",
    images: [{ url: "/logo.png" }],
  },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "A Testa In Su Parrucchiere",
  url: "https://atestainsu.vercel.app",
  description:
    "Parrucchiere uomo, donna e bambino a Setteville Guidonia. Taglio, colore, barba e make-up professionale.",
  image: "https://atestainsu.vercel.app/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Vincenzo Monti 63",
    addressLocality: "Guidonia Montecelio",
    addressRegion: "RM",
    postalCode: "00012",
    addressCountry: "IT",
  },
  areaServed: ["Guidonia", "Setteville", "Roma", "Tivoli", "Tiburtina"],
  sameAs: [
    "https://www.instagram.com/atestainsuhairmakeupstudio",
    "https://www.facebook.com/share/1AhzVgfUvg/",
    "https://www.tiktok.com/@a.testa.in.su",
    "https://maps.app.goo.gl/bPypXeo37VnSRrj38",
  ],
};


export default async function PageHome() {

  const h = await headers();
  const host = h.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const [imagesGallery, imagesOffers, videos] = await Promise.all([
    fetch(`${protocol}://${host}/api/media/gallery`, { cache: "no-store" }).then(r => r.json()),
    fetch(`${protocol}://${host}/api/media/offers`, { cache: "no-store" }).then(r => r.json()),
    fetch(`${protocol}://${host}/api/media/videos`, { cache: "no-store" }).then(r => r.json()),
  ])


  

  const count = videos.length;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <div className="min-h-screen bg-black text-white relative expanda" >

<div className="grid place-items-center h-100px bg-red mt-25">
<LogoSvg width={700} height={700} />
</div>


        <Header title="A Testa in su Parrucchiere" subtitle="Hair & Makeup Studio Roma, Setteville Guidonia" />


        {/* ====== HERO ====== */}
        <section className="relative pb-15 overflow-hidden ">



          {<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-700" />}


          <div className="relative z-10 flex flex-col items-center justify-evenly text-center px-6">

            <div className="flex flex-col items-center">

              <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase pt-25 playfair_text">
                Stile che parla di te
              </h2>

              <p className="mt-6 text-gray-300 max-w-md">
                Cerchi un parrucchiere a Setteville Guidonia capace di valorizzare davvero il tuo stile?
                A Testa In Su è il salone dove taglio, colore e cura dei capelli diventano un’esperienza personale, pensata su misura per  donna, uomo e bambino.
              </p>
            </div>

            <div className="mt-10">
              <ButtonNavigate label="Scopri i nostri servizi" href="/servicesPage" />

            </div>

          </div>
        </section>

        {/* ====== SERVIZI ====== */}
        <section className="px-6 py-5 bg-neutral-700">

          <div className="flex justify-center  mb-10">
            <Link href="/servicesPage" className="playfair_text text-4xl md:text-5xl font-medium tracking-widest uppercase text-center p-2  rounded-xl">

              Per Ogni Stile

            </Link>
          </div>

          <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-4">

            <CardService
              title="Donna"
              description="Tagli personalizzati e colore su misura."
              image="/imghair/redwoman.webp"
            />

            <CardService
              title="Uomo"
              description="Stile moderno e classico curato nei dettagli."
              image="/imghair/man.webp"
            />

            <CardService
              title="Bambino"
              description="Stile moderno e classico curato nei dettagli."
              image="/imghair/childhair.webp"
            />

            <CardService
              title="Make-up"
              description="Eleganza naturale per ogni occasione."
              image="/imghair/makeup.webp"
            />

          </div>
        </section>

        <section className="px-8 py-16 bg-neutral-700 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6 opacity-0 transition-all duration-300 md:duration-1000 testo_fade">
            <h3 className="text-2xl md:text-2xl font-bold uppercase playfair_text">
              <strong> A Testa In Su </strong> <br />Il tuo parrucchiere di fiducia a Guidonia Montecelio
            </h3>
            <p className="text-md md:text-md leading-relaxed">
              Siamo a pochi passi dalla Tiburtina, nel cuore di Setteville, e ogni giorno accogliamo chi desidera un look moderno, curato e in linea con le ultime tendenze.
              Dal taglio uomo alla colorazione donna, dai servizi barba al make‑up professionale, ogni dettaglio è studiato per esaltare la tua unicità.
            </p>
            <h3 className="text-2xl md:text-2xl font-bold uppercase playfair_text">Creatività, tecnica e attenzione ai dettagli</h3>
            <p className="text-md md:text-md leading-relaxed">
              Il nostro salone è un punto di riferimento per chi cerca qualità e professionalità a Guidonia, Setteville, Tivoli e Roma Tiburtina.
              Realizziamo tagli personalizzati, colorazioni luminose e trattamenti mirati per capelli sani e brillanti. Per le occasioni speciali, offriamo servizi make‑up e trucco sposa che completano il tuo look con eleganza.
            </p>
            <h3 className="text-2xl md:text-2xl font-bold uppercase playfair_text">Un ambiente accogliente, moderno e dedicato a te</h3>
            <p className="text-md md:text-md leading-relaxed">
              Entrare da <em>A Testa In Su</em> significa sentirsi ascoltati, consigliati e coccolati.
              Che tu voglia rinnovare il tuo stile o mantenere il tuo look preferito, troverai professionisti pronti a guidarti con esperienza e passione.
            </p>
            <a
              href="/prenotazioni"
              className="inline-block mt-4 px-8 py-3 text-sm uppercase rounded tracking-widest bg-white text-black hover:bg-neutral-200 hover:rounded-3xl transition-all duration-300"
            >
              Prenota Ora
            </a>
          </div>
        </section>

        {/* ============ GALLERIA ================ */}
        {imagesGallery.length > 0 &&
          <section className="px-6 py-20 bg-neutral-700 ">
            <Link href="/galleryPage" className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

              {imagesGallery.slice(0, 6).map((img: string, i: number) => (
                <CardGallery key={i} image={img} />
              ))}

            </Link>
          </section>
        }


        <section className="px-8 py-16 bg-neutral-700 text-white text-center ">
          <div className="max-w-4xl mx-auto space-y-6 opacity-0 transition-all duration-300 md:duration-1000 testo_fade">
            <h2 className="text-3xl md:text-4xl font-bold uppercase playfair_text">
              Bellezza, Stile e Cura dei Capelli a Guidonia Montecelio
            </h2>
            <p className="text-md md:text-md leading-relaxed">
              Nel nostro salone ogni taglio, colore e trattamento nasce per valorizzare la tua unicità.
              Offriamo servizi professionali per uomo, donna e bambino, sempre in linea con le tendenze più attuali
            </p>
            <p className="text-md md:text-md leading-relaxed">
              A pochi passi dalla Tiburtina, siamo il punto di riferimento per chi cerca un parrucchiere esperto tra Guidonia, Tivoli e Roma.
              Creatività e tecnica si uniscono in un’esperienza completa: tagli moderni, colorazioni personalizzate e make‑up per ogni occasione
            </p>
            <p className="text-md md:text-md leading-relaxed">
              La tua bellezza è la nostra priorità. Prenota ora e lasciati guidare da professionisti che trasformano la cura dei capelli in un gesto d’arte
            </p>
            <a
              href="/prenotazioni"
              className="inline-block mt-4 px-8 py-3 text-sm uppercase rounded tracking-widest bg-white text-black hover:bg-neutral-200 hover:rounded-3xl transition-all duration-300"
            >
              Prenota Ora
            </a>
          </div>
        </section>

        {videos.length > 0 &&
          <section
            className={`
    min-h-screen py-8 bg-neutral-700 gap-6
    

    ${count === 1 ? " flex  justify-center items-center" : ""}
    ${count === 2 ? "grid grid-cols-1 place-items-center sm:grid-cols-2  md:px-15 " : ""}
    ${count >= 3 ? "grid grid-cols-1 md:grid-cols-3 place-items-center md:px-10" : ""}
  `}
          >
            {videos.slice(0, 3).map((video: string, i: number) => (
              <Link key={i} href="/galleryPage" className="
        relative w-72 md:w-full aspect-9/16 md:aspect-9/16
        rounded-xl overflow-hidden video_shadow
        group hover:scale-[1.05] transition-transform duration-300
      ">
                <video
                  key={i}
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
        absolute inset-0 w-full h-full object-cover
      "
                />
              </Link>
            ))}
          </section>
        }


            <section className="px-0 py-16 bg-neutral-700 text-white text-center relative" >
              <div className="max-w-4xl mx-auto space-y-6 px-8 opacity-0 transition-all duration-300 md:duration-1000 testo_fade">
                <h2 className="text-3xl md:text-4xl font-bold uppercase playfair_text">
                  Offerte e promozioni per rinnovare il tuo look
                </h2>
                <p className="text-md md:text-md leading-relaxed">
                  Scopri le nostre promozioni dedicate a uomo, donna e bambino: tagli, colori, trattamenti e make‑up a prezzi vantaggiosi, senza rinunciare alla qualità.
                  Siamo a Guidonia Montecelio, vicino alla Tiburtina: il momento perfetto per prenotare è adesso.
                </p>
                <p className="text-md md:text-md leading-relaxed">
                  A pochi passi dalla Tiburtina, il nostro salone a Guidonia Montecelio unisce qualità, stile e professionalità in ogni servizio.
                  Ogni trattamento è pensato per offrirti un’esperienza davvero unica, e le promozioni attive rendono questo il momento ideale per prenotare.
                </p>
                <p className="text-md md:text-md leading-relaxed">
                  Scorri qui sotto per vedere tutte le offerte disponibili.
                  Regalati un nuovo look con i professionisti più apprezzati della zona!
                </p>
                <Link
                  href="/prenotazioni"
                  className="inline-block mt-4 px-8 py-3 text-sm uppercase rounded tracking-widest bg-white text-black hover:bg-neutral-200 hover:rounded-3xl transition-all duration-300"
                  
                >
                  Prenota Ora
                </Link>

              </div>
            <div id="offerte" className="absolute h-px"></div>
        {imagesOffers.length > 0 ?
          <>

            <section className=" py-10 bg-neutral-700 w-full relative">
              <div className="">
                <Link href="/prenotazioni" className="justify-center flex">
                  <CardOffers image={imagesOffers.at(0)} />
                </Link>
              </div>
            </section>
          </> : <p>Nuove offerte ogni mese</p>
        }
        
        </section>






      </div>
      <Observer classSearch="prova_test" classAdd="!grayscale-0 !brightness-125 saturate-150" percent={0.4}/>
      <Observer classSearch="testo_fade" classAdd="opacity-100" percent={0.2}/>
      <Observer classSearch="testOffers" classAdd="!w-100 grayscale-0" percent={0.8}/>
      <Observer classSearch="test_services" classAdd="!grayscale-0 !brightness-125 saturate-150" percent={0.4}/>
      
    </>
  );
}
