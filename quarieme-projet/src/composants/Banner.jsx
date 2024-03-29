import React from "react";
//import image from "../images/banner.png"
import "../style/banner.css"

 const Banner = ({img, titre})=>{
    return(
        <div>
            <div className="banner"> 
               <img className="banner-image" src={img} alt="" /> 
               <h3 className="texte-banner">{titre}</h3>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Banner