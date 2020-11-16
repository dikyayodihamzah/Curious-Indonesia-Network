import React, { useState, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons";
import "../navbar/Navbar.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Container fluid className="navbar_frame">
        <Row className="d-flex">
          {" "}
          <Col className="px-0"></Col>
          <Col className="px-0">
            {" "}
            <div className="cin_navbar align-items-center justify-content-center">
              <Link to="/">
                <div className="cin_text ">
                  <h6>COINETWORK</h6>
                </div>
              </Link>
            </div>
          </Col>
          <Col className="px-0">
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                <div to="#" className="menu-bars align-items-center">
                  <FaIcons.FaBars onClick={showSidebar} />
                </div>
              </div>

              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <div to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </div>
                  </li>

                  <li className="nav-text text-white">
                    <Link to="/">
                      <a>
                        <AiIcons.AiFillHome />
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-text text-white">
                    <Link to="/Internship">
                      <a>
                        <AiIcons.AiOutlineUser />
                        <span>Internship</span>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-text text-white">
                    <Link to="/EduEntertaiment">
                      <a>
                        <BiIcons.BiBookReader />
                        <span>Edu Entertaiment</span>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-text text-white">
                    <Link to="/Kompetisi">
                      <a>
                        <AiIcons.AiOutlineTrophy />
                        <span>Kompetisi</span>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-text text-white">
                    <Link to="/Prestasi">
                      <a>
                        <AiIcons.AiOutlineProfile />
                        <span>Prestasi</span>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-text text-white">
                    <Link to="/AboutUs">
                      <a>
                        <IoIcons.IoMdHelpCircle />
                        <span>About Us</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </IconContext.Provider>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
