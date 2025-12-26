import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


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

    // gsap
    const logoRef = useRef(null);
    const menuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline(); 

        tl.from(logoRef.current, {
            x: -100,  
            opacity: 0,   
            duration: 1,  
            ease: "power3.out"
        });

        tl.from(menuRef.current.children, {
            x: 50,        
            opacity: 0,  
            duration: 0.8,
            stagger: 0.1, 
            ease: "power3.out"
        }, "-=0.8");

        tl.from(mobileMenuRef.current, {
            x: 50,        
            opacity: 0,  
            duration: 0.4,
            stagger: 0.1, 
            ease: "power3.out"
        }, "<")
    })

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            {/* logo */}
            <Link to='hero' smooth={true} offset={0}><img ref={logoRef} src={logo} alt="logo" className='logo' /></Link>

            <ul ref={menuRef} className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link onClick={toggleMenu} to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link onClick={toggleMenu} to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link onClick={toggleMenu} to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link onClick={toggleMenu} to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link onClick={toggleMenu} to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link onClick={toggleMenu} to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
            </ul>

            {/* mobile-menu icon */}
            <img 
                ref={mobileMenuRef}
                onClick={toggleMenu} 
                src={menu_icon} 
                alt="menu_icon" 
                className='menu-icon' 
            />
        </nav>
    )
}

export default Navbar
