import React from 'react'
import '../portfolio/portfolio.css'
import photo from '../../assets/otc.png'

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="activePort">Featured</li>
                <li>React Apps</li>
                <li>Personal Projects</li>
                <li>Class Work</li>
            </ul>
            <div className="portfolioContainer">
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
            </div>
        </div>
    )
}