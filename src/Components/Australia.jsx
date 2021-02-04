import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './StateData';

class Australia extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-12">
            <img src="https://www.countryflags.io/au/shiny/64.png" />
            <h2>Australia</h2>

            </div>
            
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-3">
                    
                    <Card className ="badge badge-primary" style={{ width: '18rem' }}>
  <Card.Body className='text-center'>
    <Card.Title>Total 
    cases of Covid</Card.Title>
    <Card.Subtitle className="mb-2">12398</Card.Subtitle>
    <Card.Text>
     [Today total:25]
    </Card.Text>
    
  </Card.Body>
</Card>
                             
                    
                    
                    </div>         
                <div className="col-md-3">
                    
                    <Card className ="badge badge-warning" style={{ width: '18rem' }}>
  <Card.Body className='text-center'>
    <Card.Title>Active cases 
    </Card.Title>
    <Card.Subtitle className="mb-2">12398</Card.Subtitle>
    <Card.Text>
     [Today total:25]
    </Card.Text>
    
  </Card.Body>
</Card>
                    
                    
                    
                    
                    
                    </div>         
                <div className="col-md-3">
                    
                    <Card className ="badge badge-success" style={{ width: '18rem' }}>
  <Card.Body className='text-center'>
    <Card.Title>Recovered 
    </Card.Title>
    <Card.Subtitle className="mb-2">12398</Card.Subtitle>
    <Card.Text>
     [Today total:25]
    </Card.Text>
    
  </Card.Body>
</Card>
                    
                    
                    
                    
                    
                    </div>         
                <div className="col-md-3">
                    
                    <Card className ="badge badge-danger" style={{ width: '18rem' }}>
  <Card.Body className='text-center'>
    <Card.Title>Total 
    Deaths</Card.Title>
    <Card.Subtitle className="mb-2">12398</Card.Subtitle>
    <Card.Text>
     [Today total:25]
    </Card.Text>
    
  </Card.Body>
</Card>
                    
                    
                 
                    
                    </div>         
                
            </div>
             </div>   
             <div className="col-md-12">
                 < Statedata />
             </div>
            </div>
            
            

            
            
        );
    }
}

export default Australia;