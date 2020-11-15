import React from "react";
import { Carousel, Image, Container, Row, Col } from "react-bootstrap";
import Prestasi1 from "../assets/images/prestasi-1.png";
import Prestasi2 from "../assets/images/prestasi-2.png";

import Fade from "react-reveal/Fade";

import { useState } from "react";
export default function Prestasi() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="margin_top"></Col>
          <Col md={12} className="prestasi-text font-weight-bold">
            {" "}
            <h4 className="font-weight-bold">Prestasi</h4>
          </Col>
        </Row>
      </Container>

      <Carousel>
        <Carousel.Item>
          <Container className="prestasi-carousel">
            <Row className="content-media-prestasi align-items-center ">
              <Col md={12}>
                <div className="prestasi-top">
                  {" "}
                  <Fade bottom>
                    <h3 id="title-prestasi">
                      <strong>
                        Global Youth Science and Technology Bowl (GYSTB) 2020{" "}
                        <br />
                        by Hong Kong Federation of Youths Group
                      </strong>
                    </h3>
                  </Fade>
                  <Fade bottom delay={200}>
                    <p id="sub-title-prestasi">
                      Global Youth Science and Technology Bowl (GYSTB) 2020 by
                      Hong Kong Federation of Youths Group GYSTB merupakan lomba
                      kompetitif yang diikuti lebih dari 295 judul yang
                      melibatkan 45 organisasi internasional dan terseleksi
                      menjadi 95 judul pada tahap final.
                    </p>
                    <p id="sub-title-prestasi">
                      Kami berhasil memberangkatkan 15 delegasi Indonesia dan
                      meraih 5 penghargaan internasional dengan rincian sebagai
                      berikut:
                    </p>
                  </Fade>
                </div>
                <Row>
                  {" "}
                  <Col
                    xs={{ span: 12, order: 2 }}
                    sm={{ span: 12, order: 2 }}
                    md={{ span: 12, order: 2 }}
                    lg={{ order: 1 }}
                    className=" align-self-center text-center"
                  >
                    <Fade delay={400}>
                      <Image
                        src={Prestasi1}
                        alt="Screecshot webinar"
                        id="prestasi-img-1"
                      ></Image>
                    </Fade>
                  </Col>
                  <Col
                    xs={{ span: 12, order: 1 }}
                    sm={{ span: 12, order: 1 }}
                    md={{ span: 12, order: 1 }}
                    lg={{ order: 2 }}
                  >
                    <div id="prestasi-bottom">
                      {" "}
                      <Fade right delay={400}>
                        <p>
                          First Prize : SMA SPH Sentul Bogor bidang Biology and
                          Chemistry
                          <br />
                          <br />
                          Third Prize: SMPN 1 Karanganyar bidang Physics and
                          Engineering
                          <br />
                          <br />
                          Honorable Mention : <br />
                          SMAN 2 Depok bidang Physics and Engineering SMA IT
                          Samawa Cendekia Sumbawa bidang Biology and Chemistry
                          Visitors’ Favorite Award  SMAN 1 Rangkasbitung
                          (Peringkat Pertama)
                        </p>
                      </Fade>
                    </div>
                  </Col>
                </Row>
              </Col>{" "}
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="prestasi-carousel">
            <Row className="content-media-prestasi align-items-center ">
              <Col md={12} className="align-self-center">
                {" "}
                <div>
                  <div className="prestasi-top">
                    {" "}
                    <Fade bottom>
                      <h3 id="title-prestasi">
                        {" "}
                        <strong>
                          2020 Virtual Africa Science Buskers Festival (ASBF)
                        </strong>{" "}
                      </h3>{" "}
                    </Fade>
                    <Fade bottom delay={200}>
                      <p id="sub-title-prestasi">
                        2020 Virtual Africa Science Buskers Festival (ASBF) yang
                        disponsori oleh Broadcom Foundation (Broadcom Master),
                        Zimbabwe Science Fair, dan IEEE Signal Processing..
                      </p>
                      <p id="sub-title-prestasi">
                        ASBF merupakan lomba kompetitif yang diikuti oleh 17
                        negara dengan 175 finalis. Kami berhasil meraih 12
                        Penghargaan internasional dengan rincian sebagai
                        berikut:
                      </p>
                    </Fade>
                  </div>
                </div>
                <Row>
                  <Col
                    xs={{ span: 12, order: 1 }}
                    sm={{ span: 12, order: 1 }}
                    md={{ span: 12, order: 1 }}
                    lg={{ order: 1 }}
                    className="align-self-center"
                  >
                    <div id="prestasi-bottom">
                      {" "}
                      <Fade left delay={400}>
                        <p>
                          <strong>Gold Medal (Grand Award)</strong>
                          <br />
                          Chapter 2: Extraction of Organic (SPH Sentul) <br />
                          Oncolytic for Cancer Treatment (SMAN 90 Jakarta){" "}
                          <br />
                          Drumstick Tree and Aloe (SMAN 1 Rangkasbitung) <br />
                          Sonar GPS (Narada) 
                          <br />
                          Smoke Box (SMA Kharisma Bangsa)
                        </p>
                        <p>
                          <strong>Bronze Medal (Grand Award)</strong>
                          <br />
                          TJ-PAC (Narada School) 
                          <br />
                          Chapter 1: Phytochemicals Analysis (MAN 2 Tasikmalaya)
                          <br />
                          <br />
                          <strong>Favorite Project</strong>
                          <br />
                          Anti Odor Spray (MAN 2 Tasikmalaya) <br />
                          Chapter 1: Phytochemicals Analysis (MAN 2 Tasikmalaya){" "}
                          <br />
                          Patriarchy (MAN 2 Tasikmalaya) <br />
                          Oncolytic for Cancer Treatment (SMAN 90 Jakarta){" "}
                          <br />
                          Drumstick Tree and Aloe (SMAN 1 Rangkasbitung)
                        </p>
                      </Fade>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 12, order: 2 }}
                    sm={{ span: 12, order: 2 }}
                    md={{ span: 12, order: 2 }}
                    lg={{ order: 2 }}
                    className=" align-self-center text-center mr-5"
                  >
                    <Fade delay={200}>
                      <Image
                        src={Prestasi2}
                        alt="Screecshot webinar"
                        id="prestasi-img-1"
                      ></Image>
                    </Fade>
                  </Col>
                </Row>
              </Col>{" "}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
