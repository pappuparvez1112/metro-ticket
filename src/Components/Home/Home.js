import React, { useState } from 'react';

import './Home.css'
import FakeData from '../FakeData/FakeData.json'
import Cart from '../Cart/Cart';
import {  Row } from 'react-bootstrap';

const Home = () => {
    console.log(FakeData);
    const first3=FakeData.slice(0,3);
    const [cart,setCart]=useState(first3);
    
    
    return (
        
           <div className='container'>
                <Row className="mx-auto">
                    
                   {
                        // cart.map(cart=><Cart>cart={cart}</Cart>)
                        cart.map(cart=><Cart cart={cart} key={cart.id}> </Cart>)
                    }
                    

                </Row>
                   
                 
                
                   
                
           </div>
        
    );
};

export default Home;