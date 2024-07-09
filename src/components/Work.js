import React from "react";
import './Work.css';
import WorkCard from "./WorkCard";
import workimg1 from "../assets/workimg1.png"
import workimg2 from "../assets/workimg2.png"
import workimg3 from "../assets/workimg3.png"
import workimg4 from "../assets/workimg4.gif"
import workimg5 from "../assets/workimg5.png"
import workimg6 from "../assets/workimg6.png"

function Work(){

    const images = [
        {image1 : workimg1 , image2 : workimg2},
        {image1 : workimg3 , image2 : workimg4},
        {image1 : workimg5 , image2 : workimg6},
    ];

    return(
        <div className="work">
            <div className="heading work">
                Our Works
            </div>
            <div className="work_images">
                {
                    images.map((image , index)=>(
                        <WorkCard key={index} img1={image.image1} img2={image.image2} />
                    ))
                }
            </div>
        </div>
    );
}

export default Work;