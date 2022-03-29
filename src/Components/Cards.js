
import React, { Fragment } from 'react'
import {Card,Button} from 'react-bootstrap';
const Cards=({contentList,type,delElement})=>{
  return (
  <Fragment>
  {
    contentList.map((el,ind)=>(
    <Card className="p-0 col-lg-4 border-0 my-4" key={ind}>
    <div className='col-12'>
    <div className="border" style={{backgroundColor:type==="hardware"? "green" : "blue"}}>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51TMgYvxI9L._AC_SY350_.jpg" width="200"/>
      <Card.Body>
        <Card.Text>{el.name}</Card.Text>
        <Card.Text><del>{el.email}</del></Card.Text>
        <Button variant="primary" onClick={(e)=>{delElement(e,ind)}}>Go somewhere</Button>
      </Card.Body>
    </div>
    </div>
    </Card>
  ))
  }
  </Fragment>
  )
}

export default Cards
