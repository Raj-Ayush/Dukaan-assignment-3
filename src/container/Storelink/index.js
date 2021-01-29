import React from 'react'
import './style.css';

/**
* @author
* @function StoreLink
**/

const StoreLink = (props) => {
  return(
    <div  className="store">
        <div className="stLink-arr">
            <h5 className="store-link">Share store link</h5>
            <p>Last Month 
                <img src="./images/arrdown.svg"  alt="arrow-down" />
            </p>
        </div>
        <div className="content">
            <div className="first">
                <p>Your customers can visit online store
                    and place the orders from this link.
                </p>
                <a href="/"><p>mydukaan.io/manosupermarket</p></a>
                <p>Share via</p>
                <div className="link">
                    <img src="./images/fb.svg"  alt="fb"/>
                    <img src="./images/whatsapp.svg" alt="whtsap"/>
                    <img src="./images/twitter.svg" alt="twitter"/>
                </div>
            </div>
            <div className="second">
                <div className="second1">
                    <h5>ORDERS</h5>
                    <h2>192</h2>
                </div>
                <div className="second2">
                    <h5>STORE VIEWS</h5>
                    <h2>96</h2>
                </div> 
            </div>
            <div className="third">
                <div className="third1">
                    <h5>TOTAL SALES</h5>
                    <h2>1,55,920</h2>
                </div>
                <div className="third2">
                    <h5>PRODUCT VIEWS</h5>
                    <h2>2,313</h2>
                </div> 
            </div>
        </div>
    </div>
   )

 }

export default StoreLink