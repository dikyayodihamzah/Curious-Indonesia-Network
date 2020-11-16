import React from "react";
import { Carousel, Image, Container, Row, Col } from "react-bootstrap";
import Webinar from "../assets/images/webinar.png";
import Creative from "../assets/images/creative.png";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export default function EduEntertaiment() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="margin_top"></Col>
          <Col md={12} className="edu-text ">
            {" "}
            <h4 className="font-weight-bold">Edu-Entertainment</h4>
          </Col>
        </Row>
      </Container>
      <Carousel>
        <Carousel.Item>
          <Container className="edu-carousel">
            <Row id="content-media-edu">
              <Col
                xs={{ span: 12, order: 1 }}
                sm={{ span: 12, order: 1 }}
                md={{ order: 1 }}
                lg={{ order: 1 }}
                className="align-self-center text-center"
              >
                {" "}
                <Fade bottom>
                  <Image
                    id="webinar-img"
                    src={Webinar}
                    alt="Screecshot webinar"
                    className="align-self-center"
                  ></Image>{" "}
                </Fade>
              </Col>

              <Col
                xs={{ span: 12, order: 2 }}
                sm={{ span: 12, order: 2 }}
                md={{ order: 2 }}
                lg={{ order: 2 }}
                className="align-self-center"
              >
                {" "}
                <Fade right>
                  <div className="webinar-text media-body align-midd">
                    <h2 className="font-weight-bold">
                      <strong>WEBINAR COIN ACTION</strong>
                    </h2>
                    <p>
                      Webinar COIN Action merupakan salah satu kegiatan
                      Edu-entertainment yang diselenggarakan sebagai bentuk
                      selebrasi Dirgahayu Indonesia ke-75 dengan tema ‘What
                      Indonesian Youths Can Do?’
                    </p>
                    <p>
                      Berhasil menjangkau 230+ Pemuda Indonesia yang terdapat di
                      seluruh wilayah Indonesia
                    </p>
                    <p>
                      Acara ini terdiri dari 5 sesi yang diikuti oleh para
                      pemuda Indonesia dari 5 pulau besar di Indonesia, yaitu
                      Papua, Sulawesi, Kalimantan, Sumatera, dan Jawa
                    </p>
                    <p>
                      Berkolaborasi dengan komunitas dan start-up dari Kitong
                      Bisa Enterprise, Bara Asa Project, AiKite, Kakak Asuh, dan
                      Rumah KIR
                    </p>
                  </div>{" "}
                </Fade>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="edu-carousel">
            <Row id="content-media-edu">
              <Col
                xs={{ span: 12, order: 2 }}
                sm={{ span: 12, order: 2 }}
                md={{ order: 1 }}
                lg={{ order: 1 }}
                className="align-self-center"
              >
                <Fade left>
                  <div className="creative-text ">
                    <h2>
                      <strong>CONTENT CREATIVE</strong>
                    </h2>
                    <p>
                      Berkomitmen untuk memberikan pendidikan melalui konten
                      kreatif dari media sosial dari Coinetwork
                    </p>
                    <p>
                      Bertujuan untuk mengedukasi dan membudayakan riset untuk
                      seluruh Masyarakat Indonesia
                    </p>
                  </div>
                </Fade>
              </Col>
              <Col
                xs={{ span: 12, order: 1 }}
                sm={{ span: 12, order: 1 }}
                md={{ order: 2 }}
                lg={{ order: 2 }}
                className="align-self-center text-center"
              >
                <Fade bottom>
                  <Image
                    id="creative-img"
                    src={Creative}
                    alt="Screenshot konten instagram"
                    className="align-self-center "
                  ></Image>
                </Fade>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
