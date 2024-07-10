import React from "react";
import './Footer.css';
import FooterText from "./FooterText";
import arrow from "../assets/arrow.png";


function Footer(){

    const footerData = [
        {text1 : "GET IN TOUCH" , img : arrow , bold : "bold"},
        {text1 : "KAKKAD, KANNUR", text2 : "KERALA" , view : "view"},
        {text1 : "+91-7356950499" , text2 : "contactartiqdesign@gmail.com" , href1 : "tel:7356950499" , href2 : "mailto:contactartiqdesign@gmail.com" },
        {text1 : "Instagram" , text2 : "Whatsapp" , href1 : "https://www.instagram.com/artiq__designs?igsh=ZDY3dDFkbnMxOHBy" , href2 : "https://wa.me/message/M64ZUFCUWCQNI1"},
    ];

    return(
        <div className="footer">
            {
                footerData.map((data , index)=>(
                    <FooterText key={index} view={data.view} href1={data.href1} href2={data.href2} text1={data.text1} text2={data.text2} text3={data.text3} img={data.img} bold={data.bold} />
                ))
            }
        </div>
    );
}

export default Footer;