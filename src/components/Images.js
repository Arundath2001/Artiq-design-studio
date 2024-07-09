import React from "react";
import './Images.css';
import downimage1 from "../assets/downimage1.gif";
import downimage2 from "../assets/downimage2.png";
import downimage3 from "../assets/downimage3.png";

function Images(){
    return(
        <div className="images">
            <img className="images_1" src={downimage1} alt="images" />
            <img className="images_2" src={downimage2} alt="images" />
            <img className="images_3" src={downimage3} alt="images" />
        </div>
    );
}

export default Images;