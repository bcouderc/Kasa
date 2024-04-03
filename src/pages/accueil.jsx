import React from "react";

import CompBanner from "../components/banner";
import CompCard from "../components/cards";

import cover_src from "../img/Image source 1.png";
import data from "../data/logements.json";



export default function PageAccueil() {

    console.table(data);
    return (
      <div>
        <CompBanner bannerText="Chez vous, partout et ailleurs" bannerCover={cover_src} />
        <div className="gallery">
          {data.map((element) => { 
            return <CompCard logement={element}/> })}
        </div>
      </div>  
    );
  }