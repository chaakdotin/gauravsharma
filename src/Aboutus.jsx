import React, { useEffect, useRef, useState } from 'react'
import css from './assets/css/Aboutus.css?raw'
export default function work1() {
    const stickyFooterTopHeight = useRef(null);
    const [height, setHeight]  = useState(0)
    
    useEffect(() => {
        if (stickyFooterTopHeight.current) {
            setHeight(stickyFooterTopHeight.current.offsetHeight);
        }
    }, []); // run once after mount
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div style={{ width: "100vw", height: "7.5rem" }}> </div>
            <div className="sticky-footer-top flex items-end" style={{ height: height*2.2 }}>
                <div className="xl:sticky xl:bottom-[2rem] w-full" ref={stickyFooterTopHeight}>
                    <div className="relative lg:sticky lg:top-sticky grid-w w-full lg:h-available mb-10 lg:mb-0 pointer-events-none z-1">

                        <div className="main-column col-span-full lg:col-start-7 lg:col-end-13 pointer-events-auto">

                            <div className='box-parent relative w-full border-px border-secondarys xl:border-0 transition-mode xl:transition-none overflow-hidden h-full'>
                                <div className='box  box-menu  w-full h-full xl:border-b-px xl:border-secondarys transition-mode overflow-hidden translate-x-0 translate-y-0' style={{ transform: "translate(0px, 0px)" }}>
                                    <div className='box-inner xl:border-t-px xl:border-x-px xl:border-secondarys transition-mode w-full h-full translate-x-0 translate-y-0' style={{ transform: "translate(0px, 0px)" }}>
                                        <div className='flex flex-col-reverse lg:flex-col justify-between h-full'>
                                            <div className='flex flex-col'>
                                                <div data-target="about" className="anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4 a">
                                                    <span className="block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode">About</span>
                                                </div>
                                                <div data-target="about" className="anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4">
                                                    <span className="block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode">About</span>
                                                </div>
                                                <div data-target="about" className="anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4">
                                                    <span className="block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode">About</span>
                                                </div>

                                                <div data-target="about" className="anchor relative w-full px-container uppercase text-secondary bg-primary transition-mode cursor-pointer z-4">
                                                    <span className="block w-full border-b-px border-secondary-rgb/15 pt-10 pb-[0.8rem] md:pb-[0.6rem] transition-mode">About</span>
                                                </div>
                                            </div>
                                            <div className='flex items-end px-container py-2 md:py-10 h-[8.8rem] border-secondarys border-b-px lg:border-b-0 text-secondary heading-48 font-bold transition-mode'>About</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div data-anchor="about" className="relative grid-w w-full xl:h-available lg:-mt-[var(--h-available)]">
                        <div className='col-span-full md:col-span-12 lg:col-start-1 lg:col-end-7 mb-10 md:mb-0 z-1'>
                            <div className="box-parent relative w-full border-px border-secondarys xl:border-0 transition-mode xl:transition-none overflow-hidden h-full">
                                <div className='box w-full h-full xl:border-b-px xl:border-secondarys transition-mode overflow-hidden translate-x-0 translate-y-0'>
                                    <div className="box-inner xl:border-t-px xl:border-x-px xl:border-secondarys transition-mode w-full h-full translate-x-0 translate-y-0 px-container py-20">
                                        <h1 className="heading-20 !leading-[2.6rem] mb-10 text-secondary transition-mode">We are composers and sound designers</h1>
                                        <div className="wysiwyg text-secondary transition-mode">
                                            <p>And if we had to summarize in a few words what we do, it would be to link sound to non-sound, to offer know-how and experience, rather than imposing a universe.</p>
                                            <p>Images, emotions, messages, we use sound and music as raw material to adorn, enrich, complete.</p>
                                            <p>We always start by listening, always, to be sure to understand in depth why we are being addressed. And then we propose, we refine. It’s not as fast as AI, but it’s certainly more embodied.</p>
                                            <p>Mooders is a musical story that goes back to middle school, a professional activity that has existed for around ten years. Lots of France, a little international. Lots of films, a little live. Orders, personal projects, stereo, but also multichannel. Around thirty musical instruments, two studios, four children (not together), lots of partners, because we don’t know how to do EVERYTHING ourselves, but we know how to surround ourselves well.</p>
                                            <p>And above all, we love our job, because the variety of subjects, media, people we talk to, and music covered makes any routine impossible.</p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative col-span-full md:col-span-12 lg:col-start-13 lg:col-end-25 z-1'>
                            <div className='box-parent relative w-full border-px border-secondarys xl:border-0 transition-mode xl:transition-none overflow-hidden h-full'>
                                <div className='box w-full h-full xl:border-b-px xl:border-secondarys transition-mode overflow-hidden translate-x-0 translate-y-0'>
                                    <div className='box-inner xl:border-t-px xl:border-x-px xl:border-secondarys transition-mode w-full h-full translate-x-0 translate-y-0 '>
                                        <div className="box-blur absolute-full z-2 pointer-events-none" style={{ backdropFilter: 'blur(0px)' }}></div>
                                        <div className="w-full h-0 pt-[110%] md:h-full md:pt-0">
                                            <div className="absolute-full"><div className="image  w-full h-full ">
                                                <figure className="w-full h-full">
                                                    <img className="  w-full h-full    object-cover " width="150" height="150"
                                                        alt="two men on a rock stairs outside. one is seated the other is standing on his feet."
                                                        src="https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-480x589.jpg"
                                                        srcset="
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-480x589.jpg 480w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-768x943.jpg 768w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-1200x1473.jpg 1200w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-1600x1965.jpg 1600w,
                                                                https://mooders.net/wp-content/uploads/2024/05/MG_5917_large_2-scaled-e1715701192152-1920x2358.jpg 1920w,"
                                                        sizes="(max-width: 1023px) 100vw, 50vw"
                                                    />
                                                </figure>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-anchor="service" className='about-services relative grid-w w-full xl:min-h-available mt-10'>
                        <div className='relative xl:sticky xl:top-sticky col-span-full md:col-span-12 lg:col-start-1 lg:col-end-7 xl:h-available border-secondary border-px z-1'>
                            <div className="w-full h-0 pt-[110%] md:h-full md:pt-0">
                                <div className="absolute-full">
                                    <div className="image  w-full h-full ">
                                        <figure className="w-full h-full">
                                            <img className="lazy opacity-0s w-full h-full object-cover entered loaded" width="150" height="150" alt=""
                                                data-src="https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg"
                                                data-srcset="
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg 480w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-768x512.jpeg 768w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-1200x800.jpeg 1200w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1600w,
                                            https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1920w,"
                                                data-sizes="(max-width: 1023px) 100vw, 25vw"
                                                data-ll-status="loaded"
                                                sizes="(max-width: 1023px) 100vw, 25vw"
                                                srcset="
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg 480w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-768x512.jpeg 768w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-1200x800.jpeg 1200w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1600w,
                                                https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29.jpeg 1920w,"
                                                src="https://mooders.net/wp-content/uploads/2024/04/b1001b5a13f7d6fc8a44b51708ec4b29-480x320.jpeg"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='order-first md:order-last mb-10 md:mb-0 col-span-full md:col-start-13 md:col-end-25 z-1'>
                            <div className="border-px border-secondary py-20 h-full">
                                <a href="https://mooders.net/en/aboutus/original-music/" className="group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15">
                                        <div className="w-full lg:w-[75%] xl:w-[43%]">
                                            <div className="heading-20 uppercase ">Original Music</div>
                                            <div className="body-14 mt-10">Create emotions, enhance a story, give a tone</div>
                                        </div>
                                        <div className="body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15">Discover</div>
                                    </div>
                                </a>
                                <a href="https://mooders.net/en/aboutus/sound-design/" className="group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15">
                                        <div className="w-full lg:w-[75%] xl:w-[43%]">
                                            <div className="heading-20 uppercase ">Sound design</div>
                                            <div className="body-14 mt-10">Create sound matter, textures, atmospheres and soundscapes</div>
                                        </div>
                                        <div className="body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15">Discover</div>
                                    </div>
                                </a>
                                <a href="https://mooders.net/en/aboutus/sound-production/" className="group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15">
                                        <div className="w-full lg:w-[75%] xl:w-[43%]">
                                            <div className="heading-20 uppercase ">Sound Production</div>
                                            <div className="body-14 mt-10">Answer a brief, supervise a soundtrack</div>
                                        </div>
                                        <div className="body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15">Discover</div>
                                    </div>
                                </a>
                                <a href="https://mooders.net/en/aboutus/post-production/" className="group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15">
                                        <div className="w-full lg:w-[75%] xl:w-[43%]">
                                            <div className="heading-20 uppercase ">Post Production</div>
                                            <div className="body-14 mt-10">Cast and record a voice-over, mix to broadcast standards</div>
                                        </div>
                                        <div className="body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15">Discover</div>
                                    </div>
                                </a>
                                <a href="https://mooders.net/en/aboutus/technical-support/" className="group block w-full px-container text-secondary transition-mode xl:hover:bg-secondary xl:hover:text-primary">
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full py-20 lg:pb-[1.6rem] group-first:border-t-px border-b-px border-secondary-rgb/15">
                                        <div className="w-full lg:w-[75%] xl:w-[43%]">
                                            <div className="heading-20 uppercase ">Technical Support</div>
                                            <div className="body-14 mt-10">Hardware recommendations, set up sound diffusion systems</div>
                                        </div>
                                        <div className="body-12 uppercase mt-10 lg:mt-0 px-20 pt-[1.4rem] pb-[1.2rem] md:pb-10 border-px border-secondary-rgb/15 text-secondary transition-mode xl:group-hover:text-primary xl:group-hover:border-primary-rgb/15">Discover</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="sticky-footer-bottom relative w-full px-container bg-primary transition-mode z-0"
                style={{
                    marginTop: -height/1.93 ,
                }}>
                <section className="xl:min-h-[500px] xl:h-available mt-10 p-container bg-primary border-px border-secondary transition-mode">
                    <div className="text-full text-stroke leading-[1] uppercase xl:-ml-[0.5rem]">
                    <span
                        className="text-full-el"
                        style={{
                        fontSize: "208.248px",
                        letterSpacing: "-14.5774px",
                        }}>
                        Contactez-nous
                    </span>
                    </div>
                    <div className="flex flex-col gap-y-10 xl:-mt-[2rem]">
                    <div className="w-full body-14 md:heading-20 uppercase px-container pb-5 md:pb-[1.5rem] pt-[3rem] md:pt-[6rem] border-px border-secondary text-secondary transition-mode">
                        <a className="link" href="mailto:hello@mooders.net">
                        <span
                            className="words chars splitting"
                            data-splitting="chars"
                            style={{
                            "--char-total": "17",
                            "--word-total": "1",
                            }}>
                            <span
                            className="word"
                            data-word="hello@mooders.net"
                            style={{
                                "--word-index": "0",
                            }}>
                            <span
                                className="char"
                                data-char="h"
                                style={{
                                "--char-index": "0",
                                }}>
                                h
                            </span>
                            <span
                                className="char"
                                data-char="e"
                                style={{
                                "--char-index": "1",
                                }}>
                                e
                            </span>
                            <span
                                className="char"
                                data-char="l"
                                style={{
                                "--char-index": "2",
                                }}>
                                l
                            </span>
                            <span
                                className="char"
                                data-char="l"
                                style={{
                                "--char-index": "3",
                                }}>
                                l
                            </span>
                            <span
                                className="char"
                                data-char="o"
                                style={{
                                "--char-index": "4",
                                }}>
                                o
                            </span>
                            <span
                                className="char"
                                data-char="@"
                                style={{
                                "--char-index": "5",
                                }}>
                                @
                            </span>
                            <span
                                className="char"
                                data-char="m"
                                style={{
                                "--char-index": "6",
                                }}>
                                m
                            </span>
                            <span
                                className="char"
                                data-char="o"
                                style={{
                                "--char-index": "7",
                                }}>
                                o
                            </span>
                            <span
                                className="char"
                                data-char="o"
                                style={{
                                "--char-index": "8",
                                }}>
                                o
                            </span>
                            <span
                                className="char"
                                data-char="d"
                                style={{
                                "--char-index": "9",
                                }}>
                                d
                            </span>
                            <span
                                className="char"
                                data-char="e"
                                style={{
                                "--char-index": "10",
                                }}>
                                e
                            </span>
                            <span
                                className="char"
                                data-char="r"
                                style={{
                                "--char-index": "11",
                                }}>
                                r
                            </span>
                            <span
                                className="char"
                                data-char="s"
                                style={{
                                "--char-index": "12",
                                }}>
                                s
                            </span>
                            <span
                                className="char"
                                data-char="."
                                style={{
                                "--char-index": "13",
                                }}>
                                .
                            </span>
                            <span
                                className="char"
                                data-char="n"
                                style={{
                                "--char-index": "14",
                                }}>
                                n
                            </span>
                            <span
                                className="char"
                                data-char="e"
                                style={{
                                "--char-index": "15",
                                }}>
                                e
                            </span>
                            <span
                                className="char"
                                data-char="t"
                                style={{
                                "--char-index": "16",
                                }}>
                                t
                            </span>
                            </span>
                        </span>
                        </a>
                    </div>
                    <div className="w-full body-14 md:heading-20 uppercase px-container pb-5 md:pb-[1.5rem] pt-[3rem] md:pt-[6rem] border-px border-secondary text-secondary transition-mode">
                        <a className="link" href="tel:+33 6 75 99 05 93">
                        <span
                            className="words chars splitting"
                            data-splitting="chars"
                            style={{
                            "--char-total": "12",
                            "--word-total": "6",
                            }}>
                            <span
                            className="word"
                            data-word="+33"
                            style={{
                                "--word-index": "0",
                            }}>
                            <span
                                className="char"
                                data-char="+"
                                style={{
                                "--char-index": "0",
                                }}>
                                +
                            </span>
                            <span
                                className="char"
                                data-char="3"
                                style={{
                                "--char-index": "1",
                                }}>
                                3
                            </span>
                            <span
                                className="char"
                                data-char="3"
                                style={{
                                "--char-index": "2",
                                }}>
                                3
                            </span>
                            </span>
                            <span className="whitespace"> </span>
                            <span
                            className="word"
                            data-word="6"
                            style={{
                                "--word-index": "1",
                            }}>
                            <span
                                className="char"
                                data-char="6"
                                style={{
                                "--char-index": "3",
                                }}>
                                6
                            </span>
                            </span>
                            <span className="whitespace"> </span>
                            <span
                            className="word"
                            data-word="75"
                            style={{
                                "--word-index": "2",
                            }}>
                            <span
                                className="char"
                                data-char="7"
                                style={{
                                "--char-index": "4",
                                }}>
                                7
                            </span>
                            <span
                                className="char"
                                data-char="5"
                                style={{
                                "--char-index": "5",
                                }}>
                                5
                            </span>
                            </span>
                            <span className="whitespace"> </span>
                            <span
                            className="word"
                            data-word="99"
                            style={{
                                "--word-index": "3",
                            }}>
                            <span
                                className="char"
                                data-char="9"
                                style={{
                                "--char-index": "6",
                                }}>
                                9
                            </span>
                            <span
                                className="char"
                                data-char="9"
                                style={{
                                "--char-index": "7",
                                }}>
                                9
                            </span>
                            </span>
                            <span className="whitespace"> </span>
                            <span
                            className="word"
                            data-word="05"
                            style={{
                                "--word-index": "4",
                            }}>
                            <span
                                className="char"
                                data-char="0"
                                style={{
                                "--char-index": "8",
                                }}>
                                0
                            </span>
                            <span
                                className="char"
                                data-char="5"
                                style={{
                                "--char-index": "9",
                                }}>
                                5
                            </span>
                            </span>
                            <span className="whitespace"> </span>
                            <span
                            className="word"
                            data-word="93"
                            style={{
                                "--word-index": "5",
                            }}>
                            <span
                                className="char"
                                data-char="9"
                                style={{
                                "--char-index": "10",
                                }}>
                                9
                            </span>
                            <span
                                className="char"
                                data-char="3"
                                style={{
                                "--char-index": "11",
                                }}>
                                3
                            </span>
                            </span>
                        </span>
                        </a>
                    </div>
                    <div className="w-full flex flex-wrap body-14 md:heading-20 uppercase px-container pb-5 md:pb-[1.5rem] pt-[3rem] md:pt-[6rem] border-px border-secondary text-secondary transition-mode">
                        <div className="flex">
                        <a
                            className="link inline"
                            href="https://twitter.com/Mooders_music"
                            rel="noopener"
                            target="_blank">
                            <span
                            className="words chars splitting"
                            data-splitting="chars"
                            style={{
                                "--char-total": "7",
                                "--word-total": "1",
                            }}>
                            <span
                                className="word"
                                data-word="Twitter"
                                style={{
                                "--word-index": "0",
                                }}>
                                <span
                                className="char"
                                data-char="T"
                                style={{
                                    "--char-index": "0",
                                }}>
                                T
                                </span>
                                <span
                                className="char"
                                data-char="w"
                                style={{
                                    "--char-index": "1",
                                }}>
                                w
                                </span>
                                <span
                                className="char"
                                data-char="i"
                                style={{
                                    "--char-index": "2",
                                }}>
                                i
                                </span>
                                <span
                                className="char"
                                data-char="t"
                                style={{
                                    "--char-index": "3",
                                }}>
                                t
                                </span>
                                <span
                                className="char"
                                data-char="t"
                                style={{
                                    "--char-index": "4",
                                }}>
                                t
                                </span>
                                <span
                                className="char"
                                data-char="e"
                                style={{
                                    "--char-index": "5",
                                }}>
                                e
                                </span>
                                <span
                                className="char"
                                data-char="r"
                                style={{
                                    "--char-index": "6",
                                }}>
                                r
                                </span>
                            </span>
                            </span>
                        </a>
                        <span>, </span>
                        </div>
                        <div className="flex">
                        <a
                            className="link inline"
                            href="https://www.linkedin.com/in/mooders/"
                            rel="noopener"
                            target="_blank">
                            <span
                            className="words chars splitting"
                            data-splitting="chars"
                            style={{
                                "--char-total": "8",
                                "--word-total": "1",
                            }}>
                            <span
                                className="word"
                                data-word="Linkedin"
                                style={{
                                "--word-index": "0",
                                }}>
                                <span
                                className="char"
                                data-char="L"
                                style={{
                                    "--char-index": "0",
                                }}>
                                L
                                </span>
                                <span
                                className="char"
                                data-char="i"
                                style={{
                                    "--char-index": "1",
                                }}>
                                i
                                </span>
                                <span
                                className="char"
                                data-char="n"
                                style={{
                                    "--char-index": "2",
                                }}>
                                n
                                </span>
                                <span
                                className="char"
                                data-char="k"
                                style={{
                                    "--char-index": "3",
                                }}>
                                k
                                </span>
                                <span
                                className="char"
                                data-char="e"
                                style={{
                                    "--char-index": "4",
                                }}>
                                e
                                </span>
                                <span
                                className="char"
                                data-char="d"
                                style={{
                                    "--char-index": "5",
                                }}>
                                d
                                </span>
                                <span
                                className="char"
                                data-char="i"
                                style={{
                                    "--char-index": "6",
                                }}>
                                i
                                </span>
                                <span
                                className="char"
                                data-char="n"
                                style={{
                                    "--char-index": "7",
                                }}>
                                n
                                </span>
                            </span>
                            </span>
                        </a>
                        <span>, </span>
                        </div>
                        <div className="flex">
                        <a
                            className="link inline"
                            href="https://www.instagram.com/mooders_sound_design/"
                            rel="noopener"
                            target="_blank">
                            <span
                            className="words chars splitting"
                            data-splitting="chars"
                            style={{
                                "--char-total": "9",
                                "--word-total": "1",
                            }}>
                            <span
                                className="word"
                                data-word="Instagram"
                                style={{
                                "--word-index": "0",
                                }}>
                                <span
                                className="char"
                                data-char="I"
                                style={{
                                    "--char-index": "0",
                                }}>
                                I
                                </span>
                                <span
                                className="char"
                                data-char="n"
                                style={{
                                    "--char-index": "1",
                                }}>
                                n
                                </span>
                                <span
                                className="char"
                                data-char="s"
                                style={{
                                    "--char-index": "2",
                                }}>
                                s
                                </span>
                                <span
                                className="char"
                                data-char="t"
                                style={{
                                    "--char-index": "3",
                                }}>
                                t
                                </span>
                                <span
                                className="char"
                                data-char="a"
                                style={{
                                    "--char-index": "4",
                                }}>
                                a
                                </span>
                                <span
                                className="char"
                                data-char="g"
                                style={{
                                    "--char-index": "5",
                                }}>
                                g
                                </span>
                                <span
                                className="char"
                                data-char="r"
                                style={{
                                    "--char-index": "6",
                                }}>
                                r
                                </span>
                                <span
                                className="char"
                                data-char="a"
                                style={{
                                    "--char-index": "7",
                                }}>
                                a
                                </span>
                                <span
                                className="char"
                                data-char="m"
                                style={{
                                    "--char-index": "8",
                                }}>
                                m
                                </span>
                            </span>
                            </span>
                        </a>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
        </>
    )
}
