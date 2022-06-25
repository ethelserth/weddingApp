import groom from '../../public/images/groom.png';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";   //import this

const Contact = ({}) => {
    
    return (
        <section className="bg-slate-50 mt-10">
            <div className="w-12/12 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="container mx-auto w-full h-full">
                        <div className="bg-gray-100 text-center lg:text-left">
                            <div className="w-11/12 lg:w-8/12 mx-auto container p-6 text-gray-800">
                                <div className="grid lg:grid-cols-1 gap-4">
                                <div className=" md:mb-0">
                                    <h5 className="font-medium mb-4 uppercase">Usefull Informations!</h5>

                                    <p className="mb-1 text-sm">
                                        Agis Phone : <a href="tel:+306972608921"><strong>6972608921</strong></a>
                                    </p>
                                    
                                    <p className="mb-1 text-sm">
                                        Emily Phone : <a href="tel:+306985802132"><strong>6985802132</strong></a>
                                    </p>

                                    <p className="mb-2 text-sm">
                                        IBAN : <strong>GR59 0171 2440 4414 3805 598</strong> - (Piraeus bank)
                                    </p>
                                    
                                    <hr></hr>

                                    <p className="mt-2 text-sm">
                                        Nevros Phone (for reservations if needed) : <a href="tel:+302441093201"><strong>2441 093201</strong></a>
                                    </p>

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

export default Contact;