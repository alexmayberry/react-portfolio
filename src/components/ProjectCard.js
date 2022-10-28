import React from "react";

function ProjectCard(props) {
    return (
        <div>
            <h1>{props.projectData.name}</h1>
            <p>{props.projectData.description}</p>
            <p>test</p>
            <div>
                <img src={props.projectData.image} alt={props.projectData.name}></img>
            </div>
            
        </div>
    )
}

export default ProjectCard;