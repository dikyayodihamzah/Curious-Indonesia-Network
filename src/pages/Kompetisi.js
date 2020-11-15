import React from "react";
import {
  Carousel,
  Button,
  Image,
  Container,
  Row,
  Col,
  CarouselItem,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function Kompetisi() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="margin_top"></Col>
          <Col md={12} className="kompetisi-text font-weight-bold">
            {" "}
            <h4 className="font-weight-bold">Kompetisi</h4>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="kompetisi_frame align-items-center text-center">
          <Col md={12}>
            <Fade bottom>
              <div>
                {" "}
                <h2>
                  Road to International Competition
                  <br />
                  2021 Edition
                </h2>
              </div>
            </Fade>
          </Col>
          <Col md={12}>
            <Zoom>
              <div>
                {" "}
                <h1>SEGERA HADIR</h1>
              </div>{" "}
            </Zoom>
          </Col>
          <Col md={12}>
            <Fade bottom>
              <div>
                {" "}
                <p>
                  Pantau terus akun sosial media Coinetwork untuk info terbaru
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
