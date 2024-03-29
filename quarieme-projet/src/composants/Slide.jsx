import React from "react";
import image from "../images/about.png"
import imageG from "../images/arrow_left.png"
import imageD from "../images/arrow_right.png"
import etole from "../images/etoile.png"
import "../style/Slide.css"
import { Link } from "react-router-dom";
import Collabs from "../composants/Collabs";
import img1 from "../images/g.png"
import { useState } from "react";


export const Slide = ({images, img})=>{
  let [fin, final] = useState(0)
        let compteur = 0
      //  if(img.length<=1){
      
      //   compteur = ""
      //   console.log("inferieur");
      //    document.querySelector(".slide_defile_image").style.display = "none"
      //  }
      
       const Droite =()=>{
        if(fin === img.length-1){
          console.log("egale" +fin);
               final(0)
               compteur = 0
        }
        else{
          final(fin + 1)
          console.log("tt = " +fin);
          compteur = compteur + 1
        }
      
       }

       const Gauche =()=>{
        if(fin < 1 ){
          console.log("egale" +fin);
               final(img.length-1)
               compteur = img.length-1
        }
        else{
          final(fin - 1)
          console.log("tt = " +fin);
          compteur = compteur - 1
        }
      
       }
      
      
    return(
        <div>
          <div >
          {img.map((e, k)=>{
            return(
              <div className="slide" key={k}>
                {
                  k === fin && <img className="slide_image" src={e} alt=""/>
                }
                 {
                  k === fin && img.length > 1 &&  <span className="slideN">{fin + 1}/ {img.length} </span>
                }
            </div>
            )
       })}
       {
         img.length > 1 &&  <div className="slide_defile_image">
         <img onClick={Gauche} className="slide_image_defile" src={imageG} alt="" />
         <img onClick={Droite} className="slide_image_defile" src={imageD} alt="" />
         </div>
       }
         {/* informations
          < Info /> */}
           {/* <div className="tab">
                <div className="tab1" id="collab_logement">
                < Collabs
                  description="Description"
                  image1={img1}
                  texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias esse nihil quis voluptatibus? Inventore iusto cupiditate commodi provident distinctio fugiat eos quas rem necessitatibus deserunt. Expedita vel pariatur culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus ea excepturi tempora nisi laborum quae dolorum? Quisquam placeat temporibus qui hic id. Sunt accusantium cupiditate a illo eligendi iusto."
                  />
                </div>
                 <div>
                  < Collabs
                    description="Equipements"
                    image1={img1}
                    texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias esse nihil quis voluptatibus? Inventore iusto cupiditate commodi provident distinctio fugiat eos quas rem necessitatibus deserunt. Expedita vel pariatur culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus ea excepturi tempora nisi laborum quae dolorum? Quisquam placeat temporibus qui hic id. Sunt accusantium cupiditate a illo eligendi iusto."
                    />
                 </div>

           </div> */}
          </div>
        </div>
    )
}