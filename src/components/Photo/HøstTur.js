import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./masonry.css";
import { høstTurImages } from "../img/høstTur.image.js";

export default function HøstTur() {
  const [active, setActive] = useState(null);
  const open = (i) => setActive(i);
  const close = () => setActive(null);
  const next = () => setActive((i) => (i + 1) % høstTurImages.length);
  const prev = () =>
    setActive((i) => (i - 1 + høstTurImages.length) % høstTurImages.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
  };

  return (
    <div className="container py-4">
      {/* Header */}
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
          Høst tur
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
          Denne serien er en stille utforskning av naturen og årstidens
          stemning. Jeg har alltid elsket høsten — den dempede varmen,
          teksturene, luften som føles både rolig og levende. Hvert bilde, enten
          det er stillestående eller i bevegelse, fanger et flyktig øyeblikk:
          lys gjennom løv, pust i den kalde luften, et hint av forandring. Noen
          øyeblikk beveger seg — korte levende bilder, bare noen sekunder lange
          — men nok til å bære selve rytmen av høsten.
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

      {/* Masonry gallery */}
      <motion.div
        className="masonry"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {høstTurImages.map((img, i) => (
          <motion.figure
            key={i}
            className={`img-card ${
              img.size ? `size-${img.size.toLowerCase()}` : ""
            }`}
            variants={itemVariants}
            whileTap={{ scale: 0.99 }}
            onClick={() => open(i)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </motion.figure>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && høstTurImages[active] && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="lightbox-content"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={høstTurImages[active].src}
                alt={høstTurImages[active].alt}
                className="modal-image"
              />
              <div className="lightbox-ui">
                <button
                  className="btn btn-dark rounded-pill px-3"
                  onClick={prev}
                >
                  ‹
                </button>
                <button
                  className="btn btn-outline-light rounded-pill px-3"
                  onClick={close}
                >
                  Lukk
                </button>
                <button
                  className="btn btn-dark rounded-pill px-3"
                  onClick={next}
                >
                  ›
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
