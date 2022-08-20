import React, { Fragment } from 'react'
import { Container, Navbar, Nav, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "../componentStyle/nav.css";
const SectionFilter = ({ filterFun, btndata }) => {
  const btnStruture = btndata.map((el, ind) => (
    <Button type={el.type} className="btn btn-outline-success" onClick={filterFun} key={ind}>{el.type}</Button>
  ))
  return (
    <Fragment>
      <Navbar expand="lg" className='filter'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {btnStruture}
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </Fragment>
  )
}

export default SectionFilter
