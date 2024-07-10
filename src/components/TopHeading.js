import React from "react";
import './TopHeading.css';

function TopHeading(props){
    return(
        <div id="home" className={`topheading ${props.align}`}>
            <div className="heading">
                {
                    props.heading.map((line,index)=>(
                        <span key={index}>{line}</span>
                    ))
                }
            </div>

            <div className="paragraph">
                {
                    props.paragraph.map((line,index)=>(
                        <span key={index}>{line}</span>
                    ))
                }
            </div>
        </div>
    );
}

export default TopHeading;