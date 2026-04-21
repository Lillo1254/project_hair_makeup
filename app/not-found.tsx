import LogoSvg from "./components/cards/CardsReview";
import ButtonNavigate from "./components/buttons/buttonNavigate";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between expanda">


      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">

        <LogoSvg width={500} height={500} />
        <h1 className="text-6xl font-light tracking-widest uppercase mb-6">
          404
        </h1>

        <p className="text-gray-300 max-w-lg">
          Siamo spiacenti, forse c`&apos;`è stato un errore di scrittura ma non
          troviamo la pagina da lei cercata.
        </p>

        <div className="mt-10">
          
            <ButtonNavigate label="Torna alla Home" href="/" />
          
        </div>

      </main>



    </div>
  );
}