import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, Button, InputGroupText, InputGroup, Input } from "reactstrap";
import "../componentStyle/todo.css"
const Todo = () => {
    const [oldState, setState] = useState([])
    const addItem = () => {
        let itemValue = document.getElementById("addItem").value;
        setState(oldState.concat(itemValue))


    }
    useEffect(() => {
        refrence.current.value = "we are here !"
    })
    const refrence = useRef();
    return (
        <Fragment>
            <Container>
                <div className="todo-list">
                    <input type="text" name="item" id="addItem" className="add-item" ref={refrence} />
                    <Button
                        color="primary"
                        outline
                        onClick={addItem}
                    >
                        Add
                    </Button>
                </div>
                {oldState.map((el, ind) => (
                    <InputGroup key={ind} className="our-list">
                        <InputGroupText>
                            <Input
                                addon
                                aria-label="Checkbox for following text input"
                                type="checkbox"
                            />
                        </InputGroupText>
                        <Input value={el} />
                    </InputGroup>
                ))}
            </Container>
        </Fragment>
    )
}
export default Todo;