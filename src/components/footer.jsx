import React from "react";
import '../css/footer.css';
import logoFooter from '../img/logo_footer.png';

export default function PiedDePage() {
return(
    <div className='contenu_footer'>
        <div>
            <img src={logoFooter} alt='' />
        </div>
        <div>
            <p className="contenu_footer_text">© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
)
}