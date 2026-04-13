

export const privacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://atestainsu.vercel.app/privacy-policy",
  description:
    "Informativa sulla privacy del salone A Testa In Su secondo GDPR.",
};
export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen expanda">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }} />
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8 text-sm leading-relaxed">

        <h1 className="text-3xl md:text-4xl font-light uppercase tracking-widest">
          Privacy Policy
        </h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento dei dati personali è <strong>MAFE SNC</strong> di
            Lucia Federica e Piredda Emanuele, con sede legale in
            <strong> Via Vincenzo Monti, 63 – 00012 Guidonia (RM)</strong>,
            Codice Fiscale <strong>11956641002</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Tipologia di dati raccolti</h2>
          <p>
            Tramite il form di contatto/prenotazione vengono raccolti i seguenti dati personali:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Età</li>
            <li>Informazioni relative al servizio richiesto</li>
            <li>Data e orario della prenotazione</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Finalità del trattamento</h2>
          <p>
            I dati personali forniti dall’utente sono utilizzati esclusivamente per:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Gestione della richiesta di prenotazione</li>
            <li>Contatto con il cliente per conferma o eventuali modifiche dell’appuntamento</li>
            <li>Comunicazioni relative al servizio richiesto</li>
          </ul>
          <p className="mt-2">
            I dati non saranno utilizzati per finalità di marketing né ceduti a terzi.
          </p>
          <p>Il sito utilizza mappe di Google Maps, che potrebbero comportare la trasmissione di dati a Google per posizioni e cronologia.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Modalità di trattamento</h2>
          <p>
            Il trattamento dei dati avviene mediante strumenti informatici e telematici,
            nel rispetto delle misure di sicurezza previste dalla normativa vigente,
            al fine di garantire la riservatezza e l’integrità dei dati stessi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Utilizzo di servizi terzi (EmailJS)</h2>
          <p>
            Per l’invio delle richieste tramite il form viene utilizzato il servizio
            <strong> EmailJS</strong>, che consente l’inoltro dei dati direttamente alla casella email aziendale.
          </p>
          <p className="mt-2">
            I dati inseriti nel form non vengono salvati su database esterni al sito,
            ma vengono trasmessi via email e conservati esclusivamente nella casella
            di posta elettronica aziendale per il tempo necessario alla gestione
            della richiesta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Base giuridica del trattamento</h2>
          <p>
            Il trattamento dei dati personali si basa sul consenso esplicito
            dell’utente, espresso mediante l’accettazione della presente informativa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Conservazione dei dati</h2>
          <p>
            I dati personali saranno conservati per il tempo strettamente necessario
            alla gestione della richiesta e comunque non oltre i termini previsti
            dalla normativa vigente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Diritti dell’utente</h2>
          <p>
            L’utente ha il diritto di:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Accedere ai propri dati personali</li>
            <li>Richiederne la rettifica o la cancellazione</li>
            <li>Limitare o opporsi al trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
          </ul>
          <p className="mt-2">
            Le richieste possono essere inviate al titolare del trattamento tramite i contatti disponibili.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Modifiche alla presente informativa</h2>
          <p>
            Il titolare si riserva il diritto di modificare la presente Privacy Policy
            in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.
          </p>
        </section>

        <p className="text-gray-400 text-xs pt-6">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
        </p>

      </div>
    </div>
    </section>
  );
}