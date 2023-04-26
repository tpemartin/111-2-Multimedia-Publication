
import "./index.css"
import ntpu_stone from "./ntpu-stone.svg"
import "./wish.css"
import { Avatar } from "@mui/material"

export default function Card({ user }) {
  const { name, grade, imgSrc, wish } = user
  return (<>
<div className="card">
  <div className="card-content">
    <div className="card-wish">
      <div className="wish">
        <div className="time">DDDD/MM/YY</div>
        <div className="Picture" />
        <div className="wish-text">New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!"</div>
      </div>
    </div>
    <div className="sender-info">
      <div className="group">
        <div className="sender-name">Jane Oliver</div>
        <div className="sender-grade">Economics 2A</div>
        <div className="Avator" />
      </div>
    </div>
  </div>
</div>

</>
  )
}