import React from "react";
import Banner from "../components/banner";
import cover_about from "../img/about_cover.png";

function About() {


    return(
        <div>
        <Banner bannerCover={cover_about} />
      </div>
    );
}

export default About;