import React from "react";
import { useParams } from "react-router";
import data from "../data/logements.json";

import CompHost from "../components/logement/host";
import CompTags from "../components/logement/tags";
import CompStar from "../components/logement/star";

import "../css/ficheLogement.css"

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
                <div className="coverLogement">
                    <img src={logement.cover} alt="" />
                </div>
                <div>
                    <div className="appart">
                        <div className="appartDescript">
                            <div className="appartTitre">{logement.title}</div>
                            <div>{logement.location}</div>
                            <div className="cardTags">
                                {logement.tags.map((tag) => (<CompTags tag={tag} />))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <CompHost host={logement.host}/>
                            </div>
                            <div className="starAlign">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CompStar
                                    key={index}
                                    className={index >= 3 ? "redStar" : ""}
                                    />
                                ))}
                            </div>
                            
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
    
 }


