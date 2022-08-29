import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class Weather extends Component {
  constructor(){
    super()
    this.state={
      errFlag:false,
      description:"",
      date: ""
    }
  }
  handelSubnmit= async (e)=>{
    e.preventDefault()
let city=e.target.city.value
let longitude=e.target.longitude.value
let latitude=e.target.latitude.value
let url=`${process.env.REACT_APP_URL}weather?name=${city}&lon=${longitude}&lat=${latitude}`
console.log(url)
//localhost:3000/weather?name=cityname&lon=lon&lat=lat
try {
let result= await axios.get(url);
let data=result.data
console.log(data)
this.setState({
  description:data.data[0].weather.description,
    date:data.data[0].datetime
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
        <Form onSubmit={this.handelSubnmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
          <Form.Text className="text-muted">
         
          </Form.Text>
        </Form.Group>
        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
       <p>description:{this.state.description} </p>
        <p> date:{this.state.date}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
      </Form>
    )
  }
}

export default Weather

