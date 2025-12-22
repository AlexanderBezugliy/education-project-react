import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Hero /> */}

            <div className='container'>
                {/* <Title  title="Our PROGRAM" subTitle="What We Offer" /> */}
                {/* <Programs /> */}
                {/* <About /> */}
                {/* <Title  title="Gallery" subTitle="Campus Photos" /> */}
                {/* <Campus/> */}
                {/* <Title  title="TESTIMONIALS" subTitle="What Student Says" /> */}
                {/* <Testimonials /> */}
                <Title  title="Contact Us" subTitle="Get in Touch" />
                <Contact />
            </div>

        </>
    )
}

export default App
