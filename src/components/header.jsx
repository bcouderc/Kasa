import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css';
import logo from '../img/logo.png';

export default function Navbar(){
    // state

    // Comportement

    // Affichage (render)
return(
    <div className="head_contenaire">
        <div >
            <img src={logo} alt="logo kasa"></img>
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