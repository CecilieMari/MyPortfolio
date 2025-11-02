import styles from "./home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.introSection}>
        <div className="container-fluid">
          <div className="row min-vh-100">
            <div className="col-md-6 d-flex flex-column">
              <p className={styles.introText}>
                Jeg skaper visuelle opplevelser gjennom bilder og brukervennlig
                design.
              </p>
              <div className={styles.sosialLinks}>
                <a
                  href="https://www.linkedin.com/in/cecilie-mari-monsen"
                  className={styles.socialLink}
                >
                  <img src="/image/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com/ceciliemarimonsen"
                  className={styles.socialLink}
                >
                  <img src="/image/instagram-icon.png" alt="Instagram" />
                </a>
                <a
                  href="https://www.twitter.com/ceciliemarimonsen"
                  className={styles.socialLink}
                >
                  <img src="/image/email-icon.png" alt="Email" />
                </a>
              </div>
              <div className={styles.introWEB}>
                <h2>WEB</h2>
                <p>
                  Jeg har utdanning innen frontend-utvikling og elsker å
                  kombinere funksjon og estetikk.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.imageContainer}>
                <img
                  src="/image/018.jpg"
                  alt="Cecilie Mari Monsen"
                  className={`img-fluid ${styles.heroImage}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
