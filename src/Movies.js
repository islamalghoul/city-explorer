import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export class Movies extends Component {
constructor(){
    super()
    this.state={
        errFlag:false,
array:[]

    }
}
handelSubnmit= async (e)=>{
    e.preventDefault()
let city=e.target.city.value
let url=`${process.env.REACT_APP_URL}movies?name=${city}`

try {
    
 await axios.get(url).then(result=>{
  console.log(result.data)
 this.setState({
  array:result.data
 })
}); 

}
catch{
  this.setState({
    errFlag: true
})
}
  }


  render() {
    return (
        <Form onSubmit={this.handelSubnmit} className='formMoves'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
      <h1>Movies</h1>
          <Form.Control type="text" placeholder="Enter the city" name="city" />
         
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
        <Row xs={1} md={2} className="g-4">
       
   
      
      {this.state.array.map((ele,i)=>{
         return(
        <Col>
          <Card className='cardMovies' >
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+ele.image_url} className='moviesImgs'/>
            <Card.Body>
              <Card.Title>titel :{ele.title}</Card.Title>
              <Card.Text>
              <p>overview:{ele.overview}</p>
        <p>popularity:{ele.popularity}</p>
        <p>release_date:{ele.release_date}</p>
        <p>vote_average:{ele.vote_average}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )})}
    </Row>
  
        
        </Form>

    
    )
  }
}

export default Movies