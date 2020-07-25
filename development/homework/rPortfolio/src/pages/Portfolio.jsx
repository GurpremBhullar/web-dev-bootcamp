import React from "react";
import {Link} from "react-router-dom";
function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-primary">
        <a className="navbar-brand" href="#">
          Gurprem Bhullar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link
  to="/"
  className={location.pathname === "/" ? "nav-link active" : "nav-link"}
>
  Home
</Link>
            </li>
            <li className="nav-item">
            <Link
  to="/contacts"
  className={location.pathname === "/contacts" ? "nav-link active" : "nav-link"}
>
  Contact
</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Portfolio;
