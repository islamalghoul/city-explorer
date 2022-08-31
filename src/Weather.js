import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export class Weather extends Component {
  constructor(){
    super()
    this.state={
      errFlag:false,
      description:"",
      date: "",
      array:[] 
    }
  }
  handelSubnmit= async (e)=>{
    e.preventDefault()
let city=e.target.city.value
let longitude=e.target.longitude.value
let latitude=e.target.latitude.value
let url=`${process.env.REACT_APP_URL}weather?name=${city}&lon=${longitude}&lat=${latitude}`
console.log(url)
//http://localhost:3100/weather?name=cityname&lon=lon&lat=lat
//https://firstweatheerapp.herokuapp.com/weather?name=cityname&lon=lon&lat=lat
try {
let result= await axios.get(url);
let data=result.data
console.log(data)
this.setState({
  array: data
})
}
catch{
  this.setState({
    errFlag: true
})
}
  }
  render() {
    return (
      
        <Form onSubmit={this.handelSubnmit} className='formWeather'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1>Weather</h1>
          <Form.Control type="text" placeholder="Enter the city" name="city" />
          <Form.Text className="text-muted">
           
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter the longitude " name="longitude"/>
          <Form.Text className="text-muted">
           
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter the latitude" name="latitude" />
          
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
        { this.state.errFlag&& <h4>Error : sorry something went wrong!</h4>}

        
        <Row xs={1} md={2} className="g-4">
      {this.state.array.map((ele,i)=>{
      return(
        
     
        <Col>
          <Card className='cardwither'>
            
            <Card.Body>
              <Card.Title> <h1>Day{i} </h1></Card.Title>
              <Card.Text>
             
        <h5>description:{ele.description}</h5>
        <h5>date:{ele.date}</h5>
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

export default Weather

