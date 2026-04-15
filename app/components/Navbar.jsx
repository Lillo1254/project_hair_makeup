'use client'

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logogbgr.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useRouter} from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const pathName = usePathname();

    const onUp = (e) => {
        if (pathName === "/") {
            e.preventDefault();
            window.scrollTo({ top: -10, behavior: "smooth" });
        }else{
            router.push("/");

        }
        setOpen(false);
    }

    const handleScrollOfferte = (E) => {
        if (pathName === "/" || pathName === "/#offerte") {
            E.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            const el = document.getElementById("offerte");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        setOpen(false);
        
    }

    return (
        <>
            <div className="flex justify-center sticky top-5 z-50">

                {/* ================= TOP BAR ================= */}
                <div className="bg_navi text-white px-3 py-0 flex justify-between items-center w-[95%] sm:w-[70%] rounded-xl">

                    
                        <button onClick={onUp} className="z-9999">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-15 w-auto rounded-l-xl cursor-pointer"
                                loading="eager"
                                priority
                            />
                        </button>
                    

                    <div className="text-end">
                        <button
                            onClick={() => setOpen(true)}
                            className="text-2xl z-50 mt-0 mr-2 flex w-full justify-between items-center "
                        >
                            ☰
                        </button>
                    </div>

                </div>

                {/* ================= OVERLAY ================= */}
                {open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40"
                    />
                )}

                {/* ================= DRAWER MENU ================= */}
                <div
                    className={`fixed top-0 left-0 h-full bg-neutral-500 text-black z-50 transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    w-full md:w-1/4`}
                >

                    {/* Header Menu */}
                    <div className="flex justify-between items-center px-6 py-4 border-b border-black/20">
                        <h2 className="uppercase tracking-widest font-medium">
                            Menu
                        </h2>

                        {/* Close X */}
                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-6 px-6 py-10 text-lg uppercase tracking-wide">

                        <Link
                            href="/"
                            className={` hover:opacity-70 transition text-center ${pathName === "/" ? "bg-white/70 opacity-80 rounded-md" : ""}`}
                            onClick={onUp}
                        >
                            Home
                        </Link>

                        <Link
                            href="/servicesPage"
                            className={` hover:opacity-70 transition text-center ${pathName.startsWith("/servicesPage") ? "bg-white/70 opacity-80 rounded-md" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            Servizi
                        </Link>

                        <Link
                            href="/galleryPage"
                            className={` hover:opacity-70 transition text-center ${pathName === "/galleryPage" ? "bg-white/70 opacity-80 rounded-md" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            Gallery
                        </Link>

                        <Link
                            href="/prenotazioni"
                            className={` hover:opacity-70 transition text-center ${pathName === "/prenotazioni" ? "bg-white/70 opacity-80 rounded-md" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            Prenota
                        </Link>

                        <Link
                            href="/contatti"
                            className={` hover:opacity-70 transition text-center ${pathName === "/contatti" ? "bg-white/70 opacity-80 rounded-md" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            Contatti
                        </Link>

                        <Link
                            href="/chi-siamo"
                            className={` hover:opacity-70 transition text-center ${pathName === "/chi-siamo" ? "bg-white/70 opacity-80 rounded-md" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            Chi Siamo
                        </Link>

                        <Link
                            href="/#offerte"
                            onClick={handleScrollOfferte}
                            className="text-center hover:opacity-70 transition"
                        >
                            scopri di più
                        </Link>
                    </nav>

                    {/* Admin link */}
                    <div className="flex items-end px-6 py-4">
                        <Link
                            href="/admin"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-15 w-auto rounded-l-xl invert"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
