import React from "react";

function Nav({ currentPage, changePage }) {

  return (
    <div className="Nav">
      <h1 className="display-1">Nav!!</h1>

      <ul>
        <li>
          <link href="#portfolio" onClick={()=>changePage('Porfolio')}>Portfolio</link>
        </li>
        <li>
          <link href="#about-me" onClick={()=>changePage('About Me')}>About Me</link>
        </li>
        <li>
          <link href="#Contact" onClick={()=>changePage('Contact')}>Contact</link>
        </li>
      </ul>

    </div>
  );
}

export default Nav;