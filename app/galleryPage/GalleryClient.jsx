"use client";

import { useState } from "react";
import ButtonBack from "../components/buttons/buttonBack";

export const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Gallery A Testa In Su",
  url: "https://atestainsu.vercel.app/galleryPage",
  description:
    "Foto e video del salone A Testa In Su: tagli, colori, barba e make-up.",
  image: [
    "https://atestainsu.vercel.app/gallery/img1.jpg",
    "https://atestainsu.vercel.app/gallery/img2.jpg",
    "https://atestainsu.vercel.app/gallery/img3.jpg",
  ],
  video: [
    "https://atestainsu.vercel.app/gallery/video1.mp4",
    "https://atestainsu.vercel.app/gallery/video2.mp4",
  ],
};

export default function GalleryClient({ gallery, videos }) {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />

      {/* LIGHTBOX FULLSCREEN */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            className="max-h-[95vh] max-w-[95vw] object-contain rounded-xl"
          />
        </div>
      )}

      <section className="p-4 bg-gradient-to-b from-black/70 to-neutral-700">
        <h1 className="text-2xl font-bold mb-4">Gallery Page</h1>

        {/* ===================== GALLERY IMMAGINI ===================== */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Gallery</h2>

        <div className="relative">
          <div
            className={`
              grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 
              gap-2 md:gap-4 overflow-hidden transition-all duration-500
              ${showAll ? "max-h-none" : "max-h-[90vh]"}
            `}
          >
            {gallery.length === 0 ? (
              <p>Al momento non è presente nessuna immagine in galleria</p>
            ) : (
              gallery.map((item, i) => (
                <div key={i} className="w-full overflow-hidden">
                  <img
                    src={item}
                    onClick={() => setLightboxImage(item)}
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-80 transition"
                  />
                </div>
              ))
            )}
          </div>

          {/* Bottone Mostra tutto */}
          {gallery.length > 12 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-neutral-900 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
              >
                {showAll ? "Mostra meno" : "Mostra tutto"}
              </button>
            </div>
          )}
        </div>

        {/* ===================== VIDEO ===================== */}
        <h2 className="text-xl font-semibold mt-10 mb-2 text-white">Videos</h2>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-6 md:px-10">
          {videos.length === 0 ? (
            <p>Nessun video</p>
          ) : (
            videos.map((item, i) => (
              <div key={i}>
                <video
                  src={item}
                  controls
                  className="
                    w-72 max-w-sm rounded-2xl aspect-9/16 object-cover
                    md:w-full md:max-w-none md:h-full md:rounded-xl video_shadow
                    landscape:aspect-video
                  "
                />
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center mt-4">
          <ButtonBack
            label="Indietro"
            className="bg-red-400 p-2 rounded-xl hover:scale-105"
          />
        </div>
      </section>
    </>
  );
}
