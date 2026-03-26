"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonBack from "../components/buttons/buttonBack";
import { MessageCircle } from "lucide-react";
import servizi from "../servicesPage/servizi.json";

export default function CalendarPage() {
  const [gender, setGender] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [dateError, setDateError] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false); // ✅ AGGIUNTO

  const servicesByGender: Record<string, string[]> = {
    uomo: servizi.categorie.Uomo.map((servizio) => servizio.servizio),
    donna: servizi.categorie.Donna.map((servizio) => servizio.servizio),
    bambino: servizi.categorie.Bimbi.map((servizio) => servizio.servizio),
    makeup: servizi.categorie["Make-up"].map((servizio) => servizio.servizio),
  };
  console.log(servicesByGender);

  const validateDateTime = (value: string) => {
    if (!value) {
      setDateError("");
      return;
    }

    const selectedDate = new Date(value);
    const now = new Date();

    if (selectedDate < now) {
      setDateError("⚠️ Non puoi selezionare una data passata.");
      return;
    }

    if (selectedDate.getDay() === 0) {
      setDateError("⚠️ La domenica il salone è chiuso.");
      return;
    }

    const hour = selectedDate.getHours();

    if (hour < 9 || hour >= 19) {
      setDateError("⚠️ Prenotazioni disponibili dalle 09:00 alle 19:00.");
      return;
    }

    setDateError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;

    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim();
    const cognome = (form.elements.namedItem("cognome") as HTMLInputElement).value.trim();
    const genere = (form.elements.namedItem("genere") as HTMLSelectElement).value.trim();
    const eta = (form.elements.namedItem("eta") as HTMLInputElement).value.trim();
    const servicesRequest = (form.elements.namedItem("servicesRequest") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const servizio = (form.elements.namedItem("servizio") as HTMLSelectElement)?.value?.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    const phoneRegex = /^[0-9]{9,10}$/;

    if (
      !nome ||
      !cognome ||
      !genere ||
      !eta ||
      !servicesRequest ||
      !dateTime ||
      !phone ||
      !servizio ||
      !email
    ) {
      setError("⚠️ Tutti i campi sono obbligatori.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("⚠️ Inserisci un numero di telefono valido.");
      return;
    }

    if (parseInt(eta) <= 0) {
      setError("⚠️ Inserisci un'età valida.");
      return;
    }

    if (dateError) {
      setError("⚠️ Correggi la data o l'orario selezionato.");
      return;
    }

    // ✅ VALIDAZIONE PRIVACY
    if (!privacyAccepted) {
      setError("⚠️ Devi accettare la privacy policy.");
      return;
    }

    setLoading(true);

    const selectedDate = new Date(dateTime);

    const formattedDate = selectedDate.toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    emailjs
      .send(
        "service_9vn6p2w",
        "template_qphamv5",
        {
          nome,
          cognome,
          genere,
          eta,
          phone,
          servizio,
          servicesRequest,
          formattedDate,
          email,
        },
        "Eo0HWfVmhOzn2apD6"
      )
      .then(() => {
        alert("Prenotazione inviata con successo!");
        form.reset();
        setGender("");
        setService("");
        setDateTime("");
        setPrivacyAccepted(false); // ✅ RESET CHECKBOX
      })
      .catch((err) => {
        console.error(err);
        setError("Errore durante l'invio. Riprova più tardi.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black/60 to-neutral-700 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase">
              Prenota il tuo appuntamento
            </h1>
            <p className="mt-4 text-gray-400">
              Compila il form e riceverai conferma via email.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-neutral-800 p-8 rounded-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Nome" name="nome" />
              <Input label="Cognome" name="cognome" />

              <div>
                <label className="block mb-2 text-sm">Genere</label>
                <select
                  name="genere"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    setService("");
                  }}
                  className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
                >
                  <option value="">Seleziona</option>
                  <option value="uomo">Uomo</option>
                  <option value="donna">Donna</option>
                  <option value="bambino">Bambino</option>
                  <option value="makeup">Make-Up</option>
                </select>
              </div>

              <Input label="Età" name="eta" type="number" />
              <Input label="Descrizione servizio" name="servicesRequest" />

              <div>
                <label className="block mb-2 text-sm">Data e orario</label>
                <input
                  type="datetime-local"
                  name="dateTime"
                  value={dateTime}
                  min={new Date().toISOString().slice(0, 16)}
                  onChange={(e) => {
                    setDateTime(e.target.value);
                    validateDateTime(e.target.value);
                  }}
                  className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
                />
                {dateError && (
                  <p className="text-red-400 text-sm mt-2">{dateError}</p>
                )}
              </div>

              <Input label="Telefono (+39)" name="phone" type="tel" />
              <Input label="Email" name="email" type="email" />
            </div>

            {gender && (
              <div>
                <label className="block mb-2 text-sm">Tipologia Servizio</label>
                <div className="w-full max-w-[80vw] border border-neutral-700 rounded bg-neutral-900 relative">
                  <select
                    name="servizio"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-3 rounded bg-neutral-900"
                    size={Math.min(servicesByGender[gender].length, 8)} // mostra massimo 8 opzioni visibili
                  >
                    <option value="">Seleziona servizio</option>
                    {servicesByGender[gender].map((s, i) => (
                      <option key={i} value={s} className="border-t whitespace-normal p-3 wrap-break-words ">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* ✅ CHECKBOX PRIVACY */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1"
              />
              <p className="text-gray-300">
                Dichiaro di aver letto l{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="underline text-white"
                >
                  informativa sulla privacy
                </a>{" "}
                e acconsento al trattamento dei dati personali.
              </p>
            </div>

            {error && (
              <div className="bg-red-600/20 border border-red-500 text-red-400 p-3 rounded text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !!dateError || !privacyAccepted}
              className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition disabled:opacity-50"
            >
              {loading ? "Invio in corso..." : "Invia Prenotazione"}
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-2 mt-5">
          <a
            href="https://wa.me/3298492353?text=Salve%20mi%20fai%20schifo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-green-600 hover:text-green-700"
            aria-label="Contatto whatsapp"
          >
            <MessageCircle size={20} /> oppure Scrivici su WA
          </a>

          <ButtonBack label="Indietro" className="bg-red-400 mt-10 p-3 rounded-xl hover:bg-red-500 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

/* COMPONENTE INPUT RIUTILIZZABILE */
function Input({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full bg-neutral-900 border border-neutral-700 p-3 rounded"
      />
    </div>
  );
}