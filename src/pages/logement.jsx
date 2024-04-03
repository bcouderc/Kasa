import React from "react";
import { useParams } from "react-router";
import data from "../data/logements.json";

 export default function PageLogement() {
    // useParams permet d'identifier les paramètres d'URL (ici l'id)
    const {id}=useParams();

    // Permet de trouver l'objet logement avec l'id qui est dans les paramètres
    const logement=data.find((item) => {
        return (
            item.id === id
        )
    })

    return(
        <div>
            <div>
                {/* ici mettre les clefs du logement :
                title / cover / pictures / ...*/}
                <div>
                    <img src={logement.cover} alt="" />
                </div>
                <div>
                    <div>
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>
                    <div>{logement.tags}Cosy</div>
                    <div>{logement.tags}canal</div>
                    <div>{logement.tags}Paris 10</div>
                    <div>
                        <span>Stars</span>
                        <span>Stars</span>
                        <span>Stars</span>
                        <span>Stars</span>
                        <span>Stars</span>
                    </div>

                </div>
                
            </div>
        </div>
    )
    
 }


