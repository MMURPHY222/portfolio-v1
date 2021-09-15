import React from 'react'
import '../nav/nav.css'
import { Mail, MenuOpenTwoTone } from '@material-ui/icons'

export default function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={'nav ' + (menuOpen && 'active')}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">MMURPHY.</a>
            </div>
            <div className="right">
                <ul>
                    <li><a href="#"> Home</a></li>
                    <li><a href="#"> About</a></li>
                    <li><a href="#"> Work</a></li>
                    <li><a href="#"> Project</a></li>
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

{/* <div className='nav'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">MMURPHY.</a>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="#"> Home</a></li>
                        <li><a href="#"> About</a></li>
                        <li><a href="#"> Work</a></li>
                        <li><a href="#"> Project</a></li>
                    </ul>
                </div>
            </div>
        </div> */}



    //     <div>
    //     <nav>
    //         <div className="logo">
    //             <h4>MMURPHY.</h4>
    //         </div>
    //         <ul>
    //             <li><a href="#"> Home</a></li>
    //             <li><a href="#"> About</a></li>
    //             <li><a href="#"> Work</a></li>
    //             <li><a href="#"> Project</a></li>
    //         </ul>
    //     </nav>
    // </div>