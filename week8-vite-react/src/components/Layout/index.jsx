import './index.css'
import play from './img/play.svg'
import next from './img/next.svg'
import previous from  "./img/previous.svg"

export function Main() {
    return (
        <div className="main" />
    )
}
export function Navbar() {
    return (
        <div className="navbar">
            <div className="play">
               <img src={play} width="40px" />
            </div>
            <div className="previous">
                <img src={previous} width="40px"  />
            </div>
            <div className="next">
                <img src={next} width="40px"  />
            </div>
        </div>
    )
}