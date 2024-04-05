import React from "react";

export default function CompHost({host}) {
// Composant permettant d'afficher le nom et la photo du propriétaire
    return(
        <div className="host">
            <p>{host.name}</p>
            <img src={host.picture} alt="" />
        </div>
    );
    
}