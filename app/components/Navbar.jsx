'use client'

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center sticky top-10 z-50">

                {/* ================= TOP BAR ================= */}
                <div className=" bg-black text-white px-3 py-0 flex justify-between items-center w-[70%] rounded-xl">


                  <button
                        onClick={() => setOpen(true)}
                        className="text-2xl z-2 mt-0 flex w-[100%] justify-between items-center "
                    >
                    <Image
                        src={logo}
                        alt="Logo"
                        className=" h-15 w-auto rounded-l-xl"
                    />

                    {/* Hamburger */}
  
                        ☰
                    </button>

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

                    {/* Links Placeholder */}
                    <nav className="flex flex-col gap-6 px-6 py-10 text-lg uppercase tracking-wide">

                        <button className="text-left hover:opacity-70 transition">
                            Home
                        </button>

                        <button className="text-left hover:opacity-70 transition">
                            Servizi
                        </button>

                        <button className="text-left hover:opacity-70 transition">
                            Gallery
                        </button>

                        <button className="text-left hover:opacity-70 transition">
                            Prenota
                        </button>

                        <button className="text-left hover:opacity-70 transition">
                            Contatti
                        </button>

                    </nav>

                </div>
            </div>
        </>
    );
}
