
import React from 'react';
import { Form,Button, Row} from 'react-bootstrap';
import image from "../images/image 6.png"

const CartDetails = () => {
    return (
        <div className="container">
            <Row  className="mx-auto" >
            <Form style={{marginRight:"40px",color:"white"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="text" placeholder="Where from" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>TO</Form.Label>
                        <Form.Control type="text" placeholder="Where To" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                    </Form>
            
            
                <img style={{ maxWidth:"100%",
                height:"auto" }} src={image} alt="" />
            

            </Row>
            
        </div>
    );
};

export default CartDetails;