import React from "react";
import "./ButtonNav.css";

function ButtonNav(props){
    return(
        <div className="buttonnav" onClick={props.handle}>
            <p className={`buttonnav_para ${props.color}`}>{props.text}</p>
            <div className="buttonnav_lines">
                <div className={`buttonnav_line ${props.color}`}></div>
                <div className={`buttonnav_line ${props.color}`}></div>
            </div>
        </div>
    );
}

export default ButtonNav;