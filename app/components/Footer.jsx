import { Facebook, Images, Instagram, Layers2, MessageCircleMore, MessageCircle, GlobeLock } from "lucide-react";
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
                        Contatti e Info
                    </h4>
                    <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                        <li> <a
                            href="https://www.google.com/maps?q=Via+Vincenzo+Monti,+63,+00012+Roma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400"
                        >
                            Via Vincenzo Monti, 63 - Roma
                        </a></li>
                        <li><a href="tel:+39  0774 366676" className="text-indigo-400">Tel: +39  0774 366676</a></li>
                        <li><a href="mailto:atestainsustyle@gmail.com" className="text-indigo-400">Email: atestainsustyle@gmail.com</a></li>
                        <li>C.F 11956641002</li>
                        <li>Mafe SNC</li>
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
                            <Link href="/prenotazioni">Prenotazioni</Link>

                        </li>
                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer"><GlobeLock size={32} /><Link href="/privacy-policy">Privacy-Policy</Link></li>
                        <li className="flex items-center justify-center gap-3 hover:text-white transition cursor-pointer">
                            <a
                                href="https://wa.me/3514808336?text=Salve%20A%20testa%20in%20Su,%20mi%20piacerebbe%20contattarvi%20per%20una%20prenotazione%20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700"
                            >
                                <MessageCircle size={20} />
                                <span className="whitespace-nowrap">Scrivimi su WhatsApp</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div>
                    <h4 className="text-sm text-center uppercase tracking-widest text-gray-300">
                        Seguici
                    </h4>
                    <ul className="mt-4 space-y-4 text-gray-400 text-sm">
                        <li className="flex justify-center hover:text-white transition cursor-pointer text-white"><a href="https://www.instagram.com/atestainsuhairmakeupstudio?igsh=MXd0dDE1bWtpOHdwdQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label="Vai al nostro profilo Instagram"><Instagram size={32} /></a></li>

                        <li className="flex justify-center hover:text-white transition cursor-pointer text-white"><a href="https://www.facebook.com/share/1AhzVgfUvg/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label="Vai al nostro profilo Facebook"><Facebook size={32} /></a></li>

                        <li className="flex justify-center hover:text-white transition cursor-pointer"><a href="https://www.tiktok.com/@a.testa.in.su" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label="Vai al nostro profilo TikTok"><Image src="/tiktokicon.svg" alt="Tiktok" width={32} height={32} className="invert" /></a></li>

                    </ul>
                </div>

            </div>
            {/* iframe maps */}
            <div className="flex justify-center items-center pt-3">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.598801756979!2d12.645466176564028!3d41.94447166125534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f7b6bc8fa7885%3A0xc8364bab2375d949!2sA%20Testa%20in%20su%20Parrucchieri!5e0!3m2!1sit!2sit!4v1774376603987!5m2!1sit!2sit"
                    className="rounded-full md:rounded-xl mt-3 w-80 md:w-full max-w-3xl h-100"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa Sede Studio atestainsu parrucchieri"
                ></iframe>
            </div>

            <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} A Testa in Su — Hair & Makeup Studio. Tutti i diritti riservati.
            </div>

        </footer>

    );
}