import React from "react";
import Navbar from "../components/Navbar";

const Impressum = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto pt-28 md:pt-44">
        <h1 className="text-2xl md:text-5xl font-bold pb-2 md:pb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
          Impressum
        </h1>

        <section className="mb-4">
          <h2 className="mb-4 font-semibold md:text-xl">Angaben gemäß § 5 TMG:</h2>
          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Herausgeber:
          </h3>
          <p className="text-sm md:text-base">
            G&G Fugentechnik Gesellschaft mit beschränkter Haftung
          </p>
          <p className="text-sm md:text-base">Südendstraße 7/1</p>
          <p className="text-sm md:text-base">76709 Kronau</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Vertreten durch:
          </h3>
          <p className="text-sm md:text-base">Geschäftsführer: Mehmet Gök</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Registereintrag:
          </h3>
          <p className="text-sm md:text-base">
            Eingetragen im Handelsregister.
          </p>
          <p className="text-sm md:text-base">
            Registergericht: Amtsgericht Mannheim
          </p>
          <p className="text-sm md:text-base">Registernummer: HRB 721024</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
          </h3>
          <p className="text-sm md:text-base">DE298681135</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-base font-semibold md:text-xl">Kontakt:</h3>
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
          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          </h3>
          <p className="text-sm md:text-base">Mehmet Gök</p>
          <p className="text-sm md:text-base">Südendstraße 7/1</p>
          <p className="text-sm md:text-base">76709 Kronau</p>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Design und technische Umsetzung:
          </h3>
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
          <h2 className="mb-4 font-semibold md:text-xl">
            Haftungsausschluss (Disclaimer)
          </h2>

          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Haftung für Inhalte
          </h3>
          <p className="mb-4 text-sm md:text-base">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Haftung für Links
          </h3>
          <p className="mb-4 text-sm md:text-base">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>

          <h3 className="mb-2 text-base font-semibold md:text-xl">
            Urheberrecht
          </h3>
          <p className="mb-4 text-sm md:text-base">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Impressum;
