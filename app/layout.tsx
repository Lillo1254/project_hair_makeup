import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-black">
      <Navbar />
      <main className="min-h-screen">

        {children}
      </main>
      <Footer /> 
        </body>
    </html>
  )
}