import React from 'react'

const VideoDisplay = ({ src, videoRef }) => {
    setTimeout(() => {
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
    }, 500);
    return (
        <video loop autoPlay muted
            ref={videoRef}
            style={{
                width: '100%',
                height: '100%',
                fit: 'cover',
            }}
        >
            <source src={src} type='video/webm' />
        </video>
    )
}

export default VideoDisplay
