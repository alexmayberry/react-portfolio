import React from "react";
import ProjectCard from "./ProjectCard";
//import tools from "../data/toolsData.json"
import {projects} from "../data/projectData";


function Portfolio(props) {
    return (
        <>
            { projects.map((projects) => (
            <ProjectCard projectData={projects} />
            ))}
        </>
    );
}

export default Portfolio;