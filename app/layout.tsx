// app/layout.tsx
import  Console  from './consoleLog';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  metadataBase: new URL("https://atestainsu.vercel.app"),
  title: "Parrucchiere Setteville Guidonia Montecelio Tiburtina | A Testa In Su",
  description:
    "Parrucchiere a Setteville Guidonia Montecelio. Taglio, colore, barba e make-up per uomo, donna e bambino. Prenota ora da A Testa In Su.",
  keywords:
    "Parrucchiere Guidonia, Parrucchiere Roma, Parrucchiere uomo, Parrucchiere donna, Parrucchiere bambino, Make up artist Roma, Taglio capelli Guidonia, capelli Roma, capelli uomo, capelli bambino, capelli donna",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "A Testa in Su Parrucchiere",
    image: "https://atestainsu.vercel.app/logo.png",
    "@id": "https://atestainsu.vercel.app/#hairSalon",
    logo: "https://atestainsu.vercel.app/logogbgr.png",
    url: "https://atestainsu.vercel.app",
    telephone: ["+390774366676", "3514808336"],
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
      "https://www.instagram.com/atestainsuhairmakeupstudio",
      "https://www.facebook.com/share/1AhzVgfUvg/",
      "https://www.tiktok.com/@a.testa.in.su",
      "https://maps.app.goo.gl/bPypXeo37VnSRrj38"
    ],
    description:
      "Parrucchiere uomo, donna e bambino a Guidonia Montecelio vicino Tiburtina. Servizi di taglio, colore, barba e make-up professionale.",
    areaServed: [
      "Guidonia Montecelio",
      "Roma",
      "Tiburtina",
      "Setteville",
      "Tivoli",
      "Settecamini",
      "Marco Simone"
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taglio capelli uomo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taglio capelli donna e colore" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taglio capelli bambino" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Barba uomo" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Make-up artist" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trucco sposi" } }
    ],
    priceRange: "€€ (15€ - 40€)",
    hasMap: "https://maps.app.goo.gl/bPypXeo37VnSRrj38",
    knowsAbout: [
      "Taglio capelli uomo",
      "Taglio capelli donna",
      "Colore capelli",
      "Barba",
      "Make-up artist",
      "Trucco sposa"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "108"
    }
  };

/*   console.log(
  "%c Sviluppato da Alessandro Lucia alessandroluciaroma@gmail.com ",
  "color: #0f0; background: #000; font-size: 16px; padding: 8px 12px; border: 1px solid #0f0; border-radius: 6px;",
);

console.log(
  "%c Next.js • React • Node.js • MySQL • HTML5 • CSS3 • JavaScript ",
  "color: #0f0; background: #000; font-size: 16px; padding: 8px 12px; border: 1px solid #0f0; border-radius: 6px;",
);

console.log(
  "%c Deploy eseguito su Vercel ",
  "color: #fff; background: #333; padding: 4px 8px; border-radius: 4px; margin-top: 4px;"
); */

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <meta name="google-site-verification" content="H4GXNltP14JU3HCRR-G4OtiqboS9PWirwSUHwGM-unU" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Playfair:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>


      <body className="bg-gradient-to-b from-black to-neutral-700 ">
<Console />
        <Navbar />
        <main  >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
