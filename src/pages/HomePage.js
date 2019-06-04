import React from "react";
import {
  Row,
  Col
} from "reactstrap";
import Container from "reactstrap/es/Container";
import "./HomePage.scss";

import profile from "../static/images/prof.jpg";

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
                    <h6 className={"mb-2 drop-fade-1"}>Decent Person</h6>
                  </Col>
                  <Col>
                  </Col>
                </Row>

              </Container>
            </section>
          </Col>
        </Row>
        <Row className={"py-4"}>
          <Col xs={1} sm={1} md={2}>
          </Col>
          <Col>
            <h3>About Myself</h3>
            <p>
              Having deployed multiple full-stack web applications, I am eager to learn
              new technologies to help deliver useful and novel products to users.
            </p>
          </Col>
          <Col>
            funny image
          </Col>
          <Col xs={1} sm={1} md={2}>
          </Col>
        </Row>
      </div>
    );
  }
}