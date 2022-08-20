import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { filterby } from './redux/filterReducer';
import { filterby } from './redux/filterReducer'
// import { decAction, incAction } from './redux/actions';
const Test = () => {
    // let [count, setCount] = useState(0);
    // let { count } = useSelector(state => state.counter)
    let [btntype, setbtnType] = useState("")
    const dispatch = useDispatch();
    // dispatch(getData())
    let data = useSelector(state => state.filterElements.data)

    // const handelIncrement = () => {
    //     console.log(data, "hi")
    //     dispatch(getData());
    // }
    // const handelDecrment = () => {
    //     console.log(count)
    //     dispatch(decrement());
    // }
    // useEffect(() => {

    //     console.log("hi", data)
    // })
    const cliFilter = (e) => {
        setbtnType(e.target.innerHTML)
        dispatch(filterby(e.target.innerHTML))
    }

    return (
        <div>
            <button onClick={(e) => cliFilter(e)}>All</button>
            {
                data.map((el, ind) => (
                    <button key={ind} onClick={(e) => cliFilter(e)}>{el.type}</button>
                ))
            }
        </div >
    )
}

export default Test