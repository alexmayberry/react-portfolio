import React from "react";
import ProjectCard from "./ProjectCard";

import {projects, tools} from "../projectData";


function Portfolio(props) {
    return (
        <>
            { projects.map((projects) => (
            <ProjectCard projectData={projects} tools={tools}/>
            ))}
        </>
    );
}

export default Portfolio;