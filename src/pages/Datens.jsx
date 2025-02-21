import React from "react";
import Navbar from "../components/Navbar";

const Datens = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto pt-28 md:pt-44">
        <h1 className="text-2xl md:text-5xl font-bold pb-2 md:pb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
          Datenschutzerklärung
        </h1>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            1. Allgemeine Hinweise
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Die G&G Fugentechnik GmbH (nachfolgend „wir“ oder „uns“) nimmt den
            Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            2. Verantwortliche Stelle
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:
          </p>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold md:text-xl">
              G&G Fugentechnik Gesellschaft mit beschränkter Haftung
            </h3>
            <p className="text-sm md:text-base">Südendstraße 7/1</p>
            <p className="text-sm md:text-base">76709 Kronau</p>
            <p className="text-sm md:text-base">Deutschland</p>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-sm md:text-base">
                <span className="font-semibold">Geschäftsführer:</span> Mehmet
                Gök
              </p>
              <p className="text-sm md:text-base">
                <span className="font-semibold">USt-IdNr.:</span> DE298681135
              </p>
              <p className="text-sm font-semibold md:text-base">
              Amtsgericht Mannheim HRB 721024
              </p>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            3. Kontakt
          </h2>

          <p className="text-sm md:text-base">
            Telefon:{" "}
            <a
              href="tel:+4972535091339"
              className="text-[#02C5DF] hover:text-[#008FC7] transition-colors"
            >
              +49 (0)7253 5091 339
            </a>
          </p>
          <p className="text-sm md:text-base">
            Fax:{" "}
            <a
              href="tel:+4972535091340"
              className="text-[#02C5DF] hover:text-[#008FC7] transition-colors"
            >
              +49 (0)7253 5091 340
            </a>
          </p>
          <p className="text-sm md:text-base">
            E-Mail:{" "}
            <a
              href="mailto:info@gundg-fugentechnik.de"
              className="text-[#02C5DF] hover:text-[#008FC7] transition-colors"
            >
              info@gundg-fugentechnik.de
            </a>
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            4. Erhebung und Speicherung personenbezogener Daten sowie Art und
            Zweck von deren Verwendung
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen
            einer Anfrage, Registrierung oder durch die Nutzung unserer Webseite
            freiwillig mitteilen. Die erhobenen Daten werden ausschließlich zu
            den folgenden Zwecken verwendet:
          </p>
          <ul className="pl-8 text-sm list-disc md:text-base">
            <li>
              Zur Bearbeitung von Anfragen und zur Kommunikation mit Ihnen
            </li>
            <li>Zur Abwicklung von Bestellungen oder Dienstleistungen</li>
            <li>Zur Verbesserung unserer Webseite und Dienstleistungen</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            5. Rechtsgrundlage der Verarbeitung
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der
            folgenden Rechtsgrundlagen:
          </p>
          <ul className="pl-8 text-sm list-disc md:text-base">
            <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
            <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung</li>
            <li>
              Art. 6 Abs. 1 lit. f DSGVO – Wahrung berechtigter Interessen
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            6. Weitergabe von Daten
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
            wenn dies zur Erfüllung der vertraglichen Pflichten erforderlich ist
            oder wir gesetzlich dazu verpflichtet sind. Wir geben keine Daten an
            Dritte zu kommerziellen oder nicht kommerziellen Zwecken weiter.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            7. Speicherung und Löschung von Daten
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Personenbezogene Daten werden nur so lange gespeichert, wie es für
            die Erfüllung der vertraglichen Zwecke oder gesetzlich
            vorgeschriebene Aufbewahrungsfristen erforderlich ist. Danach werden
            die Daten gelöscht.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            8. Ihre Rechte
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Sie haben das Recht, jederzeit Auskunft über die zu Ihrer Person
            gespeicherten Daten zu verlangen. Weiterhin können Sie die
            Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten verlangen. Darüber hinaus können Sie der
            Verarbeitung Ihrer Daten aus berechtigtem Interesse widersprechen.
            Sie haben auch das Recht, Ihre Einwilligung zur Datenverarbeitung
            jederzeit zu widerrufen. Für all diese Anliegen können Sie sich
            jederzeit an uns wenden.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            9. Sicherheit Ihrer Daten
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Wir treffen geeignete technische und organisatorische Maßnahmen, um
            Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder
            Missbrauch zu schützen.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            10. Verwendung von Cookies
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Diese Webseite verwendet Cookies, um die Benutzerfreundlichkeit zu
            erhöhen und um die Nutzung der Seite zu analysieren. Sie können die
            Verwendung von Cookies durch entsprechende Einstellungen in Ihrem
            Browser verhindern, dies kann jedoch zu Einschränkungen der
            Funktionalität unserer Webseite führen.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            11. Links zu anderen Websites
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Unsere Webseite enthält Links zu externen Webseiten Dritter. Wir
            haben keinen Einfluss auf die Inhalte und die Datenschutzpraktiken
            dieser Webseiten. Daher können wir keine Verantwortung für deren
            Datenschutzrichtlinien übernehmen.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            12. Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu
            ändern, um sie an geänderte rechtliche oder technische Bedingungen
            anzupassen. Die aktuelle Version wird auf dieser Webseite
            veröffentlicht.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            13. Design und Technische Umsetzung
          </h2>

          <p className="text-sm md:text-base">Macaree Werbeagentur</p>
          <p className="text-sm md:text-base">Hans-Thoma-Straße 34</p>
          <p className="text-sm md:text-base">68163 Mannheim</p>
          <p className="text-sm md:text-base">
            <a
              href="https://www.macaree.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#02C5DF] hover:text-[#008FC7] transition-colors"
            >
              www.macaree.de
            </a>
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-3 text-base font-semibold md:text-xl">
            14. Haftungsausschluss
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Die G&G Fugentechnik GmbH prüft und aktualisiert die Informationen
            in diesem Internetangebot regelmäßig. Trotz aller Sorgfalt können
            wir keine Haftung oder Garantie für die Aktualität, Richtigkeit und
            Vollständigkeit der bereitgestellten Informationen übernehmen. Für
            den Inhalt externer Webseiten, die durch Verknüpfungen erreicht
            werden, übernehmen wir keine Verantwortung.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Datens;
