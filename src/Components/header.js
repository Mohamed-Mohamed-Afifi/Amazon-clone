import React, { Fragment } from "react";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "../componentStyle/nav.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Log from "./log";
import Linkcontainer from "./linkcontainer";
import LinkOne from "./link1";
import LinkTwo from "./link2";
// import { useNavigate } from "react-router-dom";
const Navv = () => {
  // const routee = useNavigate()
  return (
    <Fragment>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" width="100" heigth="100" className="d-inline-block align-top" alt="Amazon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink to="/footer">foolter</NavLink>
              <NavLink to="/linkcontainer">linkContainer</NavLink>
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faCoffee} />
              </Button>
            </Nav>
            <Form className="d-flex col-8">
              <FormControl type="search" placeholder="Search" />
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faCoffee} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <Routes>
        <Route path="/footer" element={<Footer />} />
        <Route path="/linkcontainer" element={<Linkcontainer />} >
          <Route path="link1" element={<LinkOne />} />
          <Route path="link2" element={<LinkTwo />} />
        </Route>
        <Route path="*" element={<Log />} />
      </Routes>
    </Fragment>
  );
}
export default Navv;