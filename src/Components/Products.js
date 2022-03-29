import React, { Fragment, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Cards from './Cards';
// import axios from 'axios';

const Products=()=> {
  const [data,setState]=useState([
    {
      name:"samon",
      email:"mo@gmail.com"
    },
    {
      name:"mohamed",
      email:"mo@gmail.com"
    },
    {
      name:"amira",
      email:"mo@gmail.com"
    }
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