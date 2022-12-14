import React from 'react'
import {Link, useLocation} from "react-router-dom";

export default function Navbar(props) {
    let location = useLocation();//useLocation is used when we want to do something when location is change for eg. from / to /about

    const logoutHandler=()=>{
        localStorage.removeItem('token');
        props.showAlert("success","Logout Successful");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#7532F9"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="../logo.png" alt="iNotebook" width="30" height="24" className="d-inline-block align-text-top"/>iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li classame="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Link to="/login"><button type="button" className="btn" style={{backgroundColor:"#7532F9",color: "white"}}>Login</button></Link>
                            <Link to="/signup"><button type="button" className="btn" style={{backgroundColor:"#7532F9",color: "white"}}>SignUp</button></Link>
                        </div>:<div className="d-flex">
                            <Link to="/login"><button type="button" onClick={logoutHandler} className="btn" style={{backgroundColor:"#7532F9",color: "white"}}>Logout</button></Link>
                        </div>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
