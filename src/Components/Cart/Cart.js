


import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
import image from '../images/Group 33142.png'
import imageOne from '../images/Group 33141-1.png'




const Cart = (props) => {
    console.log(props);
    const {ticket,name,image}=props.cart;
    
    
    
    
    return (

        
            
            
            
                <Col md={4} className="p-3">
                {/* <h1 style={{color:"red"}}> dsljfglkhlkd;s{ticket}</h1>
            <h2>;sdkg;dg{name}</h2> */}
            <Card style={{width:"300px",marginBottom:"40px",background:"none"}}>
            <Card.Img src={image} alt="Card image" />
            
            
                <Card.Img variant="top" />
                <Card.ImgOverlay>
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold">{name}</Card.Title>
                    <br />
                     <br />
                    <Button as={Link} to="/Features" variant="primary">Primary</Button>
                    <br />
                     <br />
                    <Card.Text>
                        <br />
                         <br />
                        <h1>{ticket}</h1>
                        
                    </Card.Text>
                    
                </Card.Body>
                

                </Card.ImgOverlay>
               
            </Card>
            
        </Col>
        

            
           
            
            
        

        
    );
};

export default Cart;