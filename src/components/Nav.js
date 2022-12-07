import { Box, Grid } from "@mui/material";
import React from "react";
import CCIcon from "./CCIcon";
import './Nav.css';
import TandemIcon from "./TandemIcon";
// import ccSVG from "../images/ccheart_black.svg"

function Nav({ currentPage, changePage }) {

  return (
      <nav 
      className="nav" 
      >
        <Grid 
        container 
        direction={"row"} 
        justfiyContent={"space-between"} 
        alignItems={"center"} 
        >
          <Grid 
          item
          xs={4}
          md={8}
          lg={9}
          style={{ display:"flex", justifyContent:"flex-start", alignItems: "center" }}
          >
            <h1 
            className="secondary-color" 
            style={{ padding:"1rem"}} 
            >
              Alex Mayberry
            </h1>

            <TandemIcon />
            {/* <CCIcon /> */}
           

          </Grid>
          <Grid 
          item
          xs={8}
          md={4}
          lg={3}
          style={{ paddingRight:"1rem" }}
          >
            <Grid 
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            >
              <Grid 
              item
              >
                <a 
                href="#work" 
                onClick={ () => changePage('Portfolio') }
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Work 
                </a>
              </Grid>
              <Grid 
              item
              >
                <a 
                href="#about-me" 
                onClick={ () => changePage('About Me') }
                className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                >
                  About Me 
                </a>
              </Grid>
              <Grid 
              item
              >
                <a href="#blog" 
                onClick={ () => changePage('Blog') }
                className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                
                >
                  Blog
                </a>
              </Grid>
              <Grid 
              item
              >
                <a href="https://docs.google.com/document/d/1KGfhUsZhSVNifB4NSOG062JwgrpuReTMK5ChvZBdPkE/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className={'nav-link'}
                >
                  Resume
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
  );
}

export default Nav;