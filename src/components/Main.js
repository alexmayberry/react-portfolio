import React, { useState } from "react";
import Nav from "./Nav";
import Portfolio from "./pages/Portfolio.js";
import About from './pages/About';
import Blog from './pages/Blog';
import { Container, CssBaseline } from "@mui/material";

function Main() {
    const [currentPage, setCurrentPage] = useState('Portfolio');
  
    const renderPage = () => {
    if ( currentPage === 'About Me' ) return <About />;
    if ( currentPage === 'Portfolio' ) return <Portfolio />;
    if ( currentPage === 'Blog' ) return <Blog />;
    }
    
    const changePage = (page) => {
      setCurrentPage(page);
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth={"xl"} >
                <Nav  currentPage={ currentPage } changePage={ changePage } />
                { renderPage() }
            </Container>
        </>
    )
};

export default Main;