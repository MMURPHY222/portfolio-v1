import React from 'react'
import '../contact/contact.css'
import bikeMessenger from '../../assets/bikeMess.png'

export default function Contact() {

    return (
        <div className='contact' id='contact'>
            <div className="contactLeft">
                <img src={bikeMessenger} alt="bikePhoto" />
            </div>
            <div className="contactRight">
                <h2>Contact.</h2>
                <div className="email"> <a href="meghanmurphy.212@gmail.com"> meghanmurphy.212@gmail.com </a> </div>
                <div className="linkedIn"> <a href="https://www.linkedin.com/in/meghan-murphy-111445179/"> LinkedIn </a> </div>
                <div className="gitHub"> <a href="https://github.com/MMURPHY222"> GitHub</a> </div>
            </div>
        </div>
    )
}