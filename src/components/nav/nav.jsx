import React from 'react'
import '../nav/nav.css'

export default function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={'nav ' + (menuOpen && 'active')}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">MMURPHY.</a>
            </div>
            <div className="right">
                <ul>
                    <li><a href="#intro"> Intro</a></li>
                    <li><a href="#portfolio"> Portfolio</a></li>
                    <li><a href="#works"> Works</a></li>
                    <li><a href="#contact"> Contact</a></li>
                </ul>
            </div>
            <div className={'burger ' + (menuOpen && 'burgerActive')} onClick={()=> setMenuOpen(!menuOpen)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </div>
    )
}
