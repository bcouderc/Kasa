import React, { useState } from "react";
import chevron from "../img/arrow_back_ios-24px 2.svg";
import "../css/about.css";

export default function CompCollapse({ apropos }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div className={`about_collapse ${collapsed ? 'collapsed' : ''}`}>
        <div className="about_titre" onClick={toggleCollapse}>
          {apropos.titre ? (
            <h1>{apropos.titre}</h1>
          ) : (
            <h1>Description</h1>
          )}
          <img src={chevron} alt="" />
        </div>
        <div>
          {apropos.corps ? (
            <p>{apropos.corps}</p>
          ) : (
            <p>{apropos.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}


// Dans le code ci-dessus, l'état local collapsed utilise le hook useState. Par défaut, il est initialisé à true, ce qui signifie que la div est repliée au début. Ensuite, la fonction toggleCollapse modifie l'état de collapsed lorsqu'elle est appelée.

// Dans la classe about_collapse, la classe collapsed est basée sur la valeur de collapsed. Cela signifie que lorsque collapsed est true, la classe collapsed est ajoutée, ce qui peut être utilisé pour cacher la partie collapsible.

// Enfin, le gestionnaire d'événements onClick sur la classe about_titre appele toggleCollapse lorsqu'on clique sur le titre, afin de basculer l'état de collapsed. Cela fait en sorte que la div collapsible s'affiche ou se cache lorsqu'on clique sur le titre.
