import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css';
import logoHeader from '../img/logo.png';

export default function Navbar(){
return(
    <div className="head_contenaire">
        <div >
            <img src={logoHeader} alt="logo kasa" className="logo"/>
        </div>
        <div className="head_nav">
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/apropos">A propos</Link></li>
                </ul>
            </nav>
        </div>
    </div>
)

}