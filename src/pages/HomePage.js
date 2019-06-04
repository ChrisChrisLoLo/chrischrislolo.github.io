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
                                    <Col></Col>
                                    <Col lg={"10"} md={"10"} sm={"10"} xs={"10"} className={"text-center text-white"}>
                                        <img className={"profile-image"} src={profile}/>
                                        <h1 className={"font-title"}>Christian Lo</h1>
                                        <h6 className={"mb-2 drop-fade-0"}>3rd year CS Specialization Student at the UofA</h6>
                                        <h6 className={"mb-2 drop-fade-1"}>Software Developer in Training</h6>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>

                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </Col>
                </Row>
            </div>
        );
    }
}