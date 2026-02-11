import { Facebook, Images, Instagram, Layers2, MessageCircleMore } from "lucide-react";

export default function Footer({ name, address }) {
    return (
        <footer className="border-t border-neutral-600  bg-gradient-to-b from-neutral-700 to-black text-white px-6 py-16">

            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4 text-center md:text-left">

                <div>
                    <h3 className="text-xl font-semibold tracking-widest uppercase">
                        {name}
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
                        <li>{address}</li>
                        <li><a href="tel:+39 000 000 0000" className="text-indigo-400">Tel: +39 000 000 0000</a></li>
                        <li><a href="mailto:atestainsu@gmail.com" className="text-indigo-400">Email: info@atestainsu.it</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-sm text-center uppercase tracking-widest text-gray-300">
                        Link utili
                    </h4>

                    <ul className="mt-4 space-y-3 text-gray-400 text-sm ">

                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <Layers2 className="w-4 h-4" />
                            <span>Servizi</span>
                        </li>

                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <Images className="w-4 h-4" />
                            <span>Gallery</span>
                        </li>

                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <MessageCircleMore className="w-4 h-4" />
                            <span>Prenotazioni</span>
                        </li>

                    </ul>
                </div>

                <div>
                    <h4 className="text-sm text-center uppercase tracking-widest text-gray-300">
                        Seguici
                    </h4>
                    <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                        <li className="flex justify-center hover:text-white transition cursor-pointer"><Instagram size={32} /></li>
                        <li className="flex justify-center hover:text-white transition cursor-pointer"><Facebook size={32} /></li>
                        <li className="flex justify-center hover:text-white transition cursor-pointer">TikTok</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} {name}. Tutti i diritti riservati.
            </div>

        </footer>

    );
}