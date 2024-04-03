import { Link } from 'react-router-dom';
import "../css/error.css"

export default function PageError () {
    return (
        <div className="container">
            <p className="container_titre1">404</p>
            <p className="container_titre2">Oups! La page que vous demandez n'existe pas</p>
            <Link to="/" className="container_titre3">Retourner sur la page d'accueil</Link>

        </div>
    )
}
   