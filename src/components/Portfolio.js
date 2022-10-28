import React, { useState } from "react";
import ProjectCard from './ProjectCard.js';
import {projects, tools} from "../projectData";

const styles = {
    portfolio: {
        margin: 20,
        backgound: '#e8eaf6'
    }
}


function Portfolio(props) {
    console.log(props);
    return (
        <div style={styles.portfolio}>
            <p>{props.name}</p>
            { projects.map((projects) => (
            <ProjectCard projectData={projects} />
            ))}
        </div>
    )
};

export default Portfolio;