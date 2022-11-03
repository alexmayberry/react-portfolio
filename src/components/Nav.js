import React from "react";

function Nav({ currentPage, changePage }) {

  return (
      <nav className="nav">
      <h1 className="display-1">Nav!!</h1>
          <a href="#portfolio" 
          onClick={ () => changePage('Portfolio') }
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio 
          </a>
          <a href="#about-me" 
          onClick={ () => changePage('About Me') }
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          >
            About Me 
          </a>
          <a href="#contact" 
          onClick={ () => changePage('Contact') }
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
      </nav>
  );
}

export default Nav;