import React, { useRef } from 'react'
import './Title.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Title = ({ title, subTitle }) => {
    const titleContainer = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleContainer.current,
                start: "top 85%", 
                toggleActions: "play none none none",
            }
        });

        tl.from(".sub-title", {
            y: -80,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });

        tl.from(".title-char", {
            y: 80,              
            rotateX: -90,       
            opacity: 0,         
            filter: "blur(10px)", 
            stagger: 0.07,      
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.4"); 

    }, { scope: titleContainer });

    return (
        <div ref={titleContainer} className='title'>
            <p className="sub-title">{title}</p>
            <h2>
                {subTitle.split("").map((char, index) => (
                    <span key={index} className="title-char" style={{ display: 'inline-block' }} >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h2>
        </div>
    )
}

export default Title
