import React from "react";
import image from "../images/LogoKasa.png"
import "../style/Footer.css"

export const Footer = ()=>{
    return(
        <div>
            <div className="footer">
               <div>
               <img src={image} alt="" />
               <h2>2020 Kasa.All Rights Recerved</h2>
               </div>
            </div>
        </div>
    )
}