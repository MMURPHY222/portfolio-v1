import React from 'react'
import '../portfolio/portfolio.css'
import photo from '../../assets/otc2.png'

export default function Portfolio() {
    const list = [
        {
            id: 'featured',
            title: 'Featured',
        }, 
        {
            id: 'reactApps',
            title: 'React Apps',
        },
        {
            id: 'personalProjects',
            title: 'Personal Projects'
        },
        {
            id: 'classWork',
            title: 'Class Work'
        }
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul></ul>
            <div className="portfolioContainer">
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
                <div className="portItem">
                    <img src={photo} alt =''></img>
                    <h3>Outdoor Trading Co.</h3>
                </div>
            </div>
        </div>
    )
}