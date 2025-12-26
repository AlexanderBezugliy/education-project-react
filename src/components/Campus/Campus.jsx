import React, { useRef } from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Campus = () => {
    const campusRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: campusRef.current,
                start: "top 80%",
            }
        });

        tl.from(".gallery img", {
            scale: 0,
            opacity: 0,
            duration: 0.9,     
            stagger: 0.25,
            ease: "power2.out" 
        });
    }, { scope: campusRef });

    return (
        <div ref={campusRef} className='campus'>
            <div className='gallery'>
                <img src={gallery_1} alt="gallery_1" />
                <img src={gallery_2} alt="gallery_2" />
                <img src={gallery_3} alt="gallery_3" />
                <img src={gallery_4} alt="gallery_4" />
            </div>

            <button className='btn dark-btn'>
                See more here <img src={white_arrow} alt="white_arrow" />
            </button>
        </div>
    )
}

export default Campus
