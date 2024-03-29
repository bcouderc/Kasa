import Banner from "../components/banner";
import Navbar from "../components/header";
import Pdp from "../components/footer"


function Error () {
    return (
        <div>
            <Banner /> 
            <Navbar/>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <p a href = "#">Retourner sur la page d'accueil</p>

            <Pdp />

        </div>
    )
}
   

export default Error;