import React, { useState, useEffect } from "react";
import './FullScreen.css';
import logo from "../assets/Logo.png";
import ButtonNav from "./ButtonNav";
import FooterText from "./FooterText";

function FullScreen(props) {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (closing) {
            const timer = setTimeout(() => {
                props.close();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [closing, props]);

    const handleClose = () => {
        setClosing(true);
    };

    const details1 = [
        {text1 : "KAKKAD, KANNUR", text2 : "KERALA"},
        {text1 : "ENGLISH"},
    ];

    const details2 = [
        {text1 : "+91-7356950499" , text2 : "contactartiqdesign@gmail.com" , href1 : "tel:7356950499" , href2 : "mailto:contactartiqdesign@gmail.com" },
        { row:"row" , text1 : "Instagram" , text2 : "Whatsapp" , href1 : "https://www.instagram.com/artiq__designs?igsh=ZDY3dDFkbnMxOHBy" , href2 : "https://wa.me/message/M64ZUFCUWCQNI1"},
    ];

    return (
        <div className={`fullscreen ${closing ? 'slide-up' : 'slide-down'}`}>
            <div className="fullscreen_left">
                <img src={logo} alt="logo" />
            </div>

            <div className="fullscreen_right">
                <div className="fullscreen_btn">
                    <ButtonNav text="Close" handle={handleClose} color="black" />
                </div>

                <div className="fullscreen_links">
                    <a href="#home" className="links">HOME</a>
                    <a href="#Work" className="links">WORK</a>
                    <a href="#service" className="links">SERVICE</a>
                    <a href="#contact" className="links">CONTACT</a>
                </div>

                <div className="fullscreen_down">
                <div className="fullscreen_details">
                    {
                        details1.map((detail , index)=>(
                            <FooterText key={index} color="black" text1={detail.text1} text2={detail.text2} href1={detail.href1} href2={detail.href2} />
                        ))
                    }
                </div>

                <div className="fullscreen_details">
                    {
                        details2.map((detail , index)=>(
                            <FooterText row={detail.row} key={index} color="black" text1={detail.text1} text2={detail.text2} href1={detail.href1} href2={detail.href2} />
                        ))
                    }
                </div>
                </div>

            </div>
        </div>
    );
}

export default FullScreen;
