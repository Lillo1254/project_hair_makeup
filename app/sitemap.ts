import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atestainsu.vercel.app";

  return [
    { url: `${baseUrl}/`, priority: 1 , lastModified: new Date() },
    { url: `${baseUrl}/chi-siamo`, priority: 0.7 , lastModified: new Date() },
    { url: `${baseUrl}/contatti`, priority: 0.8 , lastModified: new Date() },
    { url: `${baseUrl}/servicesPage`, priority: 0.8 , lastModified: new Date() },
    { url: `${baseUrl}/galleryPage`, priority: 0.5 , lastModified: new Date() },
    { url: `${baseUrl}/prenotazioni`, priority: 0.9 , lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, priority: 0.2 , lastModified: new Date() },

    
    { url: `${baseUrl}/servicesPage/uomo`, priority: 0.6 , lastModified: new Date() },
    { url: `${baseUrl}/servicesPage/donna`, priority: 0.8 , lastModified: new Date() },
    { url: `${baseUrl}/servicesPage/bambino`, priority: 0.7 , lastModified: new Date() },
    { url: `${baseUrl}/servicesPage/make-up`, priority: 0.6 , lastModified: new Date() },
  ];
}