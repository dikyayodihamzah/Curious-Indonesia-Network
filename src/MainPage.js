import React, { Component } from "react";
import Navbar from "./parts/navbar/Navbar";
import Prestasi from "./pages/Prestasi";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Internship from "./pages/Internship";
import LandingPage from "./pages/LandingPage";
import Kompetisi from "./pages/Kompetisi";
import EduEntertaiment from "./pages/EduEntertaiment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <LandingPage></LandingPage>
              </Route>

              <Route path="/Prestasi">
                <Prestasi></Prestasi>
              </Route>

              <Route path="/AboutUs">
                <About></About>
              </Route>

              <Route path="/Internship">
                <Internship></Internship>
              </Route>

              <Route path="/EduEntertaiment">
                <EduEntertaiment></EduEntertaiment>
              </Route>
              <Route path="/Prestasi">
                <Prestasi></Prestasi>
              </Route>
              <Route path="/Kompetisi">
                <Kompetisi></Kompetisi>
              </Route>
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
      </div>
    );
  }
}
