import React from "react";
import "../style/banner.css"
import image from "../images/about.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import tab from "../fichier.json"



const Card = ()=>{

  // const [fin, final] = useState()
  // useEffect(()=>{
  //     fetch("../fichier.json")
  //     .then(res=>res.json())
  //     .then(data=>{
  //        final(data)
  //        console.log("avant");
  //        console.log(data);
  //     });
  // },[])
  
  console.log(tab);

    return(
        <div>
           <div className="cad-image-flex">
           {
                tab.map((tab)=>{
                    return(
                      <Link  to = {`/logement/${tab.identifiant}`}> 
                      <div className="card-images">
                          <img className="card-image" src={tab.cover} alt="" /> 
                         
                          <p className="titre_location">{tab.title}</p>
                        </div>
                      </Link> 
                    )
                })
             }
           </div>
           
        </div>
    )
}
export default Card