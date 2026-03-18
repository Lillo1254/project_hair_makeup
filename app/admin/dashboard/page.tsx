"use client";

import { useState, useEffect } from "react";
import ButtonLogout from "../../components/buttons/buttonLogout";
import DashboardSection from "../../components/dashboard/DashboardSection";
import PreviewGrid from "../../components/dashboard/PreviewGrid";
import MediaGrid from "../../components/dashboard/MediaGrid";
import Modal from "../../components/dashboard/Modal";
import { fetchMedia } from "../../function/basic";

export default function DashboardAdmin() {

  /* -------------------- STATE -------------------- */

  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [offerFiles, setOfferFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);

  const [galleryDB, setGalleryDB] = useState<string[]>([]);
  const [offerDB, setOfferDB] = useState<string[]>([]);
  const [videosDB, setVideosDB] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isVideosOpen, setIsVideosOpen] = useState(false);

  /* -------------------- FETCH DINAMICHE -------------------- */

  useEffect(() => {
    if (!isGalleryOpen) return;
    async function loadGallery() {
      const data = await fetchMedia("gallery");
      setGalleryDB(Array.isArray(data) ? data : []);
    }
    loadGallery();
  }, [isGalleryOpen]);

  useEffect(() => {
    if (!isOffersOpen) return;
    async function loadOffers() {
      const data = await fetchMedia("offers");
      setOfferDB(Array.isArray(data) ? data : []);
    }
    loadOffers();
  }, [isOffersOpen]);

  useEffect(() => {
    if (!isVideosOpen) return;
    async function loadVideos() {
      const data = await fetchMedia("videos");
      setVideosDB(Array.isArray(data) ? data : []);
    }
    loadVideos();
  }, [isVideosOpen]);

  /* -------------------- HANDLERS -------------------- */

const handleUploadPreview = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
) => {
  if (!e.target.files) return;

  const filesArray = Array.from(e.target.files);

  // Filtra solo MP4
  const mp4Files = filesArray.filter(file => file.type === "video/mp4");

  if (mp4Files.length < filesArray.length) {
    alert("Sono consentiti solo file MP4!");
  }

  setFiles(mp4Files);
};

  const saveToDB = async (
    folder: string,
    files: File[],
    setDB: any,
    clearFiles: any,
    reload: () => void
  ) => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(f => formData.append("files", f));
    formData.append("folder", folder);

    try {
      setLoading(true);
      const res = await fetch("/api/saveToDB", { method: "POST", body: formData });
      const data = await res.json();

      if (res.ok) {
        clearFiles([]);
        setMessage("Salvataggio completato ✅");
        reload(); // aggiorna la modal senza chiuderla
      }
    } catch {
      setMessage("Errore salvataggio ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteFile = async (path: string, setDB: any) => {
    try {
      await fetch("/api/deleteMedia", {
        method: "DELETE",
        body: JSON.stringify({ path })
      });

      setDB((prev: any) => prev.filter((p: any) => p !== path));
    } catch {
      setMessage("Errore cancellazione ❌");
    }
  };

  /* -------------------- RENDER -------------------- */

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        <h1 className="text-4xl font-light tracking-widest uppercase text-center">
          Dashboard Admin
        </h1>

        {/* -------------------- GALLERY -------------------- */}
        <DashboardSection title="Gallery" description="Gestisci le immagini della gallery">
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="w-full py-4 border-2 border-neutral-700 rounded-xl hover:border-white transition-all text-gray-400 hover:text-white"
          >
            + Apri Gestione Gallery
          </button>

          <Modal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} title="Gestione Gallery">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={e => handleUploadPreview(e, setGalleryFiles)}
              className="w-full bg-neutral-800 p-3 rounded"
            />

            {galleryFiles.length > 0 && (
              <>
                <PreviewGrid files={galleryFiles} />
                <button
                  onClick={() =>
                    saveToDB("imagesGallery", galleryFiles, setGalleryDB, setGalleryFiles, async () => {
                      const data = await fetchMedia("gallery");
                      setGalleryDB(data);
                    })
                  }
                  className="mt-4 w-full bg-green-600 py-2 rounded"
                >
                  Salva Foto
                </button>
              </>
            )}

            <div className="mt-8 border-t border-neutral-800 pt-4">
              <MediaGrid items={galleryDB} onDelete={p => deleteFile(p, setGalleryDB)} />
            </div>
          </Modal>
        </DashboardSection>

        {/* -------------------- OFFERTE -------------------- */}
        <DashboardSection title="Offerte" description="Gestisci le promozioni">
          <button
            onClick={() => setIsOffersOpen(true)}
            className="w-full py-4 border-2 border-neutral-700 rounded-xl hover:border-white transition-all text-gray-400 hover:text-white"
          >
            + Apri Gestione Offerte
          </button>

          <Modal isOpen={isOffersOpen} onClose={() => setIsOffersOpen(false)} title="Gestione Offerte">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={e => handleUploadPreview(e, setOfferFiles)}
              className="w-full bg-neutral-800 p-3 rounded"
            />

            {offerFiles.length > 0 && (
              <>
                <PreviewGrid files={offerFiles} />
                <button
                  onClick={() =>
                    saveToDB("imagesOffers", offerFiles, setOfferDB, setOfferFiles, async () => {
                      const data = await fetchMedia("offers");
                      setOfferDB(data);
                    })
                  }
                  className="mt-4 w-full bg-green-600 py-2 rounded"
                >
                  Salva Offerte
                </button>
              </>
            )}

            <div className="mt-8 border-t border-neutral-800 pt-4">
              <MediaGrid items={offerDB} onDelete={p => deleteFile(p, setOfferDB)} />
            </div>
          </Modal>
        </DashboardSection>

        {/* -------------------- VIDEO -------------------- */}
        <DashboardSection title="Video" description="Gestisci i contenuti video">
          <button
            onClick={() => setIsVideosOpen(true)}
            className="w-full py-4 border-2 border-neutral-700 rounded-xl hover:border-white transition-all text-gray-400 hover:text-white"
          >
            + Apri Gestione Video
          </button>

          <Modal isOpen={isVideosOpen} onClose={() => setIsVideosOpen(false)} title="Gestione Video">
            <input
              type="file"
              multiple
              accept="video/mp4"
              onChange={e => handleUploadPreview(e, setVideoFiles)}
              className="w-full bg-neutral-800 p-3 rounded"
            />

            {videoFiles.length > 0 && (
              <>
                <PreviewGrid files={videoFiles} isVideo />
                <button
                  onClick={() =>
                    saveToDB("videoGallery", videoFiles, setVideosDB, setVideoFiles, async () => {
                      const data = await fetchMedia("videos");
                      setVideosDB(data);
                    })
                  }
                  className="mt-4 w-full bg-green-600 py-2 rounded"
                >
                  Salva Video
                </button>
              </>
            )}

            <div className="mt-8 border-t border-neutral-800 pt-4">
              <MediaGrid items={videosDB} onDelete={p => deleteFile(p, setVideosDB)} isVideo />
            </div>
          </Modal>
        </DashboardSection>

        {/* -------------------- NOTIFICHE -------------------- */}
        {message && (
          <div className="fixed bottom-5 right-5 bg-white text-black px-6 py-3 rounded-full shadow-lg z-[100]">
            {message}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-5">
      <ButtonLogout label="Logout" className="bottom-5 left-5 bg-red-500 p-3 rounded-xl text-zinc-300 font-bold " />

      </div>
    </div>
  );
}
