import React, { useRef, useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const Contact = () => {
    const [result, setResult] = useState("");
    // gsap refs
    const contactLeft = useRef();
    const contactRight = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactLeft.current,
                start: "top 80%",
            }
        });

        tl.from(contactLeft.current, {
            x: '-100vw',
            opacity: 0,   
            duration: 1,  
            ease: "power3.out"
        })

        tl.from(contactRight.current, {
            x: '100vw', 
            opacity: 0,  
            duration: 1,
            ease: "power3.out"
        }, "-=0.9")
    })


    return (
        <div className='contact'>
            <div ref={contactLeft} className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="msg-icon" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                
                <ul>
                    <li><img src={mail_icon} alt="mail-icon" /> email@gmail.com</li>
                    <li><img src={phone_icon} alt="mail-icon" /> +1 123-456-7890</li>
                    <li><img src={location_icon} alt="mail-icon" /> 77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
                </ul>
            </div>

            <div ref={contactRight} className='contact-col'>
                <form 
                    onSubmit={onSubmit}
                >
                    {/* name */}
                    <label>Your name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Enter your name' 
                        required 
                    />

                    {/* phone */}
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone"
                        placeholder='Enter your mobile number'
                        required
                    />

                    {/* number */}
                    <label>Write your messages here</label>
                    <textarea 
                        name="message" 
                        rows="6" 
                        placeholder='Enter your message' 
                        required
                    ></textarea>
                    
                    {/* btn submit */}
                    <button
                        type='submit'
                        className='btn dark-btn'
                    >
                        Submit now <img src={white_arrow} alt="white-arrow" />
                    </button>
                </form>
                
                {/* span result web3 */}
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
