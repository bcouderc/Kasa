import React from "react";
import data from "../data/about.json";

import CompBanner from "../components/banner";
import CompCollapse from "../components/about_v2";

import "../css/about.css";
import cover_about from "../img/about_cover.png";

export default function PageAbout() {

  console.table(data);

    return(
      <div>
        <CompBanner bannerCover={cover_about} />
        
        <div className="about">
          {/* Permet de boucler sur les éléments contenu dans le fichier JSON et de retourner les données dans le composant CompAbout */}
          {data.map ((element) => {return <CompCollapse apropos={element} />})}


        </div>
      </div>

    );
}
