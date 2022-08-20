import React, { useRef, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { validEmail } from "./redux/fetchData";
import { addUser } from "./redux/testApi";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Log = () => {
    const trueStat = `valid`
    const falseStat = `not valid`
    const [val, setval] = useState();
    const emailCheck = useSelector((state) => state.checker.emailCheck)
    const passwordCheck = useSelector((state) => state.checker.passwordCheck)
    // const eemail = useSelector((state) => state.add.userData.email)
    const mailIn = useRef();
    const passIn = useRef();
    const dispatch = useDispatch();
    const [email, setemails] = useState();
    const [uname, setuname] = useState();
    const routee = useNavigate()
    const checkValid = (e) => {
        e.preventDefault();
        setval(mailIn.current.Value)
        setemails(mailIn.current.Value)
        setuname(passIn.current.value)
        console.log(val)
        dispatch(validEmail(val))
        console.log(emailCheck)
        // dispatch(addUser({ email: "mmmm", uname: "mohamed" }))
        routee('/footer')
    }
    // const reff = useRef()
    // useEffect(() => {
    //     console.log(reff)
    // })
    return (
        <Container>
            <Form onSubmit={checkValid} method="POST">
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for=" Email">
                                {emailCheck}
                            </Label>
                            <Input
                                ref={mailIn}
                                id="Email"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                onChange={(e) => setval(e.target.value)}

                            />
                            <p className="px-2">{emailCheck ? trueStat : falseStat}</p>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for=" Password">
                                {passwordCheck}
                            </Label>
                            <Input
                                ref={passIn}
                                id=" Password"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for=" Address">
                        Address
                    </Label>
                    <Input
                        id=" Address"
                        name="address"
                        placeholder="1234 Main St"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for=" Address2">
                        Address 2
                    </Label>
                    <Input
                        id=" Address2"
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for=" City">
                                City
                            </Label>
                            <Input
                                id=" City"
                                name="city"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for=" State">
                                State
                            </Label>
                            <Input
                                id=" State"
                                name="state"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for=" Zip">
                                Zip
                            </Label>
                            <Input
                                id=" Zip"
                                name="zip"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Input
                        id=" Check"
                        name="check"
                        type="checkbox"
                    />
                    <Label
                        check
                        for=" Check"
                    >
                        Check me out
                    </Label>
                </FormGroup>
                <Button>
                    Sign in
                </Button>
            </Form>
        </Container>

    )
}
export default Log;