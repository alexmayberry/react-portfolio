import React, { useState } from "react";
import {projects, tools} from "../data/projectData";
import Nav from "./Nav";

function Main( { renderPage }) {

    return (
        <>
        <Nav />
        <h1>Main!</h1>
        { renderPage() }
        </>
    )
};

export default Main;