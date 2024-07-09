import React from "react";
import './ElipseCard.css';

function ElipseCard(props){
    return(
        <div id={props.id} className="elipsecard">
            <div className={`elipse_images ${props.color}`}>
                <img className="elipseimage" src={props.elipse1} alt="elipse" />
                <img className="elipseimage" src={props.elipse2} alt="elipse" />
            </div>
        </div>
    );
}

export default ElipseCard;