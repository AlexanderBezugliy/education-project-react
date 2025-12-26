import React from 'react'
import './Loader.css'
import { Triangle } from 'react-loader-spinner'



const Loader = () => {
    return (
        <div className="loader-container">
            <Triangle
                visible={true}
                height="100"
                width="100"
                color="#468bfa"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader;
