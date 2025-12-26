import React, { useRef } from 'react'
import './VideoPlayer.css'


const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

    return (
        <div 
            onClick={closePlayer}
            ref={player}
            className={`video-player ${playState ? '' : 'hide'}`}
        >
            {/* video */}
            {playState && (
                <iframe 
                    src="https://www.youtube.com/embed/8qAlXjpVad8?autoplay=1&mute=1&controls=1&rel=0"                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            )}
        </div>
    )
}

export default VideoPlayer
