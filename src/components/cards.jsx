import { Link } from 'react-router-dom'
import '../css/card.css'

export default function Card({logement}) {
    
    return(
        
        <div className='gallery_cards'>
            <div>
                <p className='gallery_text'>{logement.title}</p>
            </div>
            <div>
                <img src={logement.cover} alt=''/>

                {/* Puis-je insérer un "<Link></Link>" ici pour afficher ma page Logement? */}
            </div>

        </div>
    )
}