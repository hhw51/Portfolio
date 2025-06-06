import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.png";
import Particle from "../Particle";
import Type from "./Type";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I’M <strong className="main-name">Haris Wyne</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m a results-driven Software Engineer with a strong focus on{" "}
                <b className="purple">AI integration</b> and{" "}
                <b className="purple">full-stack development</b>.
                <br />
                <br />
                I bring hands-on experience in building modern, scalable
                applications using{" "}
                <i>
                  <b className="purple">
                    Next.js, Express.js, Django, Spring Boot
                  </b>
                </i>
                , and cloud platforms like{" "}
                <b className="purple">Supabase</b> and{" "}
                <b className="purple">MongoDB</b>.
                <br />
                <br />
                My passion lies in solving real-world problems—whether it's with{" "}
                <b className="purple">OpenAI-powered features</b> or{" "}
                <b className="purple">Dockerized backend systems</b>, I aim to
                deliver clean, efficient, and impactful software.
                <br />
                <br />
                I’ve led teams and delivered across domains—from AI assistants
                and RAG apps to mobile platforms and admin dashboards—all while
                keeping performance, usability, and business goals in focus.
              </p>
            </Col>
            <Col
              md={4}
              className="myAvtar d-flex justify-content-center align-items-center"
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/hhw51"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/haris-wyne/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/hariswyne10"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
