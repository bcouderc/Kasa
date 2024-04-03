import '../css/banner.css';

export default function CompBanner(props) {
    console.log(props)
    return(
        <div className="banner">
            <div >
                <p className='banner_Text'>{props.bannerText}</p>
            </div>            
            <div>
                <img src={props.bannerCover} alt=" home cover" />
            </div>
        </div>
    )
}