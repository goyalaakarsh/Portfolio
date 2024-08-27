import React, { useState, useEffect, useRef } from 'react'
import './header.css'
import { gsap } from 'gsap';


const Header = () => {
    const navLogoRef = useRef(null);
    const navListRef = useRef(null);

    useEffect(() => {
        // Create a GSAP timeline animation
        const navtl = gsap.timeline();

        navtl.from(navLogoRef.current, {
            y: -30,
            opacity: 0,
            duration: 0.1,
            delay: 0.5
        });

        navtl.from(navListRef.current.children, {
            y: -30,
            opacity: 0,
            duration: 0.15,
            stagger: 0.1, // Adjust stagger time as needed
        });

    }, []);


    /* === Toggle Menu === */
    const [Toggle, showMenu] = useState(false);
    // const showMenu = () => showMenu(!Toggle);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav_logo" ref={navLogoRef}>Aakarsh</a>

                <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>

                    <ul className="nav_list grid" ref={navListRef}>
                        <li className="nav_item" >
                            <a href="#home" className="nav_link active-link">
                                <i className="uil uil-estate nav_icon "></i>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#projects" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Projects
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>


                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header