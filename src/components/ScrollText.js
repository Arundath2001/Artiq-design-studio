import React from "react";
import './ScrollText.css';

function ScrollText(props){
    return(
        <div className="scrolltext">
            <h4>{props.text}</h4>
        </div>
    );
}

export default ScrollText;