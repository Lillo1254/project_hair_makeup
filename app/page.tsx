import ButtonPrimary from "./components/buttons/ButtonPrimary";
import CardService from "./components/cards/CardService";
import CardGallery from "./components/cards/CardGallery";
import Header from "./components/Header";
import Link from "next/link";
import { headers } from "next/headers";
import CardOffers from "./components/cards/CardOffers";



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




      <Header title="A Testa in Su" subtitle="Hair & Makeup Studio" />

      {/* === HERO ====== */}
      <section className="relative min-h-screen overflow-hidden">


        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-700" />

        {/* Contenuto */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-evenly text-center px-6">

          <div className="flex flex-col items-center">

            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase py-15">
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
          <Link href="/servicesPage" className="text-4xl md:text-5xl font-light tracking-widest uppercase text-center p-2 bg-black rounded-xl">

            I Nostri Servizi

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

      {/* ============ GALLERIA ================ */}
      <section className="px-6 py-20 bg-neutral-700 ">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        {imagesGallery.map((img, i) => (
            <CardGallery key={i} image={img} />
          ))} 
 
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
  {videos.slice(0, 3).map((video, i) => (
    <video
      key={i}
      src={video}
      autoPlay
      muted
      loop
      playsInline
      className="
        w-full max-w-sm

        aspect-9/16
        object-cover

        md:max-w-none md:w-96 md:h-full md:rounded-xl video_shadow 

        landscape:aspect-video
      "
    />
  ))}
</section>

      

        {imagesOffers.length > 0 &&
        <section className=" py-10 bg-neutral-700 w-full">
        <div className="">
        <CardOffers image={imagesOffers.at(0)} />
         </div>
        </section>
        } 
 
       
      



    </div>
  );
}
