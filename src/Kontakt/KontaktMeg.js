import styles from "./KontaktMeg.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function KontaktMeg() {
   return (
    <div className={styles.kontaktContainer}>
        <h2 className={styles.heading}>Kontakt Meg</h2>
        <p className={styles.introText}>
            Har du et prosjekt eller en idé du ønsker å diskutere? Ta gjerne kontakt!
        </p>
        <form className={styles.kontaktForm}>
            <div className="mb-3">
                <label htmlFor="navn" className="form-label">Navn</label>
                <input type="text" className="form-control" id="navn" placeholder="Ditt navn" />
            </div>
            <div className="mb-3">
                <label htmlFor="epost" className="form-label">E-post</label>
                <input type="email" className="form-control" id="epost" placeholder="Din e-postadresse" />
            </div>
            <div className="mb-3">
                <label htmlFor="melding" className="form-label">Melding</label>
                <textarea className="form-control" id="melding" rows="5" placeholder="Skriv din melding her..."></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>Send Melding</button>
        </form>
    </div>
    );
}
export default KontaktMeg;