import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home'
import DesenvolvimentoSus from '../pages/desenvolvimentoSust/DesenvolvimentoSus';

//Início

export default function SwitchPages(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/DesenvolvimentoSus' element={<DesenvolvimentoSus/>} />
            </Routes>
        </Router>
    )
}