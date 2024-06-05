import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Node.js , Express.js Tailwind CSS, and MongoDB. Have features which allows user for realtime messaging as well as image sharing "
              ghLink="https://github.com/Mohsin1016/chatApp"
              demoLink="https://client-rho-woad.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Medical-Blog-Website"
              description="Medical blog Research page build with React.js and BootStrap CSS."
              ghLink="https://github.com/Mohsin1016/Project-two"
              demoLink="https://project-two-rho-lilac.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Product-website"
              description="Simple single page website for buying products build with simpple HTML CSS and JAVASCRIPT."
              ghLink="https://github.com/Mohsin1016/Arabic"
              demoLink="https://arabic-tawny.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shopping Website "
              description="shopping website where you can buy clothes and other things you can add items to your cart and remove from them build using react.js redux and firebase as a backend."
              ghLink="https://github.com/Mohsin1016/project-1"
              demoLink="https://shopping-mu-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Be-Like Website"
              description="A website where different schools can login or signup and then can add there teacher and students. Teacher can mark attendance and mark grade. You can classify students according to there grades. build using next.js and postgre as backend "
              ghLink="https://github.com/Mohsin1016/belike"
              // demoLink="https://project-3-opal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="A Blog-Post Website"
              description="A Blog-Post Website made up using MERN. You can login and can add your blogs and also can read the blogs of others. Also you can edit your own blog."
              ghLink="https://github.com/Mohsin1016/blogpost"
              // demoLink="https://project-3-opal.vercel.app/"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
