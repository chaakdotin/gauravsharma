import React,{ useState} from 'react'

export default function home() {
    const [activeVideo, setActiveVideo] = useState('');

  const handleHover = (videoName) => {
    setActiveVideo(videoName);
    document.body.classList.add('color-white');
  };

  const handleLeave = () => {
    setActiveVideo('');
    document.body.classList.remove('color-white');
  };

  const videoSources = {
    urwerk: 'https://mooders.net/wp-content/uploads/2024/02/URWERK-Intro-3.mp4',
    cartier: 'https://mooders.net/wp-content/uploads/2024/02/cartier-time-project-2.mp4',
    tudor: 'https://mooders.net/wp-content/uploads/2024/05/tudor-dinner-explore-2.mp4',
    distorted: 'https://mooders.net/wp-content/uploads/2024/09/DB-Intro-copie.mp4',
    rolls: 'https://mooders.net/wp-content/uploads/2024/05/RR-4xTiming-short.mp4',
  };
  return (
    <>
        <div className="video-container">
            {Object.entries(videoSources).map(([key, src]) => (
                <video
                key={key}
                className={`bg-video ${activeVideo === key ? 'visible' : ''}`}
                src={src}
                autoPlay
                loop
                muted
                ></video>
            ))}
        </div>
        <div className='home1'>
            <div className='home'>
                <div className="tagline">
                    WE ARE A CREATIVE MUSIC TEAM AND A SOUND DESIGN STUDIO
                </div>

                <div className='d-flex justify-content-center flex-wrap'>
                    <div className="floating-words mb-5">
                        <div className='spans'  onMouseEnter={() => handleHover('urwerk')} onMouseLeave={handleLeave}>
                            <span>URWERK</span> 
                            <small>UR 220</small>
                        </div>
                        <div className='spans' onMouseEnter={() => handleHover('cartier')} onMouseLeave={handleLeave}>
                            <span>CARTIER</span> 
                            <small>TIME PROJECT</small>
                         </div>
                        <div className='spans' onMouseEnter={() => handleHover('tudor')} onMouseLeave={handleLeave}>
                            <span>TUDOR </span>
                            <small>DINNER EXPLORE</small>
                         </div>
                        <div className='spans' onMouseEnter={() => handleHover('distorted')} onMouseLeave={handleLeave}>
                            <span>DISTORTED BEAUTY </span>
                            <small>EXPLORATION SONORE</small>
                        </div>
                        <div className='spans' onMouseEnter={() => handleHover('rolls')} onMouseLeave={handleLeave}>
                            <span>ROLLS ROYCE{" "}</span>
                            <small>COSMOS</small>
                        </div>
                    </div>
                </div>
                {/* MOODERS big text with video inside Os */}
                
            </div>
        </div>
    </>
  )
}
