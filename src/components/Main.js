import React, { useState } from "react";
import Nav from "./Nav";
import Portfolio from "./pages/Portfolio.js";
import About from './pages/About';
import Contact from './pages/Contact';

function Main() {
    const [currentPage, setCurrentPage] = useState('Portfolio');
  
    const renderPage = () => {
    if ( currentPage === 'About Me' ) return <About />;
    if ( currentPage === 'Portfolio' ) return <Portfolio />;
    if ( currentPage === 'Contact' ) return <Contact />;
    }
    
    const changePage = (page) => {
      setCurrentPage(page);
    }

    return (
        <>
        <Nav  currentPage={ currentPage } changePage={ changePage }/>
        <h1>Main!</h1>
        { renderPage() }
        </>
    )
};

export default Main;