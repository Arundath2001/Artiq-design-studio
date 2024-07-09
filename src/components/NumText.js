import React from "react";
import './NumText.css';

function NumText(props){
    return(
        <div className="numtext">
            <h5 className="numtext_heading">{props.number}</h5>
            <p className="numtext_para">{props.text}</p>
        </div>
    );
}

export default NumText;