import React from 'react'
import '../nav/nav.css'
import { Person, Mail } from '@material-ui/icons'

export default function Nav() {
    return (
        <div className='nav'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">MMURPHY.</a>
                    <div className="item">
                        <Person className="icon"/>
                        <span>+803 457 4113</span>
                    </div>
                    <div className="mail">
                        <Mail className="icon"/>
                        <span>meghanmurphy.212@gmail.com</span>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}