'use client'
import { useEffect, useState } from "react";
import ButtonBack from "../components/buttons/buttonBack";
import { fetchMedia } from "../function/basic";
import CardGalleryPage from "../components/cards/CardGalleryPage";

export default function GalleryPage() {
    const [gallery, setGallery] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMedia() {
            try {
                const [galleryData, videosData] = await Promise.all([
                    fetchMedia("gallery"),
                    fetchMedia("videos"),
                ]);

                setGallery(galleryData);
                setVideos(videosData);
            } catch (error) {
                console.error("Errore caricamento media:", error);
            } finally {
                setLoading(false);
            }
        }

        loadMedia();
    }, []);

    return (
        <>
            <div className="p-4 bg-gradient-to-b from-black/70 to-neutral-700">
                <h1 className="text-2xl font-bold mb-4">Gallery Page</h1>



                {loading ? (
                    <p className="mt-4">Caricamento...</p>
                ) : (
                    <>
                        {/* GALLERY */}
                        <h2 className="text-xl font-semibold mt-6 mb-2">Gallery</h2>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            {gallery.length === 0 ? (
                                <p>Al momento non è presente nessun immagine in galleria</p>
                            ) : (
                                gallery.map((item, i) => (
                                    <div key={i} className="w-full overflow-hidden">
                                        <CardGalleryPage image={item} />
                                    </div>
                                ))
                            )}
                        </div>

                        {/* VIDEOS */}
                        <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Videos</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {videos.length === 0 ? (
                                <p>Nessun video</p>
                            ) : (
                                videos.map((item, i) => (
                                    <div key={i}>
                                        <video
                                            src={item}
                                            controls
                                            className=" rounded vertical_video"
                                        />

                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
                <div className="flex justify-center mt-4  ">
                    <ButtonBack label=" Indietro" className="bg-red-400 text-white p-3 rounded-xl font-medium" />
                </div>
            </div>
        </>
    );
}