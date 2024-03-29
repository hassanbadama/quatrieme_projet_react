import React from "react";
import Collabs from "../composants/Collabs";
import Banner from "../composants/Banner";
import Card from "../composants/Card";
import image_banner from "../images/about.png"
import image from "../images/g.png"


const Apropos = ()=>{
    return(
        <div>
            < Banner
                 img = {image_banner}
                 titre=""
             /> 
             <br /><br /> <br /> <br />
             < Collabs
             description="Fiabilité"
              image1={image}
              texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias esse nihil quis voluptatibus? Inventore iusto cupiditate commodi provident distinctio fugiat eos quas rem necessitatibus deserunt. Expedita vel pariatur culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus ea excepturi tempora nisi laborum quae dolorum? Quisquam placeat temporibus qui hic id. Sunt accusantium cupiditate a illo eligendi iusto."
              />
               < Collabs
               description="Respect"
              image1={image}
              texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias esse nihil quis voluptatibus? Inventore iusto cupiditate commodi provident distinctio fugiat eos quas rem necessitatibus deserunt. Expedita vel pariatur culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus ea excepturi tempora nisi laborum quae dolorum? Quisquam placeat temporibus qui hic id. Sunt accusantium cupiditate a illo eligendi iusto."
              />
               < Collabs
               description="Service"
              image1={image}
              texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias esse nihil quis voluptatibus? Inventore iusto cupiditate commodi provident distinctio fugiat eos quas rem necessitatibus deserunt. Expedita vel pariatur culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus ea excepturi tempora nisi laborum quae dolorum? Quisquam placeat temporibus qui hic id. Sunt accusantium cupiditate a illo eligendi iusto."
              />
               < Collabs
               description="Securité"
              image1={image}
              texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias esse nihil quis voluptatibus? Inventore iusto cupiditate commodi provident distinctio fugiat eos quas rem necessitatibus deserunt. Expedita vel pariatur culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus ea excepturi tempora nisi laborum quae dolorum? Quisquam placeat temporibus qui hic id. Sunt accusantium cupiditate a illo eligendi iusto."
              />
        </div>
    )
}
export default Apropos