import { Button } from 'react-bootstrap';
import React from 'react'
import StoreLink from './../../container/Storelink/index';
import './style.css';
import Orderlist from './../../container/Orderlist/index';

/**
* @author
* @function Market
**/

const Market = (props) => {
  return(
    <div className="market">
        <div className="top">
            <h4>Mano Super Market
              <img src="./images/tick.svg" alt="tick" />
            </h4>
            <div className="how-tag">
              <p className="ques-tag">
                ?
              </p>
              <p className="how">
                How to use
              </p>
            </div>
        </div>
        <div className="middle">
            <StoreLink />
        </div>
        <div className="bottom">
            <div className="orders">
              <div className="ord-dis">
                <h5>Active Orders</h5>
                <p className="view">View all
                  <img src="./images/arrow.svg" alt="arrow" />
                </p>
              </div>
              <div className="btn-grp">
                <Button className="ord-btn">Pending (12)</Button>
                <Button className="ord-btn">Accepted(33)</Button>
                <Button className="ord-btn">Shipped (121)</Button>
              </div>
            </div>
            <div className="orderlist">
              <Orderlist />
            </div>
        </div>
    </div>
   )

 }

export default Market