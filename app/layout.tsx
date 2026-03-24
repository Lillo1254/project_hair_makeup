// app/layout.tsx
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: "Parrucchiere Guidonia | Uomo Donna Bambino | Make Up Artist | Parrucchiere Roma | Taglio Capelli | Guidonia Montecelio | Tiburtina",
  description:
    "Parrucchiere professionale a Guidonia Montecelio vicino Tiburtina. Taglio, colore, barba e make-up artist.",
  keywords:
    "Parrucchiere Guidonia, Parrucchiere Roma, Parrucchiere uomo, Parrucchiere donna, Parrucchiere bambino, Make up artist Roma, Taglio capelli Guidonia, capelli Roma, capelli uomo, capelli bambino, capelli donna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Nome Negozio",
    image: "https://tuosito.it/logo.jpg", // Cambia con URL logo reale
    "@id": "https://tuosito.it",
    url: "https://tuosito.it",
    telephone: "+390774366676", // Cambia con numero reale
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Vincenzo Monti 63",
      addressLocality: "Guidonia Montecelio",
      addressRegion: "RM",
      postalCode: "00012",
      addressCountry: "IT"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9978, // Coordinate reali
      longitude: 12.7324
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "18:30"
      }
    ],
    sameAs: [
      "https://instagram.com/tuoprofilo", // Cambia con profilo reale
      "https://facebook.com/tuoprofilo"   // Cambia con profilo reale
    ],
    description:
      "Parrucchiere uomo, donna e bambino a Guidonia Montecelio vicino Tiburtina. Servizi di taglio, colore, barba e make-up professionale.",
    areaServed: {
      "@type": "Place",
      name: "Guidonia Montecelio e zona Tiburtina"
    }
  };

  return (
    <html lang="it">
      <head>
 {/* JSON-LD per SEO locale */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet" />

        {/* font 2 */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet" />

        </head>
      <body className="bg-black">
        <Navbar />

       

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}