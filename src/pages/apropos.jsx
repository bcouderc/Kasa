import React from "react";
import Banner from "../components/banner";
import cover_about from "../img/about_cover.png";
import "../css/about.css"

function About() {


    return(
      <div>
        <Banner bannerCover={cover_about} />
        <div>
          <div>
            <h1>Fiabilité</h1>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        </div>
      </div>

    );
}

export default About;