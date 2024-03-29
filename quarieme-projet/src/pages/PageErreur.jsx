import React from "react";
import Erreur from "../composants/404";
import { Link } from "react-router-dom";


export const PageErreur = ()=>{
    return(
        <div>
             < Erreur />
             <li> <Link className="font"  to = "">retourne a la page d'accueil</Link> </li>
        </div>
    )
}
