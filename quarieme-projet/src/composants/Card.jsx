import React from "react";
import "../style/banner.css"

import { Link } from "react-router-dom";

import Tab from "../fichier.json"



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
  
 

    return(
           <div className="cad-image-flex">
           {
                Tab.map((tab, i)=>( 
                     <Link  key={i}  to = {`/logement/${tab.identifiant}`}> 
                      <div className="card-images">
                          <img className="card-image" src={tab.cover} alt="" /> 
                          <p className="titre_location">{tab.title}</p>
                      </div>
                      </Link> 
                    
                ))
             }
           </div>
    )
}
export default Card