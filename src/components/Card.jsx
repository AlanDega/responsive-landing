import React from 'react';

import "./Card.css";

const Card = props => (
    <>
    <div >
    <div className="cardStyle">
       hey  
    </div>
   
        {/* <img src={props.image} /> */}
        <h3>{props.title}</h3>
        <p>{props.texto}</p>
    </div>
    <div className="cardStyle">
        {/* <img src={props.image} /> */}
        <h3>{props.title}</h3>
        <p>{props.texto}</p>
    </div>
    <div className="cardStyle">
        {/* <img src={props.image} /> */}
        <h3>{props.title}</h3>
        <p>{props.texto}</p>
    </div>
    <div className="cardStyle">
        {/* <img src={props.image} /> */}
        <h3>{props.title}</h3>
        <p>{props.texto}</p>
    </div>
    </>
)

export default Card;