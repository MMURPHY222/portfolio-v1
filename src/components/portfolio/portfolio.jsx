import React from 'react'
import { useState } from 'react'
import '../portfolio/portfolio.css'
import PortfolioList from '../portfolioList/PortfolioList'
import {
    featuredPortfolio, 
    reactAppsPortfolio,
    personalProjectsPortfolio,
    classWorkPortfolio
} from '../../data'
import { useEffect } from 'react'

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

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

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "reactApps":
                setData(reactAppsPortfolio);
                break;
            case "personalProjects":
                setData(personalProjectsPortfolio);
                break;
            case "classWork":
                setData(classWorkPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                        selected={selected}
                    />
                ))}
            </ul>
            <div className="portfolioContainer">
                {data.map((el) => (
                <div className="portItem">
                    <img src={el.img} alt =''></img>
                    <a href={el.liveLink} id='liveLink' target="_blank" rel="noreferrer">Live Link</a>
                    <a href={el.gitHub} id="gitHub" target="_blank" rel="noreferrer">Github</a>
                    <h3>{el.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}