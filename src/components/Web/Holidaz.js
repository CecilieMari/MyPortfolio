import styles from "./Web.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Holidaz() {
  return (
    <div className={styles.webContainer}>
      {/* Header med samme stil som høstTur */}
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
          Holidaze
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
          Holidaze er en moderne plattform for bestilling av overnatting, bygget
          med React og Noroff Holidaze API. Nettsiden lar brukere bla gjennom og
          booke overnattingssteder, mens registrerte verter kan opprette,
          redigere og administrere sine egne oppføringer. Målet med prosjektet
          var å utvikle en fullverdig frontend-applikasjon som integrerer
          brukerautentisering, dynamiske API-data og responsivt design.
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

      {/* Video seksjon - samme som home.js */}
      <section className={styles.videoSection}>
        <video className={styles.fullWidthVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/holidaz.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Linker på rad */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className={styles.projectLinks}>
              <div className={styles.linkItem}>
                <span className={styles.linkLabel}>Github: </span>
                <a
                  href="https://github.com/CecilieMari/Project-Exam-2.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  https://github.com/CecilieMari/Project-Exam-2.git
                </a>
              </div>
              <div className={styles.linkItem}>
                <span className={styles.linkLabel}>Live demo: </span>
                <a
                  href="https://project-exam-holidaze.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  https://project-exam-holidaze.netlify.app/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Holidaz;
