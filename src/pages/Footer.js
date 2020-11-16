import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export default function Footer() {
  return (
    <div className="footer">
      <Container className=" footer text-white">
        <Row className="footer_content d-flex footer align-items-center">
          <Col>
            <Row className=" py-4 px-3 ">
              <Col md="auto" className=" mx-auto ">
                <h6 className="footer_title text-uppercase font-weight-bold">
                  COINETWORK{" "}
                </h6>
                <hr
                  className="bg-warning mb-2 mt-0 d-inline-block mx-auto"
                  style={{ width: "160px", height: "2px" }}
                ></hr>
                <p className="mt-2 " id="footer_list">
                  Curious Indonesian Network
                </p>
              </Col>

              <Col md="auto" className="  mx-auto text-white">
                <h6 className="footer_title text-uppercase font-weight-bold">
                  Social Media{" "}
                </h6>
                <hr
                  className="bg-warning mb-2 mt-0 d-inline-block mx-auto"
                  style={{ width: "150px", height: "2px" }}
                ></hr>

                <ul className="list-unstyled">
                  <li className="my-2">
                    <a
                      className="footer_list"
                      href="https://www.instagram.com/coinetwork/"
                      target="_blank"
                    >
                      <AiIcons.AiOutlineInstagram />
                      <span>@coinetwork</span>
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      className="footer_list"
                      href="https://www.youtube.com/channel/UCvhnEUK81Vs3J37MXwcFkoA"
                      target="_blank"
                    >
                      <AiIcons.AiOutlineYoutube />
                      <span>coinetwork</span>
                    </a>
                  </li>
                  <li className="my-2">
                    <a
                      className="footer_list"
                      href="https://www.linkedin.com/company/coinetwork/"
                      target="_blank"
                    >
                      <AiIcons.AiOutlineLinkedin />
                      <span>Curious Indonesian Network</span>
                    </a>
                  </li>
                </ul>
              </Col>

              <Col md="auto" className=" mx-auto ">
                <h6 className="footer_title text-uppercase font-weight-bold">
                  Getting Touch{" "}
                </h6>
                <hr
                  className="bg-warning mb-2 mt-0 d-inline-block mx-auto"
                  style={{ width: "160px", height: "2px" }}
                ></hr>

                <ul className=" list-unstyled">
                  <li className="my-2">
                    <a
                      className="footer_list"
                      href="mailto: curiousindonesiannetwork@gmail.com"
                      target="_blank"
                    >
                      <AiIcons.AiOutlineMail />
                      <span>curiousindonesiannetwork@gmail.com</span>
                    </a>
                  </li>
                  <li className=" footer_list my-2">
                    <a
                      className="footer_list"
                      href="tel:+62882-1666-8149"
                      target="_blank"
                    >
                      <MdIcons.MdCall />
                      <span>+62 882 1666 8149</span>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="footer_title footer-copyright text-center  text-white">
                  <p>&copy; Copyright Curious Indonesian Network</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
