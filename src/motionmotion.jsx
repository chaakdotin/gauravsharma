import React from 'react'
import css from './assets/css/motion.css?raw'
export default function Motionmotion() {

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div style={{width:"100vw", height:"7.5rem"}}> </div> 
            <div className=" position-relative">
                <div className="grid-w w-full">
                    {/* <div className=""> */} 
                        <div className="sidebar">
                            <div className='sidebar-content'>
                                <div className='sliderbar-img'>
                                    <div className='img-container'>
                                        <img src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png" alt="" />
                                    </div>
                                </div>
                                <h1 className="heading-32  transition-mode">
                                    MOTION MOTION TRAILER
                                </h1>
                                <div className='px-container pt-2 pb-3'>
                                    <h4 className="heading-20  transition-mode pt-2 pb-1 border-bottom w-100">
                                        MOTION MOTION
                                    </h4>
                                    <h4 className="heading-10 border-bottom  transition-mode pt-2 pb-1 border-bottom w-100">
                                        Services
                                    </h4>
                                    <h4 className="heading-20  transition-mode pt-2 pb-1 border-bottom w-100">
                                        SOUND DESIGN / MUSIC
                                    </h4>
                                    <h4 className="heading-10 border-bottom  transition-mode pt-2 pb-1 border-bottom w-100">
                                        Areas of activity
                                    </h4>
                                    <h4 className="heading-20  transition-mode pt-2 pb-1 border-bottom w-100">
                                        ART / EVENT
                                    </h4>
                                    <h4 className="heading-10 border-bottom  transition-mode pt-2 pb-1 border-bottom w-100">
                                       CREDITS
                                    </h4>
                                    <h4 className="heading-20  transition-mode pt-2 pb-1 border-bottom w-100">
                                        DA & ANIMATION: NŌBL
                                    </h4>
                                     
                                </div>
                                <div className='sidebar-content-2'>

                                    <span>Work</span>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}


                    <div className="main-content">
                        <div className='grid col-span-full mb-3'>
                            <div className='card-work-w-1 h-0  '>
                                <div className="content">
                                    <div className='content-img'>
                                        <div className='main-content-img position-absolute top-0 left-0 w-100 h-100 d-flex'>
                                            <img src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png" alt="w-100 h-100 " />
                                        </div>
                                    </div>
                                    <div className='inner-content border-bottom-width' >
                                        <div>
                                            <span className='title'>Motion Motion Trailer</span>
                                        </div>
                                    </div>  
                                    <div className='inner-content border-bottom-width' >
                                        <div>
                                            <span className='title-2'>Motion Motion</span>
                                        </div>
                                    </div>  
                                </div>
                            </div>  
                            <div className='card-work-w-1 h-0 '>
                                <div className="content border-top-width">
                                    <div className='inner-content-grid border-top-width' >
                                        <div className='box-1'>
                                           <strong> <span>Original music and sound design for a key Motion Design event:</span></strong>
                                            <span className='fw-light'>The Motion Motion Festival</span>
                                        </div>
                                        <div className='box-2'>
                                            Every year in Nantes, the Motion Motion festival takes place. Organized and supported by a collective of motion designers from Nantes, including and  , Motion Motion is one of the most important events for motion design. Through conferences, exhibitions, meetings, and concerts, it brings together the best of French and international motion design over three days, and attracts a very diverse audience, made up of students, professionals, and curious people from all walks of life.
                                        </div>
                                    </div>  
                                    <div className='content-img border-top'>
                                        <div className='main-content-img position-absolute top-0 left-0 w-100 h-100 d-flex'>
                                            <img src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png" alt="w-100 h-100 " />
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>       
                           
                        </div>
                        <div className='card-work-w-1 h-0  '>
                            <div className="content">
                                <div className='content-img'>
                                    <div className='main-content-img position-absolute top-0 left-0 w-100 h-100 d-flex'>
                                        <img src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png" alt="w-100 h-100 " />
                                    </div>
                                </div>
                                <div className='inner-content border-bottom-width' >
                                    <div>
                                        <span className='title'>Motion Motion Trailer</span>
                                    </div>
                                </div>  
                                
                            </div>
                        </div>  
                    </div>
                </div>
                
            </div>
            <div className='w-100 footers px-container'>
                <div className='inner-footer'>
                    <h2 className="works-archives text-center text-transparent ">
                        <div className="text-full ">
                            <span className="text-full-el" style={{fontSize: 350.363, letterSpacing: -31.1754}}>Contact us</span>
                        </div>
                    
                    </h2>
                    <div className='d-flex flex-column gap-3'>
                        <div className='email'>
                            <div className='email-1'>
                                <span className=''>Hello@mooders.net</span>
                            </div>
                        </div>
                        <div className='email'>
                            <div className='email-1'>
                                <span className=''>Hello@mooders.net</span>
                            </div>
                        </div>
                        <div className='email'>
                            <div className='email-1'>
                                <span className=''>Hello@mooders.net</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
