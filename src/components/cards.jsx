import { Link } from 'react-router-dom';

import '../css/card.css';

export default function CompCard({logement}) {
    
    return(
        <Link to={`/location/${logement.id}`} className='gallery_cards'>
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