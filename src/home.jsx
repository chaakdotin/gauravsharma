import React,{ useState} from 'react'
import css from './assets/css/home.css?raw'
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
        <style dangerouslySetInnerHTML={{ __html: css }} />
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
            <div className='home grid-cols-24 gap-x-grid'>
                <div className="tagline">
                    WE ARE A CREATIVE MUSIC TEAM AND A SOUND DESIGN STUDIO
                </div>
                <div className="floating-words">
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
                <div className='home-logo position-relative  col-span-full px-container '>
                    <div className="position-relative w-full">
                        <svg
                            fill="none"
                            height="163"
                            viewBox="0 0 942 163"
                            width="942"
                            xmlns="http://www.w3.org/2000/svg">
                            <clipPath id="clipHomeM">
                            <rect fill="#D9D9D9" height="163" width="159" />
                            </clipPath>
                            <clipPath id="clipHomeE">
                            <rect fill="#D9D9D9" height="163" width="101" x="572" />
                            </clipPath>
                            <clipPath id="clipHomeR">
                            <rect fill="#D9D9D9" height="163" width="117" x="693" />
                            </clipPath>
                            <clipPath id="clipHomeS">
                            <rect fill="#D9D9D9" height="163" width="124" x="818" />
                            </clipPath>
                            <g clipPath="url(#clipHomeM)">
                            <path
                                className="letter"
                                d="M0 5.20801H35.8497L78.6965 122.018H79.1363L122.195 5.20801H158.045V157.794H126.354V63.6273H125.914L94.6343 157.794H63.1841L32.1313 63.6273H31.6914V157.794H0V5.20801Z"
                                data-svg-origin="0 5.208010196685791"
                                fill="currentColor"
                                style={{
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                            />
                            </g>
                            <g clipPath="url(#clipHomeE)">
                            <path
                                className="letter"
                                d="M573.042 5.20801H671.622V34.8563H605.387V65.8067H665.718V94.1388H605.387V128.146H671.835V157.794H573.028V5.20801H573.042Z"
                                data-svg-origin="573.0280151367188 5.208010196685791"
                                fill="currentColor"
                                style={{
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                            />
                            </g>
                            <g clipPath="url(#clipHomeR)">
                            <path
                                className="letter"
                                d="M811.304 157.78H776.547L747.692 104.158H728.021V157.78H695.667V5.20801H757.971C790.324 5.20801 810.21 23.9594 810.21 54.471C810.21 76.704 799.072 93.2755 780.267 100.465V100.677L811.304 157.78ZM754.036 74.7363C769.566 74.7363 777.863 67.5474 777.863 54.2446C777.863 40.9417 769.773 34.6299 754.036 34.6299H728.021V74.7363H754.036Z"
                                data-svg-origin="695.6669921875 5.208010196685791"
                                fill="currentColor"
                                style={{
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                            />
                            </g>
                            <g clipPath="url(#clipHomeS)">
                            <path
                                className="letter"
                                d="M820.911 107.428L852.6 100.677C856.534 123.348 865.719 132.066 886.055 132.066C901.141 132.066 909.653 126.618 909.653 117.022C909.653 106.564 902.221 100.89 876.87 92.3838C841.234 80.3971 827.907 67.5333 827.907 45.0883C827.907 19.5865 849.109 1.9248 879.71 1.9248C910.311 1.9248 933.044 19.7987 937.858 46.8289L906.377 53.5794C902.221 38.0972 893.702 30.908 879.71 30.908C867.686 30.908 859.81 36.3565 859.81 44.8618C859.81 52.7021 866.37 57.0609 889.103 64.7029C927.143 77.7795 942 92.3838 942 117.022C942 143.402 919.267 161.05 885.598 161.05C849.095 161.05 826.363 142.298 820.898 107.428H820.911Z"
                                data-svg-origin="820.8980102539062 1.9248000383377075"
                                fill="currentColor"
                                style={{
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                            />
                            </g>
                        </svg>
                        <div className="home-logo-clip svg-wrapper position-absolute top-0">
                            <svg
                            fill="none"
                            height="150"
                            viewBox="0 0 373 150"
                            width="373"
                            xmlns="http://www.w3.org/2000/svg">
                            <clipPath
                                clipPathUnits="objectBoundingBox"
                                id="homeLogoClip"
                                style={{
                                transform: "scale(0.00268096514, 0.00666666666)",
                                }}>
                                <path
                                className="logo-home-path-1"
                                d="M140.624 35.6678C134.227 24.4532 125.401 15.7488 114.227 9.55442C103.012 3.36009 90.057 0.242676 75.361 0.242676C60.664 0.242676 48.073 3.36009 36.818 9.55442C25.563 15.7488 16.737 24.4532 10.421 35.5868C4.06499 46.7204 0.906982 59.7164 0.906982 74.5342C0.906982 85.7488 2.76999 95.9512 6.49399 105.182C10.219 114.413 15.401 122.388 22.081 129.069C28.761 135.749 36.656 140.89 45.765 144.534C54.875 148.178 64.834 150 75.644 150C86.454 150 96.373 148.178 105.523 144.534C114.672 140.89 122.527 135.749 129.207 129.069C135.887 122.388 141.069 114.413 144.794 105.182C148.519 95.9512 150.381 85.7893 150.381 74.7366C150.381 59.8783 147.183 46.8824 140.745 35.6678H140.624Z"
                                data-svg-origin="0.9069820046424866 0.2426760196685791"
                                fill="black"
                                style={{
                                    rotate: "none",
                                    scale: "none",
                                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                                    translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                                />
                                <path
                                className="logo-home-path-2"
                                d="M263.38 35.6683C256.983 24.4537 248.157 15.7492 236.983 9.55491C225.768 3.36057 212.813 0.243164 198.076 0.243164C183.339 0.243164 170.789 3.36057 159.534 9.55491C148.278 15.7492 139.453 24.4537 133.137 35.5873C126.78 46.7209 123.623 59.7169 123.623 74.5347C123.623 85.7493 125.485 95.9517 129.21 105.182C132.934 114.413 138.117 122.389 144.797 129.069C151.477 135.749 159.372 140.891 168.481 144.535C177.59 148.178 187.55 150 198.359 150C209.169 150 219.088 148.178 228.238 144.535C237.388 140.891 245.242 135.749 251.922 129.069C258.602 122.389 263.785 114.413 267.509 105.182C271.234 95.9517 273.096 85.7897 273.096 74.7371C273.096 59.8788 269.898 46.8828 263.461 35.6683H263.38Z"
                                data-svg-origin="123.62300109863281 0.24316401779651642"
                                fill="black"
                                style={{
                                    rotate: "none",
                                    scale: "none",
                                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                                    translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                                />
                                <path
                                className="logo-home-path-3"
                                d="M362.53 35.6683C356.134 24.4537 347.308 15.7492 336.134 9.55491C324.919 3.36057 311.964 0.243164 297.267 0.243164C285.445 0.243164 274.676 2.34843 265 6.51847V143.361C265.891 143.765 266.7 144.211 267.632 144.535C276.741 148.178 286.7 150 297.51 150C308.32 150 318.239 148.178 327.389 144.535C336.538 140.891 344.393 135.749 351.073 129.069C357.753 122.389 362.935 114.413 366.66 105.182C370.385 95.9517 372.247 85.7897 372.247 74.7371C372.247 59.8788 369.049 46.8828 362.611 35.6683H362.53Z"
                                data-svg-origin="265 0.24316401779651642"
                                fill="black"
                                style={{
                                    rotate: "none",
                                    scale: "none",
                                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                                    transformOrigin: "0px 0px",
                                    translate: "none",
                                }}
                                transform="matrix(1,0,0,1,0,0)"
                                />
                            </clipPath>
                            </svg>
                        </div>
                        </div>
                </div>
                {/* MOODERS big text with video inside Os */}
                
            </div>
        </div>
    </>
  )
}
