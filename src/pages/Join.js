import React from "react";
import { Link } from "react-router-dom";
import { Button, Image, Container, Row, Col } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import JoinData from "../json/Join_Data.json";

export default function Join() {
  return (
    <div className="join_section">
      <Container>
        <Row className="join_section align-items-center text-center">
          {JoinData.join.map((item, index) => {
            return (
              <Col
                key={index}
                sm={12}
                md={4}
                lg={4}
                className=" d-flex px-4 justify-content-center"
              >
                <Fade bottom delay={index * 200}>
                  <div className="join_frame d-flex align-items-center justify-content-center">
                    <div className="join_outline"></div>
                    <div className="d-flex join_content align-items-center">
                      <Fade>
                        <div className="join_icon">
                          <Image
                            src={item.ImageUrl}
                            id="join_icon"
                            alt="join_icon"
                          ></Image>
                        </div>

                        <div className="join_title">
                          <h5>{item.title}</h5>
                        </div>
                        <div className="join_button">
                          <Link to={item.link}>
                            <Button variant="outline-dark" id="join_button">
                              Lihat
                            </Button>
                          </Link>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </Fade>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
