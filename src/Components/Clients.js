import React, { Fragment, useState } from 'react';
import styles from "../componentStyle/client.module.css";
const Client = ({ DData, type }) => {
    // console.log(DData)
    // const getName=(obj)=>{
    //     return obj.name
    // }
    // const getEmail=(obj)=>{
    //     return obj.email
    // }
    // Example on regular function
    // let count=0;
    // const increment=()=>{
    //     count++;
    //     console.log(count)
    // }
    const [oldcount,] = useState(0);
    // const [DDatas,setDData]=useState(DData)
    // // const [value,setValue]=useState("");
    // // const changeValue=(e)=>{
    // //     setValue(e.target.value)
    // // }

    // const update=(e,index)=>{
    //     let remamin=DDatas
    //     setDData(remamin.filter((el,ind)=>ind == index))
    //     setnewcount(oldcount+1)
    //     console.log(index)
    //     setDData(DDatas)
    // //    let key= getkey(e)
    // //    console.log(key)

    // }
    // const getkey=(e)=>{
    //     let parent =e.target.parentElement;
    //     let key_index=parent.getAttribute("key_data");
    //     return key_index;
    // }
    // const Del=(e)=>{
    //    let key= getkey(e)
    //    setDData( DDatas.filter((el,ind)=> ind != key ))
    //    console.log(DDatas)
    // }
    const client1 = DData.map(({ name, email }, ind) => (
        <div className="card col-lg-4 mb-4" key={ind} key_data={ind} style={{ color: type === "important" ? "red" : "green" }}>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <input type="text" />
            <h1>{oldcount}</h1>
            <button className={styles.close}>x</button>
        </div>

    ));

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {client1}
                </div>
            </div>
        </Fragment>
    )
}

export default Client;
