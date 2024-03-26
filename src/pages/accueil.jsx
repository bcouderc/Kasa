import React from "react";
import Banner from "../components/banner";
import cover_src from "../img/home_cover.png";
import data from "../data/logements.json";
import Card from "../components/cards";




function Accueil() {

    console.table(data);
    return (
      <div>
        <Banner bannerText="Chez vous, partout et ailleurs" bannerCover={cover_src} />
        <div className="gallery">
          {data.map((element) => { return <Card logement={element}/> })}
        </div>
      </div>
    );
  }

  
export default Accueil;