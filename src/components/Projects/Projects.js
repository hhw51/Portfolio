import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import DG from '../../Assets/Projects/DG.png';
import chatify from "../../Assets/Projects/chatify.png";
import job from "../../Assets/Projects/job-dash.png";
import admin from "../../Assets/Projects/admin-dash.png";
import shop from "../../Assets/Projects/shop-online.png";
import arabic from "../../Assets/Projects/arabic.png";
import medical from "../../Assets/Projects/medical.png";
import gql from "../../Assets/Projects/Graphql.png";
import belike from "../../Assets/Projects/belike.png";
import chat from "../../Assets/Projects/chat.png";
const projects = [
  {
    imgPath: chat,
    title: "Chat-App",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends built with React.js, Node.js, Express.js, Tailwind CSS, and MongoDB. Features include real-time messaging and img sharing functionality",
    ghLink: "https://github.com/Mohsin1016/chat-dep-front",
    demoLink: "https://chat-dep-front.vercel.app/",
  },
  {
    imgPath: medical,
    title: "Medical-Blog-Website",
    description:
      "Medical blog research page built with React.js and Bootstrap CSS.",
    ghLink: "https://github.com/Mohsin1016/Project-two",
    demoLink: "https://project-two-rho-lilac.vercel.app/",
  },
  {
    imgPath: arabic,
    title: "Product-website",
    description:
      "Simple single page website for buying products built with simple HTML, CSS, and JavaScript.",
    ghLink: "https://github.com/Mohsin1016/Arabic",
    demoLink: "https://arabic-tawny.vercel.app/",
  },
  {
    imgPath: leaf,
    title: "Shopping Website",
    description:
      "Shopping website where you can buy clothes and other items. Features include adding and removing items from the cart, built using React.js, Redux, and Firebase as the backend.",
    ghLink: "https://github.com/Mohsin1016/project-1",
    demoLink: "https://shopping-mu-sepia.vercel.app/",
  },
  {
    imgPath: belike,
    title: "Be-Like Website",
    description:
      "A website for schools to login/signup, add teachers and students. Teachers can mark attendance and grades. Built using Next.js and PostgreSQL as the backend.",
    ghLink: "https://github.com/Mohsin1016/belike",
    // demoLink: "https://project-3-opal.vercel.app/"
  },
  {
    imgPath: editor,
    title: "A Blog-Post Website",
    description:
      "A Blog-Post Website made using MERN. Users can login, add blogs, read others' blogs, and edit their own blogs.",
    ghLink: "https://github.com/Mohsin1016/blogpost",
    demoLink: "https://post-blog-test-x7xc.vercel.app",
  },
  {
    imgPath: shop,
    title: "Online Shopping",
    description:
      "An online shopping website made using MERN and Next.js, with Firebase as the backend.",
    ghLink: "https://github.com/Mohsin1016/Ecommerce-Shoping",
    demoLink: "https://ecommerce-shoping.vercel.app",
  },
  {
    imgPath: admin,
    title: "Admin Dashboard Project",
    description:
      "An admin dashboard project made using MERN, which can be attached to any e-commerce website using Firebase or MongoDB.",
    ghLink: "https://github.com/Mohsin1016/Dashboard",
    demoLink: "https://dashboard-rose-nu-45.vercel.app/",
  },
  {
    imgPath: gql,
    title: "GraphQl Practice Project",
    description:
      "a simple client and project showing website made up using MERN along with graohql. A user can add clients and delete clients also he can add projects for the sepific client if he want also he can update the project.",
    ghLink: "https://github.com/Mohsin1016/Dashboard",
    demoLink: "https://graph-ql-client.vercel.app/",
  },
  {
    imgPath: job,
    title: "Job Dashboard",
    description:
      "A job dashboard made using Next.js and using Firebase as a backend . A user can add different jobs , Application and Recuiters. Also user can select the status of the jobs or recuiters and a lot more functionalities. ",
    ghLink: "https://github.com/Mohsin1016/job-dashoard",
    demoLink: "https://job-dashoard.vercel.app/",
  },
  {
    imgPath: DG,
    title: "Dream Guest",
    description:
      "A job dashboard made using Next.js and using Firebase as a backend . A user can add different jobs , Application and Recuiters. Also user can select the status of the jobs or recuiters and a lot more functionalities. ",
    ghLink: "https://github.com/Mohsin1016/",
    demoLink: "https://app.dreamguest.com/",
  },
];

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
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
