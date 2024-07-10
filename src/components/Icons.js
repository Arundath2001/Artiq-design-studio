import React from "react";
import "./Icons.css";

function Icons(props){
    return(
        <div className="icons">
            <a href={props.href1}><img src={props.img1} alt="icon" /></a>
            <a href={props.href2}><img src={props.img2} alt="icon" /></a>
        </div>
    );
}

export default Icons;