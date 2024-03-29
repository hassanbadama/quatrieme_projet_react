import React from "react";
import image from "../images/g.png"
import "../style/Callabs.css"
import { useState } from "react";


const Collabs = ({ description, image1, texte})=>{
    const [final, sefinal] = useState(false);
    return(
        <div> 
            <div className="collab">
            <div onClick={()=>sefinal(!final)} className=" collab_logement collabs">
                <h4>{description} </h4>  <img className={final ? "changeImage image-collabs" : " image-collabs"} src={image1} alt="" srcset="" />
            </div>
               {final && <div className=" collab_paragraphe"><p>{texte}</p></div>}
            </div>
        </div>
    )
}
export default Collabs