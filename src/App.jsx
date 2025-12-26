import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Loader from './components/Loader/Loader'
import hero_bg from './assets/hero.png'

// gsap setup
import gsap from 'gsap'                            // ! ! !
import { ScrollTrigger } from 'gsap/ScrollTrigger' // ! ! !
import { SplitText } from 'gsap/all';              // ! ! !
gsap.registerPlugin(ScrollTrigger, SplitText);     // ! ! !


const App = () => {
    const [playState, setPlayState] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadResources = async () => {
            try {
                const tasks = [];

                const imagePromise = new Promise((resolve) => {
                    const img = new Image();

                    img.src = hero_bg;
                    img.onload = resolve; 
                    img.onerror = resolve; 
                });

                tasks.push(imagePromise);

                const minTimePromise = new Promise((resolve) => {
                    setTimeout(resolve, 3500); 
                });
                tasks.push(minTimePromise);

                await Promise.all(tasks);
            } catch (error) {
                console.error("Ошибка загрузки:", error);
            } finally {
                setLoading(false);
            }
        };

        loadResources();
    }, [])
    
    if (loading) return <Loader />

    return (
        <>
            <Navbar />
            <Hero />

            <div className='container'>
                <Title  title="Our PROGRAM" subTitle="What We Offer" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title  title="Gallery" subTitle="Campus Photos" />
                <Campus/>
                <Title  title="TESTIMONIALS" subTitle="What Student Says" />
                <Testimonials />
                <Title  title="Contact Us" subTitle="Get in Touch" />
                <Contact />
                <Footer />
            </div>

            {/* video */}
            <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        </>
    )
}

export default App
