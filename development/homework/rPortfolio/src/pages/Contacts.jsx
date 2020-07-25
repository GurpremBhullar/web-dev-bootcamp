import React from 'react' 
import {Link} from "react-router-dom";
function Contacts() {   

    return (
<div>
  <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-danger">
    <ul className="navbar-nav">
    <Link
  to="/"
  className={location.pathname === "/" ? "nav-link active" : "nav-link"}
>
  Home
</Link>
</Link>
            </li>
            <li className="nav-item">
            <Link
  to="/contacts"
  className={location.pathname === "/contacts" ? "nav-link active" : "nav-link"}
>
  Contact
</Link>
<Link
  to="/portfolio"
  className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
>
  Portfolio
</Link>
    </ul>
  </nav>
  <div className="jumbotron text-center" style={{marginBottom: 0}}>
    <h1>Gurprem Bhullar's Contact Information</h1>  
  </div> 
  <div className="container">  
    <div className="row">
      <div className="col-sm-6">
        <a href="" className="btn btn-danger" role="button" target="blank">LinkedIn Profile</a> 
        <img className="img-fluid, img-thumbnails" src="https://pbs.twimg.com/profile_images/1082424539492073477/exU8rYn8_400x400.jpg" alt="LinkedIn Logo" />
      </div> 
      <div className="col-sm-6">
        <a href="" className="btn btn-danger" role="button" target="blank">GitHub Profile</a> 
        <img className="img-fluid, img-thumbnail" src="https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg" alt="GitHub Logo" />
      </div> 
    </div>
    <div className="row">
      <div className="col-sm-6">
        <a href="" className="btn btn-danger" role="button">Professional Email Address</a>
        <img className="img-fluid, img-thumbnail" src="https://s.yimg.com/cv/apiv2/myc/mail/Mail_iOS_app_icon.png" alt="Yahoo Mail Logo" />
      </div>
      <div className="col-sm-6">
        <a href="" className="btn btn-danger" role="button" target="blank">Twitter Profile</a> 
       
        <img className="img-fluid, img-thumbnail" src="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/6b/df/b0/6bdfb025-a4fb-ea1e-a593-99814bf1f6a6/ProductionAppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" alt="Twitter Logo" />
      </div>
    </div>
    <div className="footer">
      <h4 style={{textAlign: 'center'}}>Gurprem Bhullar</h4>
      <h5 style={{textAlign: 'center'}}>203-919-0663</h5>
    </div>   
  </div>
</div> 
 ) } 
 export default Contacts;
