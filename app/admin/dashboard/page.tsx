"use client";

import { useState } from "react";

export default function DashboardAdmin() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [offerImages, setOfferImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    folder: "imagesGallery" | "imagesOffers" | "videoGallery",
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("folder", folder);

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.paths) {
        setState((prev) => [...prev, ...data.paths]);
        setMessage("Upload completato ✅");
      }
    } catch (err) {
      console.error(err);
      setMessage("Errore durante upload ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <h1 className="text-4xl font-light tracking-widest uppercase text-center">
          Dashboard Admin
        </h1>

        {/* GALLERY IMAGES */}
        <Section
          title="Carica Immagini Gallery"
          description="Salvate in public/imagesGallery"
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) =>
              handleUpload(e, "imagesGallery", setGalleryImages)
            }
            className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
          />

          <PreviewList items={galleryImages} />
        </Section>

        {/* OFFER IMAGES */}
        <Section
          title="Carica Immagini Offerte"
          description="Salvate in public/imagesOffers"
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) =>
              handleUpload(e, "imagesOffers", setOfferImages)
            }
            className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
          />

          <PreviewList items={offerImages} />
        </Section>

        {/* VIDEOS */}
        <Section
          title="Carica Video"
          description="Salvati in public/videoGallery"
        >
          <input
            type="file"
            multiple
            accept="video/*"
            onChange={(e) =>
              handleUpload(e, "videoGallery", setVideos)
            }
            className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
          />

          <PreviewList items={videos} />
        </Section>

        {message && (
          <div className="text-center text-sm text-gray-400">{message}</div>
        )}

        {loading && (
          <div className="text-center text-sm text-gray-500">
            Upload in corso...
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= COMPONENTI ================= */

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-800 p-8 rounded-xl space-y-4">
      <h2 className="text-2xl font-light uppercase tracking-wide">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
      {children}
    </div>
  );
}

function PreviewList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 space-y-2 text-sm text-gray-300">
      {items.map((path, index) => (
        <div key={index} className="truncate">
          {path}
        </div>
      ))}
    </div>
  );
}
