import React,{Fragment} from 'react'
import { Container,Navbar,Nav,Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "../componentStyle/nav.scss";
const SectionFilter=()=> {
  return (
    <Fragment>
    <Navbar expand="lg" className='filter'>
       <Container>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav>

         <Button variant="outline-success">
         <FontAwesomeIcon icon={faCoffee} />
         </Button>
         </Nav>
       </Navbar.Collapse>
       </Container>
    
  </Navbar>
    </Fragment>
  )
}

export default SectionFilter
