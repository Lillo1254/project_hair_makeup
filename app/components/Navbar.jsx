'use client'

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logogbgr.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    /*     const [mounted, setMounted] = useState(false);
    
        useEffect(() => {
            setMounted(true);
        }, []);
    
        if (!mounted) return null; */
    const pathName = usePathname();
    const onUp = (e) => {
        if (pathName === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <>
            <div className="flex justify-center sticky top-5 z-50">

                {/* ================= TOP BAR ================= */}
                <div className="bg_navi text-white px-3 py-0 flex justify-between items-center w-[95%] sm:w-[70%] rounded-xl">

                    {pathName === "/" ? (
                        <button onClick={onUp} className="z-9999">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-15 w-auto rounded-l-xl cursor-pointer"
                            />
                        </button>
                    ) : (
                        <Link href="/" className="z-50">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-15 w-auto rounded-l-xl"
                                loading="eager"
                            />
                        </Link>
                    )}

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
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            href="/servicesPage"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            Servizi
                        </Link>

                        <Link
                            href="/galleryPage"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            Gallery
                        </Link>

                        <Link
                            href="/prenotazioni"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            Prenota
                        </Link>

                        <Link
                            href="/contatti"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            Contatti
                        </Link>

                        <Link
                            href="/chi-siamo"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            Chi Siamo
                        </Link>

                        <Link
                            href="/#offerte"
                            className="text-left hover:opacity-70 transition"
                            onClick={() => setOpen(false)}
                        >
                            scopri di piu
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
