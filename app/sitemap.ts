export default function sitemap() {
  const baseUrl = "https://atestainsu.vercel.app";

  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/chi-siamo` },
    { url: `${baseUrl}/contatti` },
    { url: `${baseUrl}/servicesPage` },
    { url: `${baseUrl}/galleryPage` },
    { url: `${baseUrl}/prenotazioni` },
    { url: `${baseUrl}/privacy-policy` },

    // dinamiche
    { url: `${baseUrl}/servicesPage/uomo` },
    { url: `${baseUrl}/servicesPage/donna` },
    { url: `${baseUrl}/servicesPage/bambino` },
    { url: `${baseUrl}/servicesPage/make-up` },
  ];
}