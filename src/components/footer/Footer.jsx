import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer >
            <div className='name'>
                <h2>Aakarsh</h2>
            </div>
            <div className='footer_social-icons'>
                <a href="https://www.instagram.com/aakarshgoyall"><i className="uil uil-instagram footer_icon"></i></a>
                <a href="https://github.com/goyalaakarsh"><i className="uil uil-github footer_icon "></i></a>
                <a href="https://www.linkedin.com/in/goyalaakarsh/"><i className="uil uil-linkedin footer_icon "></i></a>

            </div>
            <div className='copyright'>
                <p>© Copyright 2024. All rights reserved. </p>
            </div>
        </footer>
    )
}

export default Footer