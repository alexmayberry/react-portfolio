import React from "react";
import ProjectCard from "./ProjectCard";
//import tools from "../data/toolsData.json"
import {projects} from "../data/projectData";


function Portfolio(props) {
    return (
        <div id="portfolio">
            { projects.map((projects) => (
            <ProjectCard projectData={projects} />
            ))}
        </div>
    );
}

export default Portfolio;