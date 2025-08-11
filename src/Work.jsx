import React, {useEffect} from 'react'
import css from './assets/css/work.css?raw'
export default function Work() {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const wrapper = document.querySelector('.cards-wrapper');
      const footerTop = document.querySelector('.sticky-footer-top');

      if (wrapper && footerTop) {
        const stickyFooter = wrapper.clientHeight;
        footerTop.style.height = `${stickyFooter}px`;
      }
    }, 500);

    // Cleanup the timeout on unmount
    return () => clearTimeout(timeout);
  }, []); // empty dependency array = run once on mount
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className='pb-container'>
        <div className='works boxes'>
          <div className='sticky-footer'>
            <div className='sticky-footer-top d-flex align-items-end ' >
              <div className='position-sticky w-100 bottom-2'>
                <div className='grid-w w-100'>
                  <div className='main-column'>
                    <div className='box-parent position-relative w-100 h-100'>
                      <div className='box box-menu w-100 h-100 overflow-hidden'>
                        <div className='box-inner w-100 h-100 '>
                          <img src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png" alt=""  className='w-100'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='position-relative col-start-1 col-start-7 col-end-25  w-100' style={{top: "var(--spacing-sticky)"}}>
                    <div className='cards-wrapper d-flex flex-column gap-3 align-self-start '>
                      <div className='d-grid grid-cols-18 gap-10 w-100 align-self-start'>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
             
          </div>
          <div className="card-work-w col-span-full lg:col-span-12 row-span-2 h-0 pt-[62.68%] lg:pt-[63.5%] relative">
                          <div className="box-parent relative w-full border-px border-secondary xl:border-0 transition-mode xl:transition-none overflow-hidden absolute-full">
                            <div
                              className="box  w-full h-full xl:border-b-px xl:border-secondary transition-mode overflow-hidden translate-x-0 translate-y-0"
                              style={{
                                rotate: "none",
                                scale: "none",
                                transform: "translate(0px, 0px)",
                                translate: "none",
                              }}>
                              <div
                                className="box-inner xl:border-t-px xl:border-x-px xl:border-secondary transition-mode w-full h-full translate-x-0 translate-y-0 "
                                style={{
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  translate: "none",
                                }}>
                                <div
                                  className="box-blur absolute-full z-2 pointer-events-none"
                                  style={{
                                    backdropFilter: "blur(0px)",
                                  }}
                                />
                                <a
                                  className="card-work group absolute-full overflow-hidden"
                                  data-terms="45"
                                  href="https://mooders.net/en/works/motionmotion/">
                                  <div className="card-work-clip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] opacity-0 xl:group-hover:opacity-100 clip">
                                    <div className="w-full h-0 pt-[42.09%]">
                                      <div
                                        className="card-work-mask absolute top-1/2 left-1/2 w-[var(--image-width)] h-[var(--image-height)] -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                          "--image-height": "215.26337758080288%",
                                          "--image-width": "142.8581802338247%",
                                        }}>
                                        <div
                                          className="image  w-full h-full "
                                          style={{
                                            rotate: "none",
                                            scale: "none",
                                            transform: "translate(-4.7333px, 0.2155px)",
                                            translate: "none",
                                          }}>
                                          <figure className="w-full h-full">
                                            <img
                                              alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                              className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                              data-ll-status="loaded"
                                              data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                              data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              height="150"
                                              sizes="      (max-width: 1023px) 100vw,      40vw"
                                              src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                              srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                              width="150"
                                            />
                                          </figure>
                                        </div>
                                      </div>
                                      <div className="absolute top-1/2 left-1/2 body-10 font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2">
                                        Discover
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-0 w-full h-full opacity-100 xl:group-hover:opacity-0">
                                    <div className="image  w-full h-full ">
                                      <figure className="w-full h-full">
                                        <img
                                          alt='Texte "MOTION" en bleu et rouge avec un effet de mouvement sur fond blanc'
                                          className="lazy opacity-0 w-full h-full object-cover entered loaded"
                                          data-ll-status="loaded"
                                          data-sizes="      (max-width: 1023px) 100vw,      40vw"
                                          data-src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          data-srcset="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          height="150"
                                          sizes="      (max-width: 1023px) 100vw,      40vw"
                                          src="https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png"
                                          srcSet="                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-480x270.png 480w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-768x431.png 768w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1200x674.png 1200w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1600x899.png 1600w,                  https://mooders.net/wp-content/uploads/2024/03/Capture-decran-2024-03-19-a-13.56.18-1920x1079.png 1920w,              "
                                          width="150"
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 w-full px-10 xl:px-20 pt-[1.5rem] md:pt-[2.2rem] pb-10 bg-primary z-1 text-secondary border-t-px border-secondary transition-[color,border-color,transform,background-color] duration-fast ease-out xl:translate-y-full xl:group-hover:translate-y-0">
                                    <span className="heading-24 mr-5">Motion Motion</span>
                                    <span className="uppercase">MOTION MOTION TRAILER</span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
        </div>
      </div>
    </>
  )
}
