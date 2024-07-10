import React from "react";
import './Service.css';
import serviceimg from "../assets/Serviceimg.png";

function Service(){
    return(
        <div id="service" className="service">
            <div className="service_top">
                <div className="heading">
                    Services
                </div>

                <img className="serviceimg" src={serviceimg} alt="service" />   

            </div>


                <div className="service_headings">
                    <div className="heading">
                        LOGO DESIGN
                    </div>
                    <div className="heading">
                        WEB DESIGN & DEVELOPMENT
                    </div>
                    <div className="heading">
                        SOCIAL MEDIA DESIGNS
                    </div>
                    <div className="heading">
                        PACKAGING DESIGNS           
                    </div>
                </div>

        </div>
    );
}

export default Service;
