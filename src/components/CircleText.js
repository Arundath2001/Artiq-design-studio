import React from "react";
import './CircleText.css';
import logofrom from "../assets/logo_text.png";

function CircleText(){
    return(
        <div className="circletext">
        <svg className="circlesvg" viewBox="0 0 100 100" width="50" height="50">
        <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: "#33FFF3", stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: "rgba(51, 255, 243, 0)", stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: "#FFF500", stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: "rgba(255, 245, 0, 0)", stopOpacity: 0 }} />
            </radialGradient>
            <radialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: "#E964FD", stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: "rgba(233, 100, 253, 0)", stopOpacity: 0 }} />
            </radialGradient>
        </defs>

        <circle cx="25" cy="25" r="30" fill="url(#grad1)" />
        <circle cx="75" cy="25" r="30" fill="url(#grad2)" />
        <circle cx="50" cy="75" r="30" fill="url(#grad3)" />

        <defs>
            <path id="circle"
                d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"/>
        </defs>
        <text fontSize="7.5">
            <textPath href="#circle">
                Shaping Brands : Your Design & Marketing catalyst ! crafting Connections,
            </textPath>
        </text>

        <image x="30" y="30" width="40" height="40" href={logofrom} />
    </svg>
        </div>
    );
}

export default CircleText;