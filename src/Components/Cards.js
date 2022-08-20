
import React, { Fragment } from 'react'
import {Card,Button} from 'react-bootstrap';
const Cards=({contentList,delElement})=>{
  return (
  <Fragment>
  {
    contentList.map(({name,email},ind)=>(
    <Card className="p-0 col-lg-4 border-0 my-4" key={ind} type={contentList.type}>
    <div className='col-12'>
    <div className="border">
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51TMgYvxI9L._AC_SY350_.jpg" width="200"/>
      <Card.Body>
        <Card.Text>{name}</Card.Text>
        <Card.Text><del>{email}</del></Card.Text>
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
