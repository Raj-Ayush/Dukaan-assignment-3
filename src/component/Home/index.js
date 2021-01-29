import React from 'react';
import './style.css';
import Dukan from './../Dukan/index';
import Market from './../Market/index';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div class="home">
        <div class="left">
            <Dukan />
        </div>
        <div class="right">
            <Market />
        </div>
    </div>
   )

 }

export default Home