import React from "react";
import "../style/banner.css"
import image from "../images/about.png"
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
                     <Link  to = {`/logement/${tab.identifiant}`}> 
                      <div key={i} className="card-images">
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