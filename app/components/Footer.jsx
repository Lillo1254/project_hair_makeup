import { Facebook, Images, Instagram, Layers2, MessageCircleMore, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-600  bg-gradient-to-b from-neutral-700 to-black text-white px-6 py-16">

            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4 text-center md:text-left">

                <div>
                    <h3 className="text-xl font-semibold tracking-widest uppercase">
                        A Testa in Su — Hair & Makeup Studio
                    </h3>
                    <p className="mt-4 text-gray-400 text-sm">
                        Eleganza, stile e cura del dettaglio.
                        Il tuo salone di fiducia per capelli e make-up.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm uppercase tracking-widest text-gray-300">
                        Contatti
                    </h4>
                    <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                        <li> <a
                            href="https://www.google.com/maps?q=Via+Vincenzo+Monti,+6,+00010+Roma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                        >
                            Via Vincenzo Monti, 6 - Roma
                        </a></li>
                        <li><a href="tel:+39  0774 366676" className="text-indigo-400">Tel: +39  0774 366676</a></li>
                        <li><a href="mailto:atestainsustyle@gmail.com" className="text-indigo-400">Email: atestainsustyle@gmail.com</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-sm text-center uppercase tracking-widest text-gray-300">
                        Link utili
                    </h4>

                    <ul className="mt-4 space-y-3 text-gray-400 text-sm ">

                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <Layers2 className="w-4 h-4" />
                            <Link href="/servicesPage">Servizi</Link>
                        </li>

                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <Images className="w-4 h-4" />
                            <Link href="/galleryPage">Galleria</Link>
                        </li>

                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <MessageCircleMore className="w-4 h-4" />
                            <Link href="/calendarPage">Prenotazioni</Link>

                        </li>
                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <a href="https://wa.me/3298492353?text=Salve%20ti%20contatto%20dal%20sito" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-700" > <MessageCircle size={20} /> Scrivimi su WhatsApp </a>
                        </li>

                    </ul>
                </div>

                <div>
                    <h4 className="text-sm text-center uppercase tracking-widest text-gray-300">
                        Seguici
                    </h4>
                    <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                        <li className="flex justify-center hover:text-white transition cursor-pointer text-white"><Instagram size={32} /></li>
                        <li className="flex justify-center hover:text-white transition cursor-pointer text-white"><Facebook size={32} /></li>
                        <li className="flex justify-center hover:text-white transition cursor-pointer"><Image src="/tiktokicon.svg" alt="Tiktok" width={32} height={32} className="invert" /></li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} A Testa in Su — Hair & Makeup Studio. Tutti i diritti riservati.
            </div>

        </footer>

    );
}