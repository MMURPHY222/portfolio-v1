import React from 'react'
import '../works/work.css'

export default function Works() {
    return (
        <div className='works' id='works'>
            <h1 className="worksTitle">SKILLS</h1>
            <div className="slider">
                <div className="worksContainer">
                    <div className="worksItem">
                        <div className="worksLeft">
                            <ul className='skillList'>
                                <li>React</li>
                                <li>JavascriptES6+</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>Express.js</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>TDD</li>
                                <li>jQuery</li>
                                <li>Agile Methodologies</li>
                                <li>Command Line</li>
                                <li>Git</li>
                            </ul>
                        </div>
                        <div className="worksRight">
                            <p> Hello! I have a degree in Anthropology and Human Biology from Emory University, and a Certificate in Full Stack Web Development from Georgia Tech. I am a former college athlete, outdoors lover, and dog fanatic. College was a balancing act between a full course load, many hours of softball practice each week, and working at the Student Athletic Center, oftentimes starting my days at 5am and not getting home until 9 or 10 at night. My years at Emory shaped my strong work ethic, and my experiences as a competitive athlete have given me the ability to communicate respectfully and effectively with a team. I jump into new projects with curiosity and enthusiasm, unafraid to take on a leadership role within a group, but also content to step back and let others take the reins. I love working with people from diverse backgrounds and seeing different cultures and worldviews come together to make a unique, multifaceted product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}