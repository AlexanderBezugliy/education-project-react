import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

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


    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="msg-icon" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                
                <ul>
                    <li><img src={mail_icon} alt="mail-icon" /> email@gmail.com</li>
                    <li><img src={phone_icon} alt="mail-icon" /> +1 123-456-7890</li>
                    <li><img src={location_icon} alt="mail-icon" /> 77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
                </ul>
            </div>

            <div className='contact-col'>
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
