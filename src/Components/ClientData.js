import React, { Fragment, useState } from 'react';
import Client from "./Clients";
import "../componentStyle/clientTest.css";
import SectionFilter from "./SectionFilter";

const ClientFactory = () => {
  const initialState = [
    {
      name: "food",
      email: "mo@gmail.com",
      type: "food"
    },
    {
      name: "pc",
      email: "mo@d.com",
      type: "electronics"
    },
    {
      name: "drink",
      email: "mo@yaa.com",
      type: "food"
    },
  ]
  const [clientData, setClientData] = useState(initialState);
  const [btnData,] = useState([
    {
      type: "food",
    },
    {
      type: "electronics",
    },
    {
      type: "drink",
    },

  ]);
  const getType = (e) => {
    let clickElement = e.target;
    let type = clickElement.getAttribute("type");
    // console.log(type)
    return type;

  }
  // const clearState = () => {
  //   setClientData({ ...initialState });
  // };

  const dataFilter = (e) => {
    let type = getType(e);

    setClientData(clientData.filter((el) => el.type === type))

    console.log(clientData)

  }
  // useEffect(() => { setClientData(initialState) }, [])
  return (
    <Fragment>
      <SectionFilter btndata={btnData} filterFun={dataFilter} />
      <Client DData={clientData} type={"important"} />
      <Client DData={clientData} type={"wraning"} />
    </Fragment>

  )
}

export default ClientFactory;