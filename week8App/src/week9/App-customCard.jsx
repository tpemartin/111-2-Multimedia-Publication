import * as React from 'react';
import {Main} from "../components/Layout2";
import { NavbarCustom, NavbarItem } from "../components/NavbarCustom";
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card from '../components/Card';


export default function App() {
    // var imgSrc = "https://lh3.googleusercontent.com/pw/AJFCJaUY7j7Np8CWscMOzg0UTCinm9mwcUDrZA_NjIIJjHf87mwxSV0BBKMGP6LkUH3RVto9DBRjmSf76tq-g9cA75q4ppjvNJeqKN5U76gyKKc-4uv_m6A=w600-h315-p-k"
    const user = {
        name: "王小明",
        grade: "大一",
        imgSrc: "https://cms-carrier.ntpu.edu.tw/uploads/8d03554e2e3a4f8dacbcad536cf70bfc.jpg",
        wish: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!"
    }

    return (
        <div className="App">
            <Main>
                <Card user={user}/>
            </Main>
            <NavbarCustom>
                <NavbarItem>
                    <PreviousIcon/>
                </NavbarItem>
                <NavbarItem>
                    <PlayIcon/>
                </NavbarItem>
                <NavbarItem>
                    <NextIcon/>
                </NavbarItem>
            </NavbarCustom>
        </div>
    )
}