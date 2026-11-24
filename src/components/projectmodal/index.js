import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import "./style.css";

const LINK_ICONS = {
  github: FaGithub,
  live: FaExternalLinkAlt,
  site: FaExternalLinkAlt,
  paper: FaFileAlt,
};

export const ProjectModal = ({ project, onHide }) => {
  // Hero shows the cover first; clicking a gallery thumb swaps it in.
  const [active, setActive] = useState(null);
  useEffect(() => setActive(null), [project]);

  if (!project) return null;

  const gallery = [
    { src: project.img, caption: project.description },
    ...(project.media || []),
  ];
  const hero = active ?? gallery[0];
  const summary = project.summary || [];
  const links = project.links || [];

  return (
    <Modal
      show={!!project}
      onHide={onHide}
      size="lg"
      centered
      scrollable
      contentClassName="pm"
      aria-labelledby="pm-title"
    >
      <button className="pm__close" onClick={onHide} aria-label="Close">
        <VscClose />
      </button>

      <Modal.Body className="p-0">
        <figure className="pm__hero">
          <img src={hero.src} alt={hero.caption} />
          {hero !== gallery[0] && <figcaption>{hero.caption}</figcaption>}
        </figure>

        <div className="pm__content">
          <h2 id="pm-title" className="pm__title">
            {project.description}
          </h2>
          <div className="pm__meta">
            {project.year && <span className="pm__year">{project.year}</span>}
            {(project.tags || []).map((t) => (
              <span className="pm__tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          {summary.map((p, i) => (
            <p className="pm__text" key={i}>
              {p}
            </p>
          ))}

          {gallery.length > 1 && (
            <>
              <h3 className="pm__subhead">Media</h3>
              <div className="pm__gallery">
                {gallery.map((m) => (
                  <button
                    key={m.src}
                    className={`pm__thumb ${m === hero ? "is-active" : ""}`}
                    onClick={() => setActive(m)}
                    title={m.caption}
                  >
                    <img src={m.src} alt={m.caption} loading="lazy" />
                  </button>
                ))}
              </div>
            </>
          )}

          {links.length > 0 && (
            <div className="pm__links">
              {links.map((l) => {
                const Icon = LINK_ICONS[l.type] || FaExternalLinkAlt;
                return (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`pm__link ${l.type === "github" ? "is-primary" : ""}`}
                  >
                    <Icon /> {l.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};
