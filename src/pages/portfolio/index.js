import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { ProjectModal } from "../../components/projectmodal";

export const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  const openOnKey = (e, data) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(data);
    }
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div
              key={i}
              className="po_item"
              role="button"
              tabIndex={0}
              aria-label={`Open ${data.description}`}
              onClick={() => setSelected(data)}
              onKeyDown={(e) => openOnKey(e, data)}
            >
              {data.img ? (
                <img src={data.img} alt={data.description} loading="lazy" />
              ) : (
                <div className="po_placeholder">
                  <span className="po_placeholder__title">{data.title}</span>
                  <span className="po_placeholder__desc">{data.description}</span>
                  {data.tags && (
                    <span className="po_placeholder__tags">
                      {data.tags.join(" · ")}
                    </span>
                  )}
                </div>
              )}
              <div className="content">
                <p>{data.description}</p>
                <span className="po_view">view project</span>
              </div>
            </div>
          ))}
        </div>
        <ProjectModal project={selected} onHide={() => setSelected(null)} />
      </Container>
    </HelmetProvider>
  );
};
