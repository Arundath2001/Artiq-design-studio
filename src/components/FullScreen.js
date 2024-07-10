import React, { useState, useEffect } from "react";
import './FullScreen.css';
import logo from "../assets/Logo.png";
import ButtonNav from "./ButtonNav";
import FooterText from "./FooterText";
import arrowblack from "../assets/arrowblack.png";

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

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        const offset = -50; // Adjust this value to set the desired offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        setClosing(true);
    };

    const details1 = [
        { text1: "KAKKAD, KANNUR", text2: "KERALA" },
        { text1: "ENGLISH" },
    ];

    const details2 = [
        { text1: "+91-7356950499", text2: "contactartiqdesign@gmail.com", href1: "tel:7356950499", href2: "mailto:contactartiqdesign@gmail.com" },
        { row: "row", text1: "Instagram", text2: "Whatsapp", href1: "https://www.instagram.com/artiq__designs?igsh=ZDY3dDFkbnMxOHBy", href2: "https://wa.me/message/M64ZUFCUWCQNI1" },
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
                    <p className="links" onClick={() => handleScroll('home')}>HOME <img src={arrowblack} alt="black arrow" /> </p>
                    <p className="links" onClick={() => handleScroll('work')}>WORK <img src={arrowblack} alt="black arrow" /> </p>
                    <p className="links" onClick={() => handleScroll('service')}>SERVICE <img src={arrowblack} alt="black arrow" /> </p>
                    <p className="links" onClick={() => handleScroll('contact')}>CONTACT <img src={arrowblack} alt="black arrow" /> </p>
                </div>

                <div className="fullscreen_down">
                    <div className="fullscreen_details">
                        {details1.map((detail, index) => (
                            <FooterText key={index} color="black" text1={detail.text1} text2={detail.text2} href1={detail.href1} href2={detail.href2} />
                        ))}
                    </div>

                    <div className="fullscreen_details">
                        {details2.map((detail, index) => (
                            <FooterText row={detail.row} key={index} color="black" text1={detail.text1} text2={detail.text2} href1={detail.href1} href2={detail.href2} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullScreen;
