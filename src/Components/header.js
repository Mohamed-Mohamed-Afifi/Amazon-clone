import React,{Fragment} from "react";
import { Container,Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "../componentStyle/nav.scss";
const Navv=()=>{
    return(
        <Fragment>
        <Navbar expand="lg">
           <Container>
           <Navbar.Brand href="#">
           <img src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" width ="100" heigth="100" className="d-inline-block align-top" alt="Amazon"/>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav>

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
        </Fragment>
    );
}
export default  Navv;