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
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "a testa in su",
    image: "https://atestainsustyle.vercel.app/logo.png",
    "@id": "https://atestainsustyle.vercel.app/#hairSalon",
    logo: "https://atestainsustyle.vercel.app/logogbgr.png",
    url: "https://atestainsustyle.vercel.app",
    telephone: "+390774366676", 
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
      latitude: 41.9444717,
      longitude: 12.6454662
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
        closes: "19:00"
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
      name: "Guidonia Montecelio, Roma e zona Tiburtina"
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