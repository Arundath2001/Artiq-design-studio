import React from "react";
import './FooterText.css';

function FooterText(props){
    return(
        <div className={`footertext ${props.color} ${props.row}`}>
            
            {props.href1 ? (
                <a target="_blank" rel="noreferrer" href={props.href1} className={`footertext_para ${props.bold}`}>{props.text1}</a>
            ) : (
                <p className={`footertext_para ${props.bold} ${props.view}`}>{props.text1}</p>
            )

            }

            {props.img ? (
                <img className="footer_img" src={props.img} alt="arrow" />
            ) : (
                props.href2 ? (
                    <a target="_blank" rel="noreferrer" href={props.href2} className="footertext_para">{props.text2}</a>
                ) : (
                    <p className={`footertext_para ${props.view}`}>{props.text2}</p>
                )
            )}
        </div>
    );
}

export default FooterText;
