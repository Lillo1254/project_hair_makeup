"use client";

import { useState, useEffect } from "react";
import ButtonLogout from "../../components/buttons/buttonLogout";

export default function DashboardAdmin() {

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [offerFiles, setOfferFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);

  const [galleryDB, setGalleryDB] = useState<string[]>([]);
  const [offerDB, setOfferDB] = useState<string[]>([]);
  const [videosDB, setVideosDB] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/media")
      .then(res => res.json())
      .then(data => {
        setGalleryDB(Array.isArray(data.gallery) ? data.gallery : []);
        setOfferDB(Array.isArray(data.offers) ? data.offers : []);
        setVideosDB(Array.isArray(data.videos) ? data.videos : []);
      });
  }, []);

  const handleUploadPreview = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
  ) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const saveToDB = async (
    folder: "gallery" | "offers" | "videos",
    files: File[],
    setDB: React.Dispatch<React.SetStateAction<string[]>>,
    clearFiles: React.Dispatch<React.SetStateAction<File[]>>
  ) => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(f => formData.append("files", f));
    formData.append("folder", folder);

    try {
      setLoading(true);
      setMessage("");
      const res = await fetch("/api/saveToDB", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok && data.savedPaths) {
        setDB(prev => [...prev, ...data.savedPaths]);
        clearFiles([]);
        setMessage("Salvataggio completato ✅");
      } else {
        setMessage(data.error || "Errore salvataggio DB");
      }
    } catch {
      setMessage("Errore salvataggio DB ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteFile = async (
    path: string,
    setDB: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    try {
      await fetch("/api/deleteMedia", {
        method: "DELETE",
        body: JSON.stringify({ path }),
      });
      setDB(prev => prev.filter(p => p !== path));
    } catch {
      setMessage("Errore cancellazione ❌");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <h1 className="text-4xl font-light tracking-widest uppercase text-center">
          Dashboard Admin
        </h1>

        {/* GALLERY */}
        <Section title="Carica Immagini Gallery" description="Salvate in public/imagesGallery">
          <input
            type="file"
            multiple
            accept="image/png,image/jpeg,image/webp"
            onChange={e => handleUploadPreview(e, setGalleryFiles)}
            className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
          />

          {/* Preview upload */}
          {galleryFiles.length > 0 && <PreviewGrid files={galleryFiles} />}
          {galleryFiles.length > 0 && <SaveButton folder="gallery" files={galleryFiles} setDB={setGalleryDB} clearFiles={setGalleryFiles} saveToDB={saveToDB} />}

          {/* Preview DB */}
          {galleryDB.length > 0 && <ImageGrid items={galleryDB} onDelete={p => deleteFile(p, setGalleryDB)} />}
        </Section>

        {/* OFFERS */}
        <Section title="Carica Immagini Offerte" description="Salvate in public/imagesOffers">
          <input
            type="file"
            multiple
            accept="image/png,image/jpeg,image/webp"
            onChange={e => handleUploadPreview(e, setOfferFiles)}
            className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
          />

          {offerFiles.length > 0 && <PreviewGrid files={offerFiles} />}
          {offerFiles.length > 0 && <SaveButton folder="offers" files={offerFiles} setDB={setOfferDB} clearFiles={setOfferFiles} saveToDB={saveToDB} />}
          {offerDB.length > 0 && <ImageGrid items={offerDB} onDelete={p => deleteFile(p, setOfferDB)} />}
        </Section>

        {/* VIDEOS */}
        <Section title="Carica Video" description="Solo formato MP4">
          <input
            type="file"
            multiple
            accept="video/mp4"
            onChange={e => handleUploadPreview(e, setVideoFiles)}
            className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
          />

          {videoFiles.length > 0 && <PreviewVideoGrid files={videoFiles} />}
          {videoFiles.length > 0 && <SaveButton folder="videos" files={videoFiles} setDB={setVideosDB} clearFiles={setVideoFiles} saveToDB={saveToDB} />}
          {videosDB.length > 0 && <VideoGrid items={videosDB} onDelete={p => deleteFile(p, setVideosDB)} />}
        </Section>

        {loading && <div className="text-center text-sm text-gray-500">Upload in corso...</div>}
        {message && <div className="text-center text-sm text-gray-300">{message}</div>}

      </div>

      <div className="flex justify-center mt-10">
        <ButtonLogout label={"logout"} className={"bg-red-500 hover:bg-red-600 p-3 rounded-xl"} />
      </div>
    </div>
  );
}

/* ================= COMPONENTI ================= */

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-neutral-900 p-8 rounded-xl space-y-4">
      <h2 className="text-2xl font-light uppercase tracking-wide">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
      {children}
    </div>
  );
}

function PreviewGrid({ files }: { files: File[] }) {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {files.slice(0,6).map((file, idx) => {
        const url = URL.createObjectURL(file);
        return <div key={idx} className="relative">
          <img src={url} className="w-full h-40 object-cover rounded-lg border border-neutral-700" />
        </div>;
      })}
    </div>
  );
}

function PreviewVideoGrid({ files }: { files: File[] }) {
  return (
    <div className="mt-4 grid md:grid-cols-2 gap-6">
      {files.slice(0,6).map((file, idx) => {
        const url = URL.createObjectURL(file);
        return <div key={idx} className="relative">
          <video controls className="w-full rounded-lg border border-neutral-700">
            <source src={url} type="video/mp4" />
          </video>
        </div>;
      })}
    </div>
  );
}

function SaveButton({ folder, files, setDB, clearFiles, saveToDB }:
  { folder: "gallery"|"offers"|"videos"; files: File[]; setDB: React.Dispatch<React.SetStateAction<string[]>>; clearFiles: React.Dispatch<React.SetStateAction<File[]>>; saveToDB: any }) {
  return (
    <button
      className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      onClick={() => saveToDB(folder, files, setDB, clearFiles)}
    >
      Salva nel DB
    </button>
  );
}

function ImageGrid({ items, onDelete }: { items: string[]; onDelete: (path: string) => void }) {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.isArray(items) && items.slice(0,6).map((path, idx) => (
        <div key={idx} className="relative">
          <img src={path} alt="" className="w-full h-40 object-cover rounded-lg border border-neutral-700" />
          <button
            onClick={() => onDelete(path)}
            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 w-6 h-6 text-xs rounded-full flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

function VideoGrid({ items, onDelete }: { items: string[]; onDelete: (path: string) => void }) {
  return (
    <div className="mt-4 grid md:grid-cols-2 gap-6">
      {Array.isArray(items) && items.slice(0,6).map((path, idx) => (
        <div key={idx} className="relative">
          <video controls className="w-full rounded-lg border border-neutral-700">
            <source src={path} type="video/mp4" />
          </video>
          <button
            onClick={() => onDelete(path)}
            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 w-6 h-6 text-xs rounded-full flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}