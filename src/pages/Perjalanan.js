import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import Perjalanan_img from "../assets/images/Perjalanan.png";
import Zoom from "react-reveal/Zoom";

export default function Perjalanan() {
  return (
    <div>
      <Container className="perjalanan">
        <Row className="perjalanan_frame align-items-center justify-content-center text-center">
          <Col md="12" classname="perjalanan_content">
            <Zoom>
              <Image
                className="perjalanan_img"
                src={Perjalanan_img}
                alt="perjalanan"
              />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
