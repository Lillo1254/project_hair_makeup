import CardService from "./components/cards/CardService";
import CardGallery from "./components/cards/CardGallery";
import Header from "./components/Header";
import Link from "next/link";
import { headers } from "next/headers";
import CardOffers from "./components/cards/CardOffers";
import ButtonNavigate from "./components/buttons/buttonNavigate";



export default async function PageHome() {

  const h = await headers();
  const host = h.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const [imagesGallery, imagesOffers, videos] = await Promise.all([
    fetch(`${protocol}://${host}/api/media/gallery`, { cache: "no-store" }).then(r => r.json()),
    fetch(`${protocol}://${host}/api/media/offers`, { cache: "no-store" }).then(r => r.json()),
    fetch(`${protocol}://${host}/api/media/videos`, { cache: "no-store" }).then(r => r.json()),
  ])

  return (
    <div className="min-h-screen bg-black text-white relative">




      <Header title="A Testa in Su Parrucchiere" subtitle="Hair & Makeup Studio in Roma" />

      {/* === HERO ====== */}
      <section className="relative min-h-screen overflow-hidden ">


        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-700" />

        {/* Contenuto */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-evenly text-center px-6">

          <div className="flex flex-col items-center">

            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase py-15 playfair_text">
              Stile che parla di te per Uomo, Donna e Bambini
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              Taglio, colore e barba moderni e personalizzati a Guidonia Montecelio .
            </p>
          </div>

          <div className="mt-10">
           <ButtonNavigate label="Scopri i nostri servizi" href="/servicesPage" />

          </div>

        </div>
      </section>

      {/* ====== SERVIZI ====== */}
      <section className="px-6 py-20 bg-neutral-700">

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
{/* text seo friendly */}
      <section className="px-8 py-16 bg-neutral-700 text-white text-center">
  <div className="max-w-4xl mx-auto space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold uppercase playfair_text">
      Il Tuo Salone di Parrucchiere a Guidonia Montecelio
    </h2>
    <p className="text-md md:text-md leading-relaxed">
      Benvenuti nel nostro salone, il punto di riferimento per chi cerca tagli moderni, colore professionale e trattamenti personalizzati per uomo, donna e bambino. 
      Ogni servizio è pensato per esaltare il tuo stile unico e farti sentire al meglio in ogni occasione.
    </p>
    <p className="text-md md:text-md leading-relaxed">
      Situato a pochi passi dalla Tiburtina, il nostro salone combina creatività, professionalità e attenzione ai dettagli, offrendo anche servizi di make-up artist per eventi speciali o quotidiani. 
      La tua bellezza è la nostra passione.
    </p>
    <p className="text-md md:text-md leading-relaxed">
      Prenota il tuo appuntamento oggi stesso e scopri perché il nostro salone è il preferito a Guidonia Montecelio per taglio, colore, barba e make-up professionale. 
      Esperienza, qualità e stile ti aspettano in un ambiente accogliente e moderno.
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
      <section className="px-6 py-20 bg-neutral-700 ">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

        {imagesGallery.slice(0, 6).map((img: string, i: number) => (
            <CardGallery key={i} image={img} />
          ))} 
 
        </div>
      </section>
{/* text seo friendly */}
      <section className="px-8 py-16 bg-neutral-700 text-white text-center">
  <div className="max-w-4xl mx-auto space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold uppercase playfair_text">
      Bellezza, Stile e Cura dei Capelli a Guidonia Montecelio
    </h2>
    <p className="text-md md:text-md leading-relaxed">
      Scopri il nostro salone, il luogo ideale dove ogni taglio, colore e trattamento è studiato per valorizzare la tua unicità. 
      Offriamo servizi professionali per uomo, donna e bambino, con attenzione ai dettagli e alle ultime tendenze del mondo della bellezza.
    </p>
    <p className="text-md md:text-md leading-relaxed">
      Situati vicino alla Tiburtina, uniamo creatività e competenza per offrirti un’esperienza completa: dai tagli moderni alla colorazione personalizzata, fino al make-up professionale per ogni occasione. 
      Ogni cliente esce dal nostro salone sentendosi speciale.
    </p>
    <p className="text-md md:text-md leading-relaxed">
      La tua bellezza è la nostra missione. Prenota subito il tuo appuntamento e lasciati coccolare da professionisti esperti che trasformano la cura dei capelli in arte. 
      Guidonia Montecelio e la zona Tiburtina non hanno mai visto un salone come il nostro.
    </p>
    <a
      href="/prenotazioni"
      className="inline-block mt-4 px-8 py-3 text-sm uppercase rounded tracking-widest bg-white text-black hover:bg-neutral-200 hover:rounded-3xl transition-all duration-300"
    >
      Prenota Ora
    </a>
  </div>
</section>

      {/* ============= VIDEO ===========*/}
<section
  className="
    flex flex-col items-center justify-center
    min-h-screen py-8 bg-neutral-700 gap-6

    md:grid md:grid-cols-3 md:place-items-center
  "
>
  {videos.slice(0, 3).map((video: string, i: number) => (
    <video
      key={i}
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="
        w-72 max-w-sm
rounded-2xl
        aspect-9/16
        object-cover
        md:w-full
        md:max-w-none md:h-full md:rounded-xl video_shadow 

        landscape:aspect-video
      "
    />
  ))}
</section>

      

        {imagesOffers.length > 0 &&
        //text seo friendly
        <>
        <section className="px-8 py-16 bg-neutral-700 text-white text-center">
  <div className="max-w-4xl mx-auto space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold uppercase playfair_text">
      Offerte Esclusive per il Tuo Salone a Guidonia Montecelio
    </h2>
    <p className="text-md md:text-md leading-relaxed">
      Approfitta delle nostre promozioni speciali dedicate a uomini, donne e bambini. 
      Tagli, colori, trattamenti e servizi di make-up professionale a prezzi incredibili, pensati per valorizzare la tua bellezza senza compromessi. 
    </p>
    <p className="text-md md:text-md leading-relaxed">
      Il nostro salone, situato vicino alla Tiburtina a Guidonia Montecelio, unisce qualità, stile e professionalità. 
      Ogni servizio è studiato per offrirti un’esperienza unica, e le nostre offerte in corso rendono il momento perfetto per prenotare.
    </p>
    <p className="text-md md:text-md leading-relaxed">
      Scorri qui sotto e scopri l’immagine con tutte le promozioni attive. 
      Non perdere l’occasione di rinnovare il tuo look con i migliori professionisti della zona!
    </p>
    <a
      href="/prenotazioni"
      className="inline-block mt-4 px-8 py-3 text-sm uppercase rounded tracking-widest bg-white text-black hover:bg-neutral-200 hover:rounded-3xl transition-all duration-300"
    >
      Prenota Ora 
    </a>

  </div>
</section>
        
        <section className=" py-10 bg-neutral-700 w-full">
        <div className="">
        <CardOffers image={imagesOffers.at(0)} />
         </div>
        </section>
        </>
        } 
 
       
      



    </div>
  );
}
