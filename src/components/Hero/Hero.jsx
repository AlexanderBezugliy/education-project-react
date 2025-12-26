import React, { useRef } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-scroll'



const Hero = () => {
    const container = useRef();

    const titleText = "We Ensure better education for a better world";
    const subTitleText = "Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education";

    useGSAP(() => {
        const tl = gsap.timeline();

        // title
        tl.from(".hero-char", {
            y: 50,              
            opacity: 0,        
            rotateX: -90,    
            filter: "blur(10px)", 
            stagger: 0.02,     
            duration: 0.8,
            ease: "back.out(1.7)" 
        });
        // descr
        tl.from(".hero-word", {
            y: 20,
            opacity: 0,
            filter: "blur(5px)",
            stagger: 0.01,      
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.4"); 
        // btn
        tl.from(".hero-btn", {
            x: -100,
            opacity: 0,
            filter: "blur(20px)",
            duration: 0.5,
            ease: "back.out"
        }, "-=0.2");

    }, { scope: container })

    return (
        <div
            ref={container}
            className='hero container'
        >
            <div className='hero-text'>
                {/* title */}
                <h1>
                    {titleText.split("").map((char, index) => (
                        <span key={index} className="hero-char" style={{ display: 'inline-block' }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                {/* descr */}
                <p>
                    {subTitleText.split(" ").map((word, index) => (
                        <span key={index} className="hero-word" style={{ display: 'inline-block', marginRight: '5px' }}>
                            {word}
                        </span>
                    ))}
                </p>
                
                <div className="hero-btn">
                    <Link className='btn'   to='about' smooth={true} offset={-100} duration={500}>
                        Explore more <img src={dark_arrow} alt="dark-arrow" />
                    </Link>
                </div>
            </div>
        </div>  
    )
}

export default Hero
