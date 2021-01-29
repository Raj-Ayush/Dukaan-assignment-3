import React from 'react'
import { orderlist } from './../../Data/Orderlist';
import './style.css'

/**
* @author
* @function Orderlist
**/

const Orderlist = (props) => {
    const orderList = orderlist.map((item)=>
        <div className="card" key={item.id}> 
            <div className="card-order">
                <div className="orderidimg">
                    <div className="ord-id">
                        <h5>Order {item.order_id}</h5>
                        <p>NEW</p>
                    </div>
                    <div className="imgprice">
                        <img src={item.img} alt="orderimg" />
                        <div className="price-item">
                            <p>{item.item}</p>
                            <h5>{item.currency+item.price}</h5>
                        </div>
                    </div>
                </div>
                <div className="timeDetails">
                    <p className="time">
                        {item.day}, {item.time}
                    </p>
                    <div className="details">
                        <p>Details
                            <img src="./images/arrow1.svg" alt="arrow" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
  return(
    <div className="orderlist">
        {orderList}
    </div>
   )

 }

export default Orderlist