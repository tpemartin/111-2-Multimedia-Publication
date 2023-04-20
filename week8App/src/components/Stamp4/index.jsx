
import Image from "mui-image"
import "./index.css"

export default function Stamp({imgSrc}){
    return(
<div className="stamp">
  <Image 
  duration = {0}
//   src ="http://thecodeplayer.com/uploads/media/css3logo.png" 
  src = {imgSrc}
// src = "https://lh3.googleusercontent.com/pw/AJFCJaUY7j7Np8CWscMOzg0UTCinm9mwcUDrZA_NjIIJjHf87mwxSV0BBKMGP6LkUH3RVto9DBRjmSf76tq-g9cA75q4ppjvNJeqKN5U76gyKKc-4uv_m6A=w600-h315-p-k"
  />
</div>

    )
}