import React from "react";
import "../style/header.css";
import image from "../images/LogoKasa.png"
import { Link } from "react-router-dom";


function Header() {
    return (<div>
                 <nav className="entete">
                    <img className="image" src={image} alt="" /> 
                    <ul className="entete1">
                        <li> <Link className="font"  to = "">Accueil</Link> </li>
                        <li> <Link className="font enleveLigne"  to = "/apropos"> About </Link></li>
                    </ul>
                </nav> 
            </div>
    )
}
export default Header