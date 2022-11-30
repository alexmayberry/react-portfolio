// other data imports
import tools from "./toolsData.json"

// image imports
import placeholderImage from "../images/placeholder-small.jpg";
import auxNudgeImage from "./aux-nudge/aux-nudge-large.PNG";

// gif imports
import communityVisionGif from "./community-vision/communityvisiondemo.gif"

// projects object
export const projects = [
    {
        id: 1,
        name: "WhoGot?",
        description: "Fullstack web app designed to facilitate and organize community driven urban design proposals.",
        livePage: 'https://heroku.com',
        repo: "https://github.com/alexmayberry/community-vision",
        gif: "gif",
        image: placeholderImage,
        tools: [tools.html5, tools.bulma, tools.heroku, tools.javascript, tools.mysql, tools.mongoDB, tools.handlebars, ],
        rating: 1
    },
    {
        id: 2,
        name: "AuxNudge",
        description: "Song search based on user input/random word generator.",
        livePage: 'https://ccaitano.github.io/aux-nudge/',
        repo: "https://github.com/alexmayberry/aux-nudge",
        gif: "gif",
        image: auxNudgeImage,
        tools: [tools.html5, tools.bulma, tools.heroku, tools.javascript, tools.handlebars, ],
        rating: 3
    },
    {
        id: 3,
        name: "CommunityVision",
        description: "A platform for people to envision public projects in their communities.",
        livePage: 'https://community-vision.herokuapp.com/',
        repo: "https://github.com/alexmayberry/community-vision",
        gif: '',
        image: communityVisionGif,
        tools: [tools.node, tools.heroku, tools.javascript, tools.react, tools.GraphQL, tools.apollo, tools.mongoDB ],
        rating: 4
    },
];