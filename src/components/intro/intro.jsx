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
                    <h2>Hi There, I'm</h2>
                    <h1>Meghan Murphy</h1>
                    <h3>Freelance<span></span></h3>

                </div>
            </div>
        </div>
    )
}