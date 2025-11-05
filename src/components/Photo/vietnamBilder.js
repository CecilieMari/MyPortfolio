import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./masonry.css";
import { vietnamimage } from "../img/vietnam.image.js";

export default function VietnamBilder() {
  const [active, setActive] = useState(null);
  const open = (i) => setActive(i);
  const close = () => setActive(null);
  const next = () => setActive((i) => (i + 1) % vietnamimage.length);
  const prev = () =>
    setActive((i) => (i - 1 + vietnamimage.length) % vietnamimage.length);

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
          Ho Chi Minh-byen, 2020 — Utforskning av en by med kontraster
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
          I januar 2020 tilbrakte jeg tre uker alene i Ho Chi Minh-byen. Det var
          en by full av liv — der spor av det gamle Vietnam smelter sammen med
          rytmen fra moderne gater, lys og arkitektur. Hver dag bød på noe nytt:
          skjulte smug, lokale markeder, utsikter fra takterrasser og stille
          øyeblikk av refleksjon midt i kaoset. Det var en reise som utfordret
          meg til å gå utenfor komfortsonen og ga meg en dypere forståelse for
          kultur, mennesker og oppdagelse.
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
        {vietnamimage.map((img, i) => (
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
        {active !== null && vietnamimage[active] && (
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
                src={vietnamimage[active].src}
                alt={vietnamimage[active].alt}
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
