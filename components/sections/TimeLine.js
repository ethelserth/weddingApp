import Image from 'next/image';
import mypic from '../../public/images/first_met.jpg';
import mypic2 from '../../public/images/story2.jpg';
import mypic5 from '../../public/images/mypic5.jpg';
import mypic4 from '../../public/images/story4.jpg';
// import React, { useRef } from 'react';


const TimeLine = (props) => {

    const style = {
        visibility: props.isVisible ? 'initial' : 'hidden',
        // animation: props.isVisible ? 'animate-fade-in-on' : 'unset' 
    };


    console.log( props.isVisible );
    console.log(style);

    return (    
        <section className="bg-slate-50">
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <div className="min-h-screen flex items-center justify-center">
                    <div style={style} className="container mx-auto w-full h-full">
                        <div className="title">
                            <h2 className="font-thin text-center text-5xl text-gray-800 pb-8 pt-8">Our Story</h2>
                        </div>
                        <div className="relative wrap overflow-hidden p-4 h-full">
                            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left:'50%'}}></div>
                            
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h2 className="mx-auto font-semibold text-lg text-white">1</h2>
                                    </div>
                                    <div className="animate-fade-in-right order-1 w-5/12 lg:px-6 px-2 py-4 flex lg:flex-row flex-col items-center">
                                        <div className="rounded-full basis-1/2 animate-wiggle">
                                            <Image
                                                src={mypic}
                                                alt="Picture of the author"
                                                width="206px"
                                                height="206px"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="basis-1/2  justify-center text-center">
                                            <h3 className="mb-3 font-thin text-gray-800 text-2xl">02-01-2016</h3>
                                            <p className="font-thin text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">First met!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                                    </div>
                                    <div className="animate-fade-in-left order-1 w-5/12 lg:px-6 px-2 py-4 flex flex-col lg:flex-row-reverse items-center">
                                        <div className="rounded-full basis-1/2 animate-wiggle">
                                            <Image
                                                src={mypic2}
                                                alt="Picture of the author"
                                                width="206px"
                                                height="206px"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="basis-1/2  justify-center text-center">
                                            <h3 className="mb-3 font-thin text-gray-800 text-2xl">2016 - 2019</h3>
                                            <p className="font-thin text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">Living the long distance love.</p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h2 className="mx-auto font-semibold text-lg text-white">3</h2>
                                    </div>
                                    <div className="animate-fade-in-right order-1 w-5/12 lg:px-6 px-2 py-4 flex lg:flex-row flex-col items-center">
                                        <div className="rounded-full basis-1/2 animate-wiggle">
                                            <Image
                                                src={mypic4}
                                                alt="Picture of the author"
                                                width="206px"
                                                height="206px"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="basis-1/2  justify-center text-center">
                                            <h3 className="mb-3 font-thin text-gray-800 text-2xl">2019</h3>
                                            <p className="font-thin text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">Moved in together!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                                    </div>
                                    <div className="animate-fade-in-left order-1 w-5/12 lg:px-6 px-2 py-4 flex flex-col lg:flex-row-reverse items-center">
                                        <div className="rounded-full basis-1/2 animate-wiggle">
                                            <Image
                                                src={mypic5}
                                                alt="Picture of the author"
                                                width="206px"
                                                height="206px"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="basis-1/2  justify-center text-center">
                                            <h3 className="mb-3 font-thin text-gray-800 text-2xl">05-02-2021</h3>
                                            <p className="font-thin text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">He proposed!<br/> She said yes! </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default TimeLine;