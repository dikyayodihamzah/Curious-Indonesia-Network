import React from "react";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import InternshipImage from "../assets/images/Internship.png";
import Fade from "react-reveal/Fade";

export default function Internship() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="margin_top"></Col>
          <Col md={12} className="internship-text">
            <h4 className="font-weight-bold">Internship</h4>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mb-4 px-3 py-3">
          <Col md={6} className="internship_text px-3 py-3">
            <Fade left>
              <h5 className="font-weight-bold">Ketentuan:</h5>

              <ul>
                <li> Usia 17-21 Tahun</li>
                <li>
                  {" "}
                  Memiliki kemampuan atau minat yang sesuai dengan bidang yang
                  didaftar{" "}
                </li>
                <li> Mampu bekerjasama secara tim</li>
                <li>
                  {" "}
                  Bertanggungjawab dan bersedia untuk mengikuti rangkaian
                  kegiatan Open Recruitment
                </li>
                <li>
                  Bertanggungjawab dan memiliki kemauan tinggi 6. Dapat bekerja
                  sukarela
                </li>
              </ul>
            </Fade>
            <br />
            <Fade delay={200} left>
              <h5 className="font-weight-bold">Persyaratan:</h5>

              <ul>
                {" "}
                <li> Siapkan CV terbaru</li>
                <li>Daftarkan Diri pada Link Pendaftaran</li>
              </ul>
              <br />
            </Fade>
            <Fade delay={400} left>
              <h5 className="font-weight-bold">Pilihan divisi</h5>

              <ul>
                <li>Social Media Analyst</li>
                <li>Public Relationship and Benchmarking </li>
                <li>Multimedia and Technology</li>
              </ul>
            </Fade>
          </Col>
          <Col md={6} className=" text-center">
            <Fade bottom>
              <Image
                className="internship_image mt-3"
                src={InternshipImage}
                alt={InternshipImage}
                fluid
              ></Image>
            </Fade>
            <Fade delay={200}>
              <Button
                className="guidebook_button mt-5 "
                variant="outline-warning"
                href="https://docs.google.com/uc?export=download&id=1CxTdOUWJkFB8AXaZY7Uf-LeLWg2-pb5T"
              >
                Guidebook
              </Button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
