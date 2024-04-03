import React from "react";
import data from "../data/about.json";

import CompBanner from "../components/banner";
import CompAbout from "../components/about";

import "../css/about.css";
import cover_about from "../img/about_cover.png";

export default function PageAbout() {

  console.table(data);

    return(
      <div>
        <CompBanner bannerCover={cover_about} />
        
        <div className="about">
          {data.map ((element) => {return <CompAbout apropos={element} />})}


        </div>
      </div>

    );
}
