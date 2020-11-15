import React from "react";
import { Carousel, Button, Image, Container, Row, Col } from "react-bootstrap";
import TestiData from "../json/Testimonials_Data.json";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        id="carouselExampleIndicators-testi"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {TestiData.testi.map((item, index) => {
          return (
            <Carousel.Item>
              <Container>
                <Row className="content-media-testi align-items-center">
                  <Col lg={4} md={4} className="d-flex justify-content-center">
                    <div className="text-center">
                      <Fade>
                        {" "}
                        <Image
                          id="participant-img"
                          src={item.ImageUrl}
                          alt={item.alt}
                        ></Image>
                      </Fade>
                    </div>
                  </Col>
                  <Col
                    lg={8}
                    md={8}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Fade bottom>
                      <div className="participant-text">
                        <h2>
                          <strong>Testimoni</strong>
                        </h2>
                        <p>{item.quote}</p>
                        <h4>
                          <strong>{item.name}</strong>
                        </h4>
                        <h5 className="text-light">{item.title}</h5>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
