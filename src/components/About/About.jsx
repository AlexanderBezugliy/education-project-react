import React, { useRef } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const About = ({ setPlayState }) => {
    const aboutRef = useRef();

    useGSAP(() => {
        gsap.from(".about-right h3, .about-right h2, .about-right p", {
            y: 50,
            opacity: 0, 
            duration: 0.8,
            stagger: 0.2,
            
            scrollTrigger: {
                trigger: aboutRef.current, 
                start: "top 80%",          
            }
        })  
    }, { scope: aboutRef })

    return (
        <div ref={aboutRef} className='about '>
            {/* left */}
            <div onClick={() => setPlayState(true)}  className="about-left">
                <img src={about_img} alt="about_img" className='about-img' />
                <img src={play_icon} alt="play_icon" className='play-icon' />
            </div>

            {/* right */}
            <div className="about-right">
                <h3>ABOUT UNIVERSETY</h3>

                <h2>Nurturing Tomorrow's Leaders Today</h2>

                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About
