import Style from "./Aboutme.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Aboutme() {
  return (
    <div className={Style.aboutmeContainer}>
      {/* Header med samme stil som andre sider */}
      <div className="magazine-header py-4 mb-4">
        <h2
          className="display-4 fw-light mb-3 lh-sm magazine-title"
          style={{
            letterSpacing: "0.02em",
            borderLeft: "6px solid #222",
            paddingLeft: "1rem",
            fontFamily: "Georgia, serif",
          }}
        >
          Om Meg
        </h2>
        <p
          className="lead text-secondary magazine-intro"
          style={{
            maxWidth: "700px",
            margin: "0.5rem 0 0 0",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          En kreativ sjel med lidenskap for design, utvikling og visuell
          historiefortelling. Utforsk min reise fra grafisk design og håndverk
          til frontend-utvikling.
        </p>
        <hr
          className="my-4"
          style={{
            borderTop: "2px solid #222",
            width: "80px",
            marginLeft: "0",
          }}
        />
      </div>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={Style.textContent}>
              <p>
                Jeg heter Cecilie, og er nyutdannet frontend-utvikler med
                bakgrunn innen grafisk design og håndverk. Jeg har alltid vært
                en kreativ sjel, fascinert av visuell kommunikasjon og prosessen
                med å bringe ideer til liv.
              </p>
              <p>
                Før jeg begynte å studere frontend, tok jeg et årsstudium i
                grafisk design, og jeg har også fagbrev som skredder innen kjole
                og drakt. Gjennom denne bakgrunnen har jeg lært verdien av
                struktur, presisjon og håndverk — egenskaper jeg tar med meg inn
                i det digitale arbeidet mitt.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={Style.imageContent}>
              <img
                src="/image/_MG_5613.jpg"
                alt="Speilbilde av en person og kamera i et vindu"
                className={`img-fluid ${Style.aboutImage}`}
              />
            </div>
          </div>
        </div>

        {/* Video og tekst seksjon */}
        <div className="row align-items-center" style={{ marginTop: "4rem" }}>
          <div className="col-md-6">
            <div className={Style.videoContent}>
              <video
                className={Style.aboutVideo}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video/soppvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-md-6">
            <div className={Style.textContent}>
              <h3 className={Style.sectionTitle}>Fotografi og inspirasjon</h3>
              <p>
                Utenfor design og kode finner jeg stor glede i fotografering og
                det å fange øyeblikk fra hverdagen. Jeg elsker å utforske
                naturens skiftende årstider, og hvordan lys, stemning og
                detaljer kan fortelle små historier. Ofte deler jeg bilder og
                korte videoer fra hverdagen eller reiser på Instagram — som en
                måte å kombinere min interesse for visuell historiefortelling og
                kreativ utforskning.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center" style={{ marginTop: "4rem" }}>
          <div className="col-md-6">
            <div className={Style.textContent}>
              <h3 className={Style.sectionTitle}>Design og utvikling</h3>
              <p>
                Jeg har gått ett år ved Den Skandinaviske Designhøyskole i
                Danmark, hvor jeg fordypet meg i designprosesser og
                konseptutvikling. Der lærte jeg hvordan man tenker helhetlig om
                design — fra idé og skisse til ferdig resultat — og hvordan man
                formidler følelser gjennom visuelle uttrykk.
              </p>
              <p>
                I dag kombinerer jeg den erfaringen med min tekniske kompetanse
                som frontend-utvikler, og jobber med å skape rene, funksjonelle
                og estetiske brukeropplevelser.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={Style.imageContent}>
              <img
                src="/image/bilde cv.jpg"
                alt="Sort-hvitt portrett av Cecilie Mari Monsen"
                className={`img-fluid ${Style.aboutImage}`}
              />
            </div>
          </div>
        </div>

        {/* Bilde og ikoner seksjon */}
        <div className="row align-items-center" style={{ marginTop: "4rem" }}>
          <div className="col-md-6">
            <div className={Style.imageContent}>
              <img
                src="/image/07.jpg"
                alt="To jenter som kjører motorsykkel gjennom Vietnam"
                className={`img-fluid ${Style.aboutImage}`}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={Style.iconContainer}>
              <div className={Style.iconRow}>
                <div className={Style.iconItem}>
                  <img
                    src="/image/instagram-icon.png"
                    alt="Instagram logo"
                    className={Style.skillIcon}
                  />
                  <a
                    href="https://www.instagram.com/ceciliemarim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.iconLink}
                  >
                    <h4 className={Style.iconTitle}>Instagram</h4>
                  </a>
                </div>
                <div className={Style.iconItem}>
                  <img
                    src="/image/email-icon.png"
                    alt="Email icon"
                    className={Style.skillIcon}
                  />
                  <a
                    href="mailto:ceciliemarimonse@gmail.com?subject=Henvendelse fra portfolio&body=Hei Cecilie,"
                    className={Style.iconLink}
                  >
                    <h4 className={Style.iconTitle}>Kontakt meg</h4>
                  </a>
                </div>
                <div className={Style.iconItem}>
                  <img
                    src="/image/linkedin-icon.png"
                    alt="LinkedIn logo"
                    className={Style.skillIcon}
                  />
                  <a
                    href="https://www.linkedin.com/in/cecilie-monsen-b471662b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Style.iconLink}
                  >
                    <h4 className={Style.iconTitle}>LinkedIn</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
