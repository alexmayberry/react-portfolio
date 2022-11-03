import React from "react";

function Nav({ currentPage, changePage }) {

  return (
    <div className="Nav">
      <h1 className="display-1">Nav!!</h1>

      <nav>
          <a href="#portfolio" 
          onClick={()=>changePage('Porfolio')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio 
          </a>
          <a href="#about-me" 
          onClick={()=>changePage('About Me')}
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          >
            About Me 
          </a>
          <a href="#contact" 
          onClick={()=>changePage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
      </nav>

    </div> 
  );
}

export default Nav;