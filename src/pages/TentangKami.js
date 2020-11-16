import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import TentangKamiImage from "../assets/images/TentangKami.png";
import Fade from "react-reveal/Fade";

export default function TentangKami(props) {
  return (
    <div className="TentangKami_container">
      <Container>
        <Row className="TentangKami_content ">
          <Col md="5" className="TentangKami_image align-self-center">
            <Fade bottom>
              <Image
                id="image_1"
                src={TentangKamiImage}
                alt="TentangKamiImage"
                fluid
              ></Image>
            </Fade>
          </Col>

          <Col
            md="7"
            className="TentangKami_text align-self-center text-white "
          >
            <Fade right>
              <h3 className="text-warning">Tentang Kami</h3>
            </Fade>
            <Fade right>
              <p>
                Curious Indonesian Network merupakan Non-Governmental
                Organization yang mendukung Sustainable Development Goals (SDGs)
                pada nomor ke-4 yaitu memastikan pendidikan inklusif dan
                berkualitas setara
                <br />
                <br />
                Ketika banyak pemuda bermimpi untuk bisa mengikuti kegiatan yang
                dapat menunjang prestasinya baik di dalam maupun luar negeri,
                Coinetwork hadir sebagai sarana mengaktualisasi diri dengan
                kendala yang sering dihadapi oleh pemuda
                <br />
                <br />
                Maka kami berinisiasi untuk memberikan jaringan, pembinaan dan
                penghubung dukungan finansial.Coinetwork memanfaatkan jaringan
                skala nasional dan internasional pada kegiatan edukasi,
                penelitian dan gerakan sosial
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
