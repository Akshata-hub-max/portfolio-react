import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clock from "../../Assets/Projects/clock.png";
import weather from "../../Assets/Projects/weather.png";
import NoteKeep from "../../Assets/Projects/Notekeep.png";
import ToDo from "../../Assets/Projects/ToDo.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import car from "../../Assets/Projects/car.png";

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
              imgPath={ToDo}
              isBlog={false}
              title="To-Do List"
              description="A to-do list is a simple way to track tasks that need to be completed. It helps organize and prioritize activities by marking items as done once finished."
              ghLink="https://github.com/Akshata-hub-max/To-Do-List"
              demoLink="https://akshata-hub-max.github.io/To-Do-List/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Simple Portfolio"
              description="I created a simple JavaScript portfolio when I started learning HTML, CSS, and JavaScript. The design is clean and straightforward, focusing on the basics. It’s a reflection of my early steps in web development!"
              ghLink="https://github.com/Akshata-hub-max/Portfolio"
              demoLink="https://akshata-hub-max.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital clock"
              description="I built a digital clock project using JavaScript, HTML, and CSS. The clock displays the current time in hours, minutes, and seconds, with real-time updates. It’s a simple yet fun way to practice working with JavaScript and handling time-related functions!"
              ghLink="https://github.com/Akshata-hub-max/clock"
              demoLink="https://akshata-hub-max.github.io/clock/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NoteKeep}
              isBlog={false}
              title="NotKeeper"
              description="I developed a NoteKeep app using React and Firebase. It allows users to create, edit, and delete notes with real-time synchronization. Firebase handles the backend, making it easy to store and retrieve notes, while React powers the front-end for a smooth user experience."
              ghLink="https://github.com/Akshata-hub-max/Notekeeper"
              demoLink="https://akshata-hub-max.github.io/Notekeeper/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Renatl"
              description="I created a car rental project using PHP and MySQL. The application allows users to browse available cars, make reservations, and manage their bookings. MySQL handles the database for storing car details and user information, while PHP powers the server-side logic for seamless functionality."
              ghLink="https://github.com/Akshata-hub-max/Car_Rental"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              description="I built a weather app using React that allows users to check real-time weather information. By integrating a weather API, it fetches and displays data like temperature, humidity, and conditions for any location. The app features a user-friendly interface with dynamic updates based on user input."
              ghLink="https://github.com/Akshata-hub-max/weather"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
