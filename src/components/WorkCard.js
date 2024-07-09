import React from "react";
import './WorkCard.css';

function WorkCard(props){
    return(
        <div className="workcard">
            <img className="workcard_img" src={props.img1} alt="workimage" />
            <img className="workcard_img" src={props.img2} alt="workimage" />
        </div>
    );
}

export default WorkCard;