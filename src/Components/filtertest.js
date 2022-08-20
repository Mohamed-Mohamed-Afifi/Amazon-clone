import React from "react";
import { useSelector } from "react-redux";
const Filtertest = () => {
    let data = useSelector(state => state.filterElements.data)
    let activeTy = useSelector(state => state.filterElements.activeType)
    console.log(activeTy)
    return (
        <div>
            {
                activeTy === "All" ? data.map((el, ind) => (<p key={ind}>{el.name}</p>)) : data.filter((el) => el.type === activeTy).map((el, ind) => (<p key={ind}>{el.name}</p>))
            }
        </div>
    )
}
export default Filtertest;