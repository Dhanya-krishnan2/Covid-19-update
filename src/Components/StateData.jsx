import React, { Component } from 'react';

import {Accordion, Card, Button} from "react-bootstrap";
const axios = require('axios').default;
class Statedata extends Component {
    constructor(){
        super();
        this.state = {
            StateData : {

            }
        }
    }
    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
        this.setState({StateData:response.data});
        });
    }
    render() {
        let keys = Object.keys(this.state.StateData)
        return (
            <div className='row'>
                <div className="col-md-12">
                <Accordion>
                 {
                     keys.map((itm,keys) => {
                         let districts = this.state.StateData[itm].districtData;
                         let district_keys = Object.keys(districts);
                      return(
                        <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>

                      )
                     })
                 }
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
                </div>
            </div>
        );
    }
}

export default Statedata;