import Style from "./Photo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Photo() {
  return (
    <div className={Style.photoContainer}>
      <h1>Visuelle Øyeblikk</h1>
      <div className="container-fluid">
        <div className="row">
          {/* Venstre side - to mindre bilder */}
          <div className="col-md-6">
            <div className={Style.leftColumn}>
              <div className={Style.smallPhotoItem}>
                <img
                  src="/image/silje.jpg"
                  alt="Høst bilde 1"
                  className={`img-fluid ${Style.smallPhoto}`}
                />
              </div>
              <div className={Style.smallPhotoItem}>
                <img
                  src="/image/house001.jpg"
                  alt="Høst bilde 2"
                  className={`img-fluid ${Style.smallPhoto}`}
                />
              </div>
              <div className={Style.photoCaption}>
                <a href="/link/to/host-tur">Høst tur</a>
              </div>
            </div>
          </div>
          {/* Høyre side - stort bilde */}
          <div className="col-md-6">
            <div className={Style.largePhotoItem}>
              <img
                src="/image/018.jpg"
                alt="Stort høst landskap"
                className={`img-fluid ${Style.largePhoto}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
