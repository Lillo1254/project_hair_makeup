import Link from "next/link";


export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">


      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-[60vh] text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-neutral-700" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase">
            Contatti
          </h1>
          <p className="mt-4 text-gray-300">
            Siamo qui per te
          </p>
        </div>
      </section>

      {/* CONTENUTI */}
      <section className="px-6 py-20 bg_contact">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* INFO */}
          <div className="bg-black/80 backdrop-blur rounded-2xl p-8 space-y-8 shadow_contact">

            <h2 className="text-2xl tracking-widest uppercase">
              Informazioni
            </h2>

            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Indirizzo</p>
              <a
                href="https://www.google.com/maps?q=Via+Vincenzo+Monti,+6,+00010+Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Via Vincenzo Monti, 6 - Roma
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Telefono</p>
              <a href="tel:+390774366676" className="text-blue-600">
                +39 0774 366676
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Email</p>
              <a href="mailto:atestainsustyle@gmail.com" className="text-blue-600
                atestainsustyle@gmail.com">
              </a>
            </div>

          </div>

          {/* ORARI */}
          <div className=" bg-black/80 backdrop-blur rounded-2xl p-8 space-y-8 shadow_contact " >

            <h2 className="text-2xl tracking-widest uppercase">
              Orari
            </h2>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-gray-400 uppercase text-sm">Lun - Gio</span>
              <span className="text-right text-sm">
                09:00 – 13:00<br />
                15:00 – 18:30
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-gray-400 uppercase text-sm">Ven - Sab</span>
              <span className="text-right text-sm">
                09:00 – 18:30<br />
                <span className="text-gray-400 text-xs">continuato</span>
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400 uppercase text-sm">Domenica</span>
              <span className="text-red-400 text-sm">Chiuso</span>
            </div>

          </div>

        </div>

      </section>
      <div className="flex justify-center bg_contact py-5">
        <Link href="/calendarPage" className="bg-black/80 hover:scale-120 transition duration-300 hover:text-blue-400 text-white font-bold py-2 px-4 rounded mt-4 shadow_contact">
          PRENOTA ORA
        </Link>

      </div>
  

    </div>
  );
}