import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className='logo' />

            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link onClick={toggleMenu} to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link onClick={toggleMenu} to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link onClick={toggleMenu} to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link onClick={toggleMenu} to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link onClick={toggleMenu} to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link onClick={toggleMenu} to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
            </ul>

            {/* mobile-menu icon */}
            <img 
                onClick={toggleMenu} 
                src={menu_icon} 
                alt="menu_icon" 
                className='menu-icon' 
            />
        </nav>
    )
}

export default Navbar
