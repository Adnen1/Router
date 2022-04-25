import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {data} from '../data/Data'

function Carde ({el}){
return(
<Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={el.img} className="imp" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>
    <Link to={`/watchtrailer/${el.id}`}><Button variant="primary" >Trailer</Button></Link>
  </Card.Body>
</Card>
)
}
export default Carde