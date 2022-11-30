import React from "react";
import photo from '../../images/alDubleDuble_gimp_crop.webp'
import tools from "../../data/toolsData.json"
import { Grid } from "@mui/material";

function About() {
    return (
        <div id="about-me" style={{ display:"block", marginLeft:"auto", marginRight:"auto", maxWidth:"80vw" }}>
            <h1>Alex</h1>
            <Grid
            container
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            > 
                <Grid 
                item
                md={6}
                >
                    <img 
                    src={photo} 
                    alt="me, alex, steering a tandem bike with me, alex, on the back"
                    style={{ maxHeight:"400px", paddingTop:"1rem" }}
                    ></img>   
                    <p>Photo by <a href="https://ryanrot.haus/">ryan rothaus</a></p>         
                </Grid>
                <Grid 
                item
                md={6}
                >
                    <p>
                        Currently enrolled in the UW Fullstack Web Development Bootcamp seeking a role as a Frontend Developer.
            I hope to join a team of driven people making tools to empower others to use and understand geospatial and
            environmental data.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}
export default About;