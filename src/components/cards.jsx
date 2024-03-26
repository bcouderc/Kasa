import '../css/card.css'

export default function Card({logement}) {
    
    return(
        <div className='gallery_cards'>
            <div>
                <img src={logement.cover} />
            </div>
            <div>
                <p className='gallery_title'>{logement.title}</p>
            </div>
        </div>
    )
}