import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const users = [
    { img: user_1, name: "William Jackson 1", city: "Edusity, USA", text: "Choosing to pursue my degree at Edusity was one of the best decision I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expactations." },
    { img: user_2, name: "William Jackson 2", city: "Edusity, USA", text: "Choosing to pursue my degree at Edusity was one of the best decision I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expactations." },
    { img: user_3, name: "William Jackson 3", city: "Edusity, USA", text: "Choosing to pursue my degree at Edusity was one of the best decision I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expactations." },
    { img: user_4, name: "William Jackson 4", city: "Edusity, USA", text: "Choosing to pursue my degree at Edusity was one of the best decision I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expactations." },
];

const Testimonials = () => {
    const slider = useRef();
    const translateX = useRef(0);
    
    const nextSlide = () => {
        if (translateX.current > -50) {
            translateX.current -= 25
        }
        slider.current.style.transform = `translateX(${translateX.current}%)`
    }

    const prevSlide = () => {
        if (translateX.current < 0) {
            translateX.current += 25
        }
        slider.current.style.transform = `translateX(${translateX.current}%)`
    }

    return (
        <div className='testimonials'>
            {/* arrows */}
            <img onClick={nextSlide} src={next_icon} alt="next-icon" className='next-btn' />
            <img onClick={prevSlide} src={back_icon} alt="next-icon" className='back-btn' />
            
            {/* sledes */}
            <div className='slider'>

                <ul ref={slider}>
                    {users.map((user, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className='user-info'>
                                    <img src={user.img} alt="user" />
                                    <div>
                                        <h3>{user.name}</h3>
                                        <span>{user.city}</span>
                                    </div>
                                </div>
                                <p>{user.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}

export default Testimonials
