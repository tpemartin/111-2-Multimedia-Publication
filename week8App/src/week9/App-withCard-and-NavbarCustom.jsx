import * as React from 'react';
import { Card, Main} from "../components/Layout2";
import { NavbarCustom, NavbarItem } from "../components/NavbarCustom";
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Stamp from '../components/Stamp2';

export default function App() {
    return (
        <div className="App">
            <Main>
                <Card>
                    <Stamp/>
                </Card>
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