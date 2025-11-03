import Style from "./Aboutme.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Aboutme() {
  return (
    <div className={Style.aboutmeContainer}>
      <h1>
        <span>The Story</span>
      </h1>

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
                alt="Cecilie Mari Monsen"
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
            <div className={Style.videoTextContent}>
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
                  <h4 className={Style.iconTitle}>Design</h4>
                  <p className={Style.iconText}>
                    Grafisk design og visuell identitet
                  </p>
                </div>
                <div className={Style.iconItem}>
                  <img
                    src="/image/email-icon.png"
                    alt="Email icon"
                    className={Style.skillIcon}
                  />
                  <h4 className={Style.iconTitle}>Utvikling</h4>
                  <p className={Style.iconText}>
                    Frontend-utvikling og responsivt design
                  </p>
                </div>
                <div className={Style.iconItem}>
                  <img
                    src="/image/linkedin-icon.png"
                    alt="LinkedIn logo"
                    className={Style.skillIcon}
                  />
                  <h4 className={Style.iconTitle}>Fotografi</h4>
                  <p className={Style.iconText}>
                    Visuell historiefortelling og naturbilder
                  </p>
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
