import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display_name: '',
            lat: '',
            lon: '',
            errFlag: false,
            mapFlag: false
        }
    }
    HandelSubmit = async (e) => {
        e.preventDefault()
        let city = e.target.city.value;
        let URL = `https://us1.locationiq.com/v1/search?key=pk.57a199bcfe225e9ac35bbf60e9947079&q=${city}&format=json`

        try {

            let allData = await axios.get(URL)
            //weather api
            console.log(allData)
            this.setState({
                display_name: allData.data[0].display_name,
                lat: allData.data[0].lat,
                lon: allData.data[0].lon,
                mapFlag: true
            })


        }
        catch {
            this.setState({
                errFlag: true
            })
        }
    }
    render() {
        return (
            <div className='main'>
                <Form onSubmit={this.HandelSubmit}>
                <h1>Search about your city</h1>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="text" name="city" placeholder="Enter the city" />
                        <Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card>
          {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.57a199bcfe225e9ac35bbf60e9947079&center=${this.state.lat},${this.state.lon}`} alt="img"></img>}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              <h3>Display name : {this.state.display_name}</h3>
              <p>Lon : {this.state.lon}</p>
              <p>Lat : {this.state.lat}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    
    </Row>
                       
                        
                        {this.state.errFlag && <h4>Error : sorry something went wrong!</h4>}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
      
            </div>
        )
    }
}

export default App;