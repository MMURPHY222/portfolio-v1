import React from 'react'
import '../portfolioList/portfolioList.css'
// import photo from '../../assets/otc2.png'

export default function PortfolioList({ title, active, setSelected, id }) {
    return (
        <li className={active ? 'portfolioList activePort' : 'portfolioList'} onClick={setSelected(id)}>
            {title}
        </li>
    )
}