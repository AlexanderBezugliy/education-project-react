import React, { useRef } from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const programsData = [
    { 
        img: program_1, 
        icon: program_icon_1, 
        title: "Graduation Degree" 
    },
    { 
        img: program_2, 
        icon: program_icon_2, 
        title: "Masters Degree" 
    },
    { 
        img: program_3, 
        icon: program_icon_3, 
        title: "Post Graduation" 
    },
];

const Programs = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(".program", {
            x: '-100vw', 
            rotate: -360,
            borderRadius: "100%",
            overflow: "hidden", 
            opacity: 0,
            duration: 1.5,
            ease: "power2.out", 
            stagger: {// 3 -> 2 -> 1
                each: 0.4,    
                from: "end"   
            },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className='programs'>

            {programsData.map((program, index) => (
                <div className='program' key={index}>
                    <img src={program.img} alt={`program_${index + 1}`} />

                    <div className="caption">
                        <img src={program.icon} alt={`icon_${index + 1}`} />
                        <p>{program.title}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Programs
