import React from 'react'
import '../intro/intro.css'
import photo from '../../assets/meNMarsha.png'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="leftIntro">
                <div className="imageContainer">
                    <img src={photo} alt='ProfilePhoto'/>
                </div>
            </div>
            <div className="rightIntro">
                <div className="wrapperIntro">
                    <h2 className="greeting">Hi There, I'm</h2>
                    <h1 className="name">Meghan Murphy</h1>
                </div>
            </div>
        </div>
    )
}