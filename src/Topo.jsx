import React from "react";
import logo from './assets/logo-sct.png';
import './Topo.css';

export function Topo(){
    return(
        <header className="topo">
            
            <img src={logo} alt="" />
            <h1>#SeLigaNaSCT</h1>
        </header>
    )
}