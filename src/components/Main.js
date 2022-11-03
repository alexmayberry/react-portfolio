import React, { useState } from "react";
import {projects, tools} from "../projectData";

function Main( { renderPage }) {

    return (
        <>
        <h1>Main!</h1>
        { renderPage() }
        </>
    )
};

export default Main;