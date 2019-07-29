
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Nav()
{
return (

<div className = "nav" uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;">
    <nav className="uk-navbar-container d-flex " uk-navbar>

        <div >
			<Link
              to="/"
              className="uk-navbar-item uk-logo" 
              // className={
              //   window.location.pathname === "/" || window.location.pathname === "/about"
              //     ? "nav-link active"
              //     : "nav-link"
              // }
            >
              Google Books
            </Link>
		
        </div>
        <div >	           
            <Link
              to="/"
            //   className={
            //     window.location.pathname === "/" || window.location.pathname === "/about"
            //       ? "nav-link active"
            //       : "nav-link"
            //   }
              className="uk-navbar-item item"
            >
              Search
            </Link>
        </div>

        <div>
			<Link
              to="/"
            //   className={
            //     window.location.pathname === "/" || window.location.pathname === "/about"
            //       ? "nav-link active"
            //       : "nav-link"
            //   }
              className="uk-navbar-item item"
            >
              Saved
            </Link>
             
    
        </div>

    </nav>
</div>



);

}




export default Nav;