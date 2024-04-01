import { Link } from 'react-router-dom';
import collapse from "../pages/logement";
import '../css/card.css';

export default function Card({logement}) {
    
    return(
        <Link to={`/pages/logement/${logement.id}`} className='gallery_cards'>
            <div>
                <div>
                    <p className='gallery_text'>{logement.title}</p>
                </div>
                <div>
                        <img src={logement.cover} alt=''/>
                </div>
            </div>
        </Link>

    )
}