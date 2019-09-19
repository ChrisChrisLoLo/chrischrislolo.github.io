import React from "react";
import {
  Row,
  Col
} from "reactstrap";
import Container from "reactstrap/es/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn,faGithub,faGithubAlt} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

import "./HomePage.scss";

import profile from "../static/images/prof.jpg";
import vectorCoding from "../static/vectors/modeling.svg";

import demo0 from "../static/images/gifs/demo0.gif";
import demo1 from "../static/images/gifs/demo1.gif";
import demo2 from "../static/images/gifs/demo2.gif";
import demo3 from "../static/images/gifs/demo3.gif";
import demo5 from "../static/images/gifs/demo5.gif";


export default class HomePage extends React.Component {
  render() {
    return (
      <div>

        <Row>
          <Col className={"px-0"}>
            <section className={"bgimage-preload bgimage"}>
              <Container>
                <Row>
                  <Col>
                  </Col>
                  <Col lg={"10"} md={"10"} sm={"10"} xs={"10"} className={"text-center text-white"}>
                    <img className={"profile-image"} src={profile}/>
                    <h1 className={"font-title drop-fade-0"}>Christian Lo</h1>
                    <h6 className={"mb-2 drop-fade-1"}>3rd year CS Specialization Student at the UofA</h6>
                    <h6 className={"mb-2 drop-fade-2"}>Professional Creator</h6>
                    <div className={"drop-fade-3"}>
                      <a href={"https://github.com/ChrisChrisLoLo"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size={"2x"} className={"mr-3 icon-button-light"}/>
                      </a>
                      <a href={"https://www.linkedin.com/in/christian-lo-9265a5143/"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size={"2x"} className={"mr-3 icon-button-light"}/>
                      </a>
                    </div>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>

        <Row className={"py-4 bg-primary"}>
          <Col xs={1} sm={1} md={2}>
          </Col>
          <Col>
            <h2 className={"my-4"}>About Myself</h2>
            <p>
              I enjoy making things.
              Having deployed multiple full-stack web applications, I am eager to learn
              new technologies to help deliver practical and novel products to users.
              I am proficient with Java, React, and Python, among other technologies used in creating modern web applications.
            </p>
          </Col>
          <Col>
            <img src={vectorCoding} className={"vector-image"}/>
          </Col>
          <Col xs={1} sm={1} md={2}>
          </Col>
        </Row>

        <Row className={"text-center py-4 bg-gradient"}>
          <Col>
            <h1>
              Top Personal Projects
            </h1>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4 portfolio bg-gradient"}>
          <Col className={"mx-4 px-5 text-left"}>
            <h2 className={"text-center mb-3"}>
              UCoursePlus
              <a href={"http://ucourseplus.com"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} size={"1x"} className={"ml-4 icon-button-dark"}/>
              </a>
              <a href={"https://github.com/ChrisChrisLoLo/CoursePlusPlus"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} size={"1x"} className={"ml-2 icon-button-dark"}/>
              </a>
            </h2>
            <p className={"text-left"}>
              A modern, reactive redesign of the UofA's course builder. Search, add, and swap courses in an instant.
              The front-end is a responsive single page application built with React, and
              consumes RESTful API endpoints from a Django server.
            </p>
            <ul className={"text-left"}>
              <li>Allows users to search for any course available, add them to a cart, and use them to build a schedule template</li>
              <li>Makes use of token based authentication, Google sign-in, and a demo mode using local storage</li>
              <li>Uses modern web technologies such as React, Sass, Django, and Bootstrap</li>
              <li>Can deploy production to AWS in a single step</li>
            </ul>
          </Col>
          <Col>
            <img src={demo0} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4 portfolio bg-gradient"}>
          <Col className={"mx-4 px-5 text-left"}>
            <h2 className={"text-center mb-3"}>
              UofA LDAP Calendar Scraper
              <a href={"https://github.com/ChrisChrisLoLo/courseLdapScraper"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} size={"1x"} className={"ml-2 icon-button-dark"}/>
              </a>
            </h2>
            <p className={"text-left"}>
              This script scrapes the University of Alberta's Lightweight Directory Access Protocol (LDAP) Database
              and converts it into a normalized SQLite file.
            </p>
            <ul className={"text-left"}>
              <li>Converts a NoSQL database schema into a 3NF SQL database schema</li>
              <li>Handles duplication between terms by adding new primary keys</li>
              <li>
                Contains an additional script which can convert the 'verbatim' tables
                and break them into individual entities to avoid duplication
              </li>
            </ul>
          </Col>
          <Col>
            <img src={demo5} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4 portfolio bg-gradient"}>
          <Col className={"mx-4 px-5 text-left"}>
            <h2 className={"text-center mb-3"}>
              UCourse
              <a href={"http://www.picopigeon.com"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} size={"1x"} className={"ml-4 icon-button-dark"}/>
              </a>
              <a href={"https://github.com/ChrisChrisLoLo/UCourse"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} size={"1x"} className={"ml-2 icon-button-dark"}/>
              </a>
            </h2>
            <p className={"text-left"}>
              The original UCourse. Search any course in the UofA calendar and give it a rating
              for others to see. Uses a templating engine to deliver a clean UX. A stepping stone used to learn
              concepts such the MVC pattern, ORM use, and static web pages.
            </p>
            <ul className={"text-left"}>
              <li>Directly search for a course or search based on a set of criteria</li>
              <li>Rate any course based on it's difficulty, workload, practicality, and enjoyment</li>
              <li>Obtained course information scraped off the University's website</li>
              <li>Deployed on PythonAnywhere</li>
            </ul>
          </Col>
          <Col>
            <img src={demo1} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4 portfolio bg-gradient"}>
          <Col className={"mx-4 px-5 text-left"}>
            <h2 className={"text-center mb-3"}>
              Paint Art Gallery
              <a href={"https://hidden-refuge-97022.herokuapp.com/"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} size={"1x"} className={"ml-4 icon-button-dark"}/>
              </a>
              <a href={"https://github.com/ChrisChrisLoLo/artGal"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} size={"1x"} className={"ml-2 icon-button-dark"}/>
              </a>
            </h2>
            <p>
              Create and host MSPaint masterpieces in this online gallery.
              Modifies an HTML5 canvas with Javascript. Saves, stores, and displays each image with the use of Data URIs.
              Uses Node.js and MongoDB in the backend.
            </p>
            <ul className={"text-left"}>
              <li>Sign into google and create a drawing on the canvas</li>
              <li>Give your drawing a title and description, and then publish it for everyone to see</li>
              <li>Comment on other people's work</li>
              <li>Deployed on Heroku</li>
            </ul>
          </Col>
          <Col>
            <img src={demo2} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4 portfolio bg-gradient"}>
          <Col className={"mx-4 px-5 text-left"}>
            <h2 className={"text-center mb-3"}>
              Tamagotchi Clone
              <a href={"http://coolgamelamename.netlify.com/"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} size={"1x"} className={"ml-4 icon-button-dark"}/>
              </a>
              <a href={"https://github.com/ChrisChrisLoLo/tamagotchiClone"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubAlt} size={"1x"} className={"ml-2 icon-button-dark"}/>
              </a>
            </h2>
            <p>
              Feed, bathe, and play with your pet in this online tamagotchi "clone".
              Uses local storage to save and load game state and the Date and Time API to
              let the game progress in real time, even offline!
            </p>
            <ul className={"text-left"}>
              <li>Emulates elements from the original Tamagotchi, including hunger, illness, games</li>
              <li>Stash up food, send your pet to work, and save up money to worship Steve Jobs</li>
              <li>Pet statuses slowly change over time. Use the fast forward ability to play in a focused session</li>
              <li>Save, load, and reset your game on the fly</li>
              <li>Has several cheats available</li>
            </ul>
          </Col>
          <Col>
            <img src={demo3} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4"}>
          <Col>
            <h3>These projects and more can be found at my github</h3>
          </Col>
        </Row>
      </div>
    );
  }
}