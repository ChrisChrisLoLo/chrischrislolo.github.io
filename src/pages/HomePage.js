import React from "react";
import {
  Row,
  Col
} from "reactstrap";
import Container from "reactstrap/es/Container";
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
            <section className={"bgimage"}>
              <Container>
                <Row>
                  <Col>
                  </Col>
                  <Col lg={"10"} md={"10"} sm={"10"} xs={"10"} className={"text-center text-white"}>
                    <img className={"profile-image"} src={profile}/>
                    <h1 className={"font-title"}>Christian Lo</h1>
                    <h6 className={"mb-2 drop-fade-0"}>3rd year CS Specialization Student at the UofA</h6>
                    <h6 className={"mb-2 drop-fade-1"}>Professional Hobbyist</h6>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>

        <Row className={"py-4 bg-primary-light"}>
          <Col xs={1} sm={1} md={2}>
          </Col>
          <Col>
            <h2 className={"my-4"}>About Myself</h2>
            <p>
              I enjoy making things.
              Having deployed multiple full-stack web applications, I am eager to learn
              new technologies to help deliver practical and novel products to users.
              I am proficient with Java, React, and Python, among other technologies used in creating modern web applications
            </p>
          </Col>
          <Col>
            <img src={vectorCoding} className={"vector-image"}/>
          </Col>
          <Col xs={1} sm={1} md={2}>
          </Col>
        </Row>

        <Row className={"text-center"}>
          <Col>
            <h1>
              Personal Projects
            </h1>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4"}>
          <Col>
            <h2>UCoursePlus</h2>
            <p>
              A modern, reactive redesign of the UofA's course builder.

            </p>
          </Col>
          <Col>
            <img src={demo0} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4"}>
          <Col>
            <h2>UofA LDAP Calendar Scraper</h2>
          </Col>
          <Col>
            <img src={demo5} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4"}>
          <Col>
            <h2>UCourse</h2>
          </Col>
          <Col>
            <img src={demo1} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4"}>
          <Col>
            <h2>Paint Art Gallery</h2>
          </Col>
          <Col>
            <img src={demo2} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
        <Row className={"py-4"}>
          <Col>
            <h2>Tamagotchi Clone</h2>
          </Col>
          <Col>
            <img src={demo3} className={"demo-image"}/>
          </Col>
        </Row>
        {/*------------------------------------------------------------*/}
      </div>
    );
  }
}