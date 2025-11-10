import styles from "./home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'; // Legg til denne importen

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Video seksjon */}
      <section className={styles.videoSection}>
        <video
          className={styles.fullWidthVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/may-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={styles.introSection}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.sosialLinks}>
              <a
                href="https://www.linkedin.com/in/cecilie-monsen-b471662b7"
                className={styles.socialLink}
              >
                <img src="/image/linkedin-icon.png" alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/ceciliemarim/"
                className={styles.socialLink}
              >
                <img src="/image/instagram-icon.png" alt="Instagram" />
              </a>
              <a
                href="mailto:ceciliemarimonse@gmail.com?subject=Henvendelse fra portfolio&body=Hei Cecilie,"
                className={styles.socialLink}
              >
                <img src="/image/email-icon.png" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tre kolonner seksjon */}
      <section className={styles.infoSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  <Link to="/web">Web</Link>
                </h3>
                <p className={styles.infoText}>
                  Jeg har utdanning innen frontend-utvikling og elsker å
                  kombinere funksjon og estetikk.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  <Link to="/Photo/vietnamBilder">Visuelle Øyeblikk</Link>
                </h3>
                <p className={styles.infoText}>
                  Jeg liker å fange lyset slik det fanger – følelsene,
                  stemningen og de små øyeblikkene som endrer seg med årstidene.
                  Fra høstens varme toner til vinterens ro og sommerens myke
                  glød.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  <Link to="/Kontakt">Kontakt Meg</Link>
                </h3>
                <p className={styles.infoText}>
                  Jeg er alltid åpen for nye samarbeid og kreative prosjekter.
                  Har du et prosjekt du tror jeg vil passe til, eller ønsker å
                  jobbe sammen — ta gjerne kontakt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilde med tekst seksjon */}
      <section className={styles.imageTextSection}>
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className={styles.imageContainer}>
                <img
                  src="/image/vietnam/001-vietnam.jpg"
                  alt="Kontor med mange papirer og mapper og en sykkel foran"
                  className={`img-fluid ${styles.portfolioImage}`}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>
                  Alt starter med en idé
                </h3>
                <p className={styles.textContent}>
                  Jeg liker å utforske hvordan en idé kan vokse til noe visuelt
                  og meningsfullt. Gjennom lys, farger og form skaper jeg
                  uttrykk som formidler en følelse. For meg handler det om å
                  kombinere det estetiske med det funksjonelle å skape
                  opplevelser som både inspirerer og føles ekte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
