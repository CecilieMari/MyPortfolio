import styles from "./KontaktMeg.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function KontaktMeg() {
  return (
    <div className={styles.kontaktContainer}>
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
          Kontakt Meg
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
          Har du et prosjekt eller en idé du ønsker å diskutere? Jeg er alltid
          interessert i nye muligheter og kreative samarbeid. Ta gjerne kontakt,
          så kan vi utforske mulighetene sammen.
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

      {/* Kontaktinformasjon med ikoner og tekst */}
      <div className={styles.contactInfo}>
        <div className={styles.contactGrid}>
          {/* E-post kolonne */}
          <div className={styles.contactItem}>
            <a
              href="mailto:ceciliemarimonsen@gmail.com"
              className={styles.contactLink}
              title="Send e-post"
            >
              <img
                src="/image/email-icon.png"
                alt="E-post"
                className={styles.contactIcon}
              />
            </a>
            <div className={styles.contactText}>
              <h4>E-post</h4>
              <a href="mailto:ceciliemarimonsen@gmail.com">
                ceciliemarimonsen@gmail.com
              </a>
            </div>
          </div>

          {/* LinkedIn kolonne */}
          <div className={styles.contactItem}>
            <a
              href="https://www.linkedin.com/in/cecilie-monsen-b471662b7"
              className={styles.contactLink}
              title="LinkedIn profil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/linkedin-icon.png"
                alt="LinkedIn"
                className={styles.contactIcon}
              />
            </a>
            <div className={styles.contactText}>
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/cecilie-monsen-b471662b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cecilie Monsen
              </a>
            </div>
          </div>

          {/* Instagram kolonne */}
          <div className={styles.contactItem}>
            <a
              href="https://www.instagram.com/ceciliemarim/"
              className={styles.contactLink}
              title="Instagram profil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/instagram-icon.png"
                alt="Instagram"
                className={styles.contactIcon}
              />
            </a>
            <div className={styles.contactText}>
              <h4>Instagram</h4>
              <a
                href="https://www.instagram.com/ceciliemarim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ceciliemarim
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontaktMeg;
