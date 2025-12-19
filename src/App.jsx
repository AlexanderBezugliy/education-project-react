import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='container'>
                <Programs />
            </div>
        </>
    )
}

export default App
