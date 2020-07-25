import React from 'react'; 
import {Link} from "react-router-dom";

function Home() {   

    return ( 
        <div>
<div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="#">Gurprem Bhullar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <Link
  to="/portfolio"
  className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
>
  Portfolio
</Link>
            <Link
  to="/contacts"
  className={location.pathname === "/contacts" ? "nav-link active" : "nav-link"}
>
  Contact
</Link> 
</ul>
    </div></nav>
  <div className="jumbotron text-center" style={{marginBottom: 0}}>
    <h1>Gurprem Bhullar</h1>
    <h3><b>welcome to my awesome page!</b></h3>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <h3>Personal Photo</h3>
        <img className="img-fluid" src="images/mainImage.jpg" alt="Me" />
      </div>
    </div>
  </div>
  <div className="col-sm-8">
    <h3>About Me</h3>
    <p>my name is gurprem bhullar i have a masters in CS and a cert in coding</p>
  </div>
  <div className="footer">
  </div>
</div>  


</div>
    ) } 
export default Home;
