import codesignPlaceholderImage from "./images/placeholder-small.jpg";
import auxNudgeLarge from "./images/aux-nudge-large.PNG";

export const tools = {
    react: {
        name: "React.js",
        logo: "logo",
        docs: "link.org"
    },
    GraphQL: {
        name: "GraphQL",
        logo: "logo",
        docs: "link.org"
    },
    node: {
        name: "Node.js",
        logo: "logo",
        docs: "link.org"
    },
    mongoDB: {
        name: "MongoDB",
        logo: "logo",
        docs: "link.org"
    },
    apollo: {
        name: "Apollo",
        logo: "logo",
        docs: "link.org"
    },
    jest: {
        name: "Jest",
        logo: "logo",
        docs: "link.org"
    },
    insomnia: {
        name: "Insomnia",
        logo: "logo",
        docs: "link.org"
    },
    mapbox: {
        name: "Mapbox",
        logo: "logo",
        docs: "link.org"
    },
    html5: {
        name: "HTML5",
        logo: "logo",
        docs: "link.org"
    },
    bulma: {
        name: "Bulma",
        logo: "logo",
        docs: "link.org"
    },
    handlebars: {
        name: "Handlebars.js",
        logo: "logo",
        docs: "link.org"
    },
    javascript: {
        name: "JavaScript",
        logo: "logo",
        docs: "link.org"
    },
    heroku: {
        name: "Heroku",
        logo: "logo",
        docs: "link.org"
    },
};

export const projects = [
    {
        name: "codesign",
        description: "Fullstack web app designed to facilitate and organize community driven urban design proposals.",
        livePage: 'link.heroku.com',
        repo: "github.com/alexmayberry/codesign",
        gif: "gif",
        image: codesignPlaceholderImage,
        tools: [tools.react, tools.mongoDB, tools.GraphQL, tools.apollo, tools.mapbox, ]
    },
    {
        name: "AuxNudge",
        description: "Song search based on user input/random word generator.",
        livePage: 'link.heroku.com',
        repo: "github.com/alexmayberry/aux-nudge",
        gif: "gif",
        image: auxNudgeLarge,
        tools: [tools.html5, tools.bulma, tools.heroku, tools.javascript, tools.handlebars, ]
    },
];

// export default {tools, projects};