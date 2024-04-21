import React, { useState } from "react";
import chevron from "../../img/arrow_back_ios-24px 2.svg";
import "../../css/ficheLogement.css";
import "../../css/style.css";

export default function CompInfos({infos}) {
    const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
    const [equipmentsCollapsed, setEquipmentsCollapsed] = useState(true);

    const toggleDescriptionCollapse = () => {
        setDescriptionCollapsed(!descriptionCollapsed);
    };

    const toggleEquipmentsCollapse = () => {
        setEquipmentsCollapsed(!equipmentsCollapsed);
    };

    return (
        <div className="logement">
            
                <div className={`logement_collapse ${descriptionCollapsed ? 'collapsed' : ''}`}>
                    <div className="logement_titre" onClick={toggleDescriptionCollapse}>
                        <h1>Description</h1>
                        <img src={chevron} alt=""/>
                    </div>
                    <div>
                        <p>{infos.description}</p>
                    </div> 
                </div>
            
            <div className={`logement_collapse ${equipmentsCollapsed ? 'collapsed' : ''}`}>
                <div className="logement_titre" onClick={toggleEquipmentsCollapse}>
                    <h1>Equipements</h1>
                    <img src={chevron} alt=""/>
                </div>
                <div>
                    <ul>
                        {infos.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>              
            </div>
        </div>
    );
}
