import React from 'react'
import { Button } from 'react-bootstrap'
import './style.css';

/**
* @author
* @function Dukaan
**/

const Dukan = (props) => {
  return(
      <div>
            <div className="dukaan-icon">
                <img src="./images/Dukaanicon.svg" alt="icon" />
            </div>
            <div className="btngrp"> 
              <Button variant="light" id="leftbtn">
                <img src="./images/home.svg" alt="order" />
                <div>Home</div>
              </Button>
              <Button variant="light" id="leftbtn">
                <img src="./images/orders.svg" alt="order" />
                <div>Orders</div></Button>
              <Button variant="light" id="leftbtn">
                <img src="./images/products.svg" alt="order" />
                <div>Products</div>
                </Button>
              <Button variant="light" id="leftbtn">
                <img src="./images/Marketing.svg" alt="order" />
                <div>Marketing</div>
                </Button>
              <Button variant="light" id="leftbtn">
                <img src="./images/Account.svg" alt="order" />
                <div>Accounts</div>
                </Button>
            </div>
           
      </div>
    
   )

 }

export default Dukan