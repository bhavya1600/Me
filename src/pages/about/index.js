import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skillgroups,
  education,
  certifications,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">work timeline</h3>
          </Col>
          <Col lg="7">
            <ol className="timeline">
              {worktimeline.map((data, i) => (
                <li className="timeline__item" key={i}>
                  <div className="timeline__head">
                    <h5 className="timeline__role">{data.jobtitle}</h5>
                    <span className="timeline__date">{data.date}</span>
                  </div>
                  <p className="timeline__where">{data.where}</p>
                  {data.highlights && (
                    <ul className="timeline__points">
                      {data.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">skills</h3>
          </Col>
          <Col lg="7">
            {skillgroups.map((group, i) => (
              <div className="skill_group" key={i}>
                <h3 className="progress-title">{group.name}</h3>
                <div className="chips">
                  {group.items.map((item, j) => (
                    <span className="chip" key={j}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">education</h3>
          </Col>
          <Col lg="7">
            <ol className="timeline">
              {education.map((data, i) => (
                <li className="timeline__item" key={i}>
                  <div className="timeline__head">
                    <h5 className="timeline__role">{data.degree}</h5>
                    <span className="timeline__date">{data.date}</span>
                  </div>
                  <p className="timeline__where">
                    {data.where} · {data.detail}
                  </p>
                </li>
              ))}
            </ol>
            <h3 className="progress-title mt-5">Certifications</h3>
            <ul className="timeline__points">
              {certifications.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">projects</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
