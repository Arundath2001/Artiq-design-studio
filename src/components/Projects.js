import React from "react";
import './Projects.css';
import NumText from "./NumText";
import Images from "./Images";

function Projects(){

    const texts = [
        {number : "13" , text : "PROJECTS COMPLETED"},
        {number : "13" , text : "HAPPY CLIENTS"},
        {number : "25K" , text : "IN REVENUE"},
    ];

    return(
        <div className="projects">
            <div className="projects_text">
                {
                    texts.map((text , index)=>(
                        <NumText key={index} number={text.number} text={text.text} />
                    ))
                }
            </div>

            <Images />
        </div>
    );
}

export default Projects;