import React, { useState } from "react";
import Banner from "../composants/Banner";
import Card from "../composants/Card";
import image from "../images/banner.png"






const PageAccueil = ()=>{
    //  const [fin, final] = useState()
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
        <div>
             < Banner
                 img = {image}
                 titre="Chez vous, Partout ailleurs"
             />
          < Card /> 
        </div>
    )
}
export default PageAccueil