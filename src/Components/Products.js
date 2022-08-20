import React, { Fragment, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Cards from './Cards';
// import axios from 'axios';

const Products=()=> {
  const [data,setState]=useState([
    {
      name:"food",
      email:"mo@gmail.com",
      type:"food"
    },
    {
      name:"food",
      email:"mo@gmail.com",
      type:"food"
    },
    {
      name:"food",
      email:"mo@gmail.com",
      type:"food"
    },
    {
      name:"electronics",
      email:"mo@gmail.com",
      type:"electronics"
    },
    {
      name:"electronics",
      email:"mo@gmail.com",
      type:"electronics"
    },
    {
      name:"electronics",
      email:"mo@gmail.com",
      type:"electronics"
    },
  ]);
  // const url="https://jsonplaceholder.typicode.com/users";
  // axios.get(`${url}`).then((res)=>{
  //   setState(res.data)
  // })
const delElement=(e,ind)=>{
  const newState=data.filter((el,idx)=>ind !== idx)
  setState(newState)
  console.log(data)
}
const filterElement=(e)=>{
  let type=e.target.getAttribute("type");
  const newState=data.filter((el)=>el.type == type)
  setState(newState)
  console.log(e.target.getAttribute("type"))
}
console.log(data)
  // React use state to updata data
  return (
    <Fragment>
      <section className='product-section my-4'>
          <Container>
              <Row>
                  <Cards contentList={data} type="hardware" delElement={delElement}/>
              </Row>
          </Container>
      </section>
    </Fragment>
    
  )
}

export default Products