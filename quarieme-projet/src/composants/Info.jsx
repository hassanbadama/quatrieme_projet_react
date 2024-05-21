import React from "react";
import "../style/Slide.css"
import { Link } from "react-router-dom";
import { useState } from "react";



const Info = ({titre,location,photo,nom, mot_cle, NbreEtole})=>{
    let [fin, final] = useState(1)
      if(fin === NbreEtole){
        final(fin)
      }
      let tab = [1, 2 ,3 ,4,5]
    return(
        <div>
        <div className="flex">
            <div className="flex_span">
                <span className="flex_span1">{titre}</span>
                <span className="sous_titre"> {location} </span>
            </div>
            <div className="flex1">
               <div className="flex2">
                <span> {nom} </span>
                {/* <span>Dumas</span> */}
               </div>
              <img className="font_ronde" src={photo} alt="" /> 
            </div>
           </div>

           <div className="slide_etoile">
            <ul className="slide-liste">
              
                {
                    mot_cle.map((el , i)=>{
                        return(<li key={i} > <Link className=""  to = "">{el}</Link> </li>)

                    })
                }
            </ul>
            <div className="flex_etoile">
                 <span> </span>
                {tab.map((el, k)=>{
                    return(
                    NbreEtole >=  el?<span key={k} className="colorer" > <i className=" fa-solid fa-star"></i> </span>:<span key={k} className="Noncolorer" > <i className=" fa-solid fa-star"></i> </span>
                    ) 

                })} 
            </div>
           </div>
        </div>
    )
}
export default Info