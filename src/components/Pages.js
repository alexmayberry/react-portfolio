import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";

function Pages(currentPage) {

    const renderPage = (currentPage) => {
        switch(currentPage.name) {
           case 'about':
            return <About />;
            case 'porfolio':
                return <Portfolio />;
            default :
            return <About />;
       }

    }

    return (
        <>
        </>
    )
}
export default Pages;