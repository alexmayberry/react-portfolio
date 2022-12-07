import React from "react";
import ProjectCard from "../ProjectCard";
import {projects} from "../../data/projectData";
import { Box, Grid } from "@mui/material";

// implement project rating sort function to sort projects based on my own quality rating.

function Portfolio(props) {
    return (
        <Box 
        sx={{ 
            flexGrow: 
            1
        }} 
        style={{ 
            display:"block", 
            marginLeft:"auto", 
            marginRight:"auto", 
            maxWidth:"80vw" 
        }}
        >
            <h1>Work</h1>
            <Grid 
            container 
            spacing={4} 
            direction={"row"} 
            id="work"
            >
                    { projects.map((projects) => (
                    <Grid 
                    item 
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3} 
                    >
                        <ProjectCard 
                        projectData={projects} 
                        />
                    </Grid>
                    ))}
            </Grid>
        </Box>
    );
}

export default Portfolio;