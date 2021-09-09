import React,{Component} from "react";
import {Link} from 'react-router-dom';
 export default class Navbar extends Component{

    render(){
       return (

             <div className="bg-white" style={{fontWeight:"bold"}}>
             <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
 <Link className="navbar-brand" to="/" style={{fontWeight:"bolder"}}>News Track</Link>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">General<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/business">Business</Link>
      </li>
     <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </li>
<li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
<li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
<li className="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
      </li>
<li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
    </ul>
  
  </div>
</nav>

              </div>
              )
       }
}

 
 