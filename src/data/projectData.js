import tools from "./toolsData.json"
import codesignPlaceholderImage from "../images/placeholder-small.jpg";
import auxNudgeLarge from "../images/aux-nudge-large.PNG";

export const projects = [
    {
        id: 1,
        name: "CommunityVision",
        description: "Fullstack web app designed to facilitate and organize community driven urban design proposals.",
        livePage: 'https://heroku.com',
        repo: "https://github.com/alexmayberry/community-vision",
        gif: "gif",
        image: codesignPlaceholderImage,
        tools: [tools.react, tools.mongoDB, tools.GraphQL, tools.apollo, tools.mapbox, ]
    },
    {
        id: 2,
        name: "AuxNudge",
        description: "Song search based on user input/random word generator.",
        livePage: 'https://heroku.com',
        repo: "https://github.com/alexmayberry/aux-nudge",
        gif: "gif",
        image: auxNudgeLarge,
        tools: [tools.html5, tools.bulma, tools.heroku, tools.javascript, tools.handlebars, ]
    },
];