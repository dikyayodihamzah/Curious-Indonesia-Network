import React from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_cin.png";
import Fade from "react-reveal/Fade";

export default function Home(props) {
  return (
    <>
      <div className="jumbotron">
        <Container fluid>
          <Row className="home_frame align-items-center text-center">
            <Col lg={12} className="home_content ">
              <Fade bottom>
                {" "}
                <Image id="logo_home" src={Logo} alt="logo_cin" fluid />
              </Fade>{" "}
              <Fade bottom delay={200}>
                <div className="button">
                  <Link to="/AboutUs">
                    <Button variant="outline-warning" className="home_button">
                      About us
                    </Button>
                  </Link>

                  <Link to="/Internship">
                    <Button variant="outline-warning" className="home_button">
                      Internship
                    </Button>
                  </Link>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
