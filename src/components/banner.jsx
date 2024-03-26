import '../css/banner.css';


export default function Banner(props) {
    console.log(props)
    return(
        <div className="banner">
            <div>
                <img src={props.bannerCover} alt=" home cover" />
            </div>
            <div>
                <p className='banner_bannerText'>{props.bannerText}</p>
            </div>
            

        </div>
    )
}