import React from "react";
import './CircleText.css';
import logoform from "../assets/logo_text.png";

function CircleText(){
    return(
        <div className="circletext">
            <img className="circletext_img" src={logoform} alt="logo" />
        </div>
    );
}

export default CircleText;