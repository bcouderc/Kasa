 

 export default function Appart({logement}) {

    return(
        <div>

            {/* Description */}
            <div>
                <div>
                    <p>Description</p>
                </div>
                <div>
                    <p>{logement.description}</p>
                </div>
            </div>
            {/* Equipements */}
            <div>
                <div>
                    <p>Equipements</p>
                </div>
                <div>
                    <ul>
                        <li>{logement.equipements}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
 }