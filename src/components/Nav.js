import React from "react";

function Nav({ currentPage, changePage }) {

  return (
    <div className="Nav">
      <h1 className="display-1">Nav!!</h1>

      <nav>
          <a href="#portfolio" onClick={()=>changePage('Porfolio')}>Portfolio </a>
          <a href="#about-me" onClick={()=>changePage('About Me')}>About Me </a>
          <a href="#Contact" onClick={()=>changePage('Contact')}>Contact</a>
      </nav>

    </div> 
  );
}

export default Nav;