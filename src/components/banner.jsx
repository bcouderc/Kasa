import '../css/banner.css';

export default function CompBanner(banner) {
    console.log(banner)
    return(
        <div className="banner">
            <div >
                <p className='banner_Text'>{banner.bannerText}</p>
            </div>            
            <div>
                <img src={banner.bannerCover} alt="" />
            </div>
        </div>
    )
}