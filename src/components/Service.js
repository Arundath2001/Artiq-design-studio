import React from "react";
import './Service.css';
import serviceimg from "../assets/Serviceimg.png";

function Service(){
    return(
        <div className="service">
            <div className="service_top">
                <div className="heading">
                    Services
                </div>

                <div className="service_headings">
                    <div className="heading">
                    GRAPHIC DESIGN
                    </div>
                    <div className="heading">
                    WEB DESIGN & DEVELOPMENT            
                    </div>
                    <div className="heading">
                    DIGITAL MARKETING            
                    </div>
                    <div className="heading">
                    CONTENT CREATION            
                    </div>
                </div>

            </div>

            <img className="serviceimg" src={serviceimg} alt="service" />   
        </div>
    );
}

export default Service;
