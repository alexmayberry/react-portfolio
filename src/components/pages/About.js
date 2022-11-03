import React from "react";
import photo from '../../images/alex-mushroom-web.png'
import tools from "../../data/toolsData.json"

function About() {
    return (
        <div id="about-me">
            <div>
                <p>
                Currently enrolled in the UW Fullstack Web Development Bootcamp seeking a role as a Frontend Developer.
    I hope to join a team of driven people making tools to empower others to use and understand geospatial and
    environmental data.
                </p>
            </div>
            <div>
                <img src={photo} alt="me, alex with a huge mushroom"></img>
            </div>
            
        </div>
    )
}
export default About;