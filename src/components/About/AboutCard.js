import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote about-detail mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haris Wyne </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently unemployed.
            <br />
            I have completed Electrical and Computer Engineering from Punjab University at
            Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series and Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Photography
            </li>
          </ul>

          <p style={{ color: "rgba(102, 252, 241, 1)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Wyne</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
