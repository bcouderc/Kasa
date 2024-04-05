import "../css/about.css"
import chevron from "../img/arrow_back_ios-24px 2.svg";

export default function CompAbout({apropos}) {
    return (
        <div>
            <div className="about_collapse">
                <div className="about_titre">
                    {/* Affiche les données contenu dans le fichier JSON en fonction du critère */}
                    <h1>{apropos.titre}</h1>
                    <img src={chevron} alt=""/>
                </div>
                <div>
                    <p>{apropos.corps}</p>
                </div>              
            </div>
        </div>
    );
}  