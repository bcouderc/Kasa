import React from "react";
import starRed from "../../img/red_star.png";
import starGrey from "../../img/grey_star.png";

export default function CompStar({color}) {
            console.log(color)
    return(

        <div>
           <img src={color === "red" ? starGrey : starRed} alt="" />
        </div>
        
    ); 
}