import React from "react";
import ElipseCard from "./ElipseCard";
import './Elipse.css';
import elipse1 from "../assets/elipse1.jpg";
import elipse2 from "../assets/elipse2.jpg";
import elipse3 from "../assets/elipse3.jpg";
import elipse4 from "../assets/elipse4.jpg";
import elipse5 from "../assets/elipse5.jpg";
import elipse6 from "../assets/elipse6.jpg";
import elipse7 from "../assets/elipse7.jpg";
import elipse8 from "../assets/elipse8.jpg";


function Elipse(){

    const contents = [
        {image1 : elipse1, image2 : elipse2 , color : "green"},
        {image1 : elipse3, image2 : elipse4 , color : "yellow" },
        {image1 : elipse5, image2 : elipse6 , color : "blue"},
        {image1 : elipse7, image2 : elipse8 , color : "pink" },
    ];

    return(
        <div className="elipse">
            {
                contents.map((content , index)=>(
                    <ElipseCard color={content.color} id={content.id} key={index} elipse1={content.image1} elipse2={content.image2} />
                ))
            }
        </div>
    );
}

export default Elipse;