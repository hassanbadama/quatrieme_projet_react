import React from "react";
import { Slide } from "../composants/Slide";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import tab from "../fichier.json"
import Info from "../composants/Info";
import Collabs from "../composants/Collabs";
import img1 from "../images/g.png"


export const Logement = ()=>{
    const {id} = useParams()
    
    // const [fin, final] = useState(null)
    // useEffect(()=>{
    //     fetch("../fichier.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const logement = data.find(e=>e.identifiant === id)
    //         final(logement)
          
    //     });
    // },[id])
    // console.log("barka");
    // console.log(fin);
    const fin = tab.find(e=>e.identifiant === id)

    return(
        <div>
            < Slide 
             images={fin.cover}
             img={fin['des photos']}
            />
            
            < Info
                titre={fin.title}
                location={fin.location}
                photo={fin.hôte.photo}
                nom={fin.hôte.nom}
                mot_cle={fin["Mots clés"]}
                NbreEtole={fin.note}
             />

            <div className="tab">
                <div className="tab1" id="collab_logement">
                < Collabs
                  description="Description"
                  image1={img1}
                  texte = {fin.description}  
                  />
                </div>
                 <div>
                  < Collabs
                    description="Equipements"
                    image1={img1}
                    texte = {fin.équipements}
                    />
                 </div>

           </div>
        </div>
    )
}