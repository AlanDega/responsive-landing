import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import "./header.css"

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    const handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            setScrolled(true);
            console.log('esta scrllenado')
        } else {
            setScrolled(false);
            console.log('no esta scrollenado')
        }
    }

    return (
        <>
            <div className={scrolled ? 'Header HeaderScrolled' : 'Header'}>
                <div className="HeaderGroup">
                    <Link to="/">
                        <img width="30" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1588804819/logo-designcode_ktj7ml.svg"></img>
                    </Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/downloads">Descargas</Link>
                    <Link to="/talleres">Talleres</Link>
                    <Link to="/compra">
                        <button>Compra</button>
                    </Link>
                </div>
            </div>

        </>
    )
}
