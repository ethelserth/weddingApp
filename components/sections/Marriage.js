import chapel from '../../public/icons/chapel.svg';
import map from '../../public/icons/map.svg';
import clock from '../../public/icons/clock.svg';
import party from '../../public/icons/party.svg';
import Image from 'next/image';
import Link from "next/link";   //import this


const Marriage = ({}) => {

    return (
        <section className="bg-slate-50">
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="container mx-auto w-full h-full">
                        <div className="title pb-5">
                            <h2 className="font-thin text-center text-5xl text-gray-600 pb-10 pt-10">Now we are getting  Married!</h2>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="basis-1/2 text-center">
                                <h3 className="text-xl hidden md:block">21 August 2022</h3>
                            </div>
                            <div className="basis-1/2 flex-col border-l-2 border-solid border-gray-300">
                                <div className="flex flex-row pb-4 pt-4 border-b-2 border-solid border-gray-300">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={chapel}
                                            alt="chapel pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3 text-2xl">The Ceremony</h4>
                                </div>
                                <div className="flex flex-row pb-4 pt-4">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={clock}
                                            alt="chapel pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3">06:00 PM</h4>
                                </div>
                                <div className="flex flex-row pb-4 pt-4">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={map}
                                            alt="chapel pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3">
                                        <Link href="https://www.google.com/maps/place/Church+Prophet+Elias/@39.3954593,21.7970212,15z/data=!4m5!3m4!1s0x0:0xcad246f1b2d80176!8m2!3d39.3962762!4d21.7972823">
                                            <a className="text-indigo-800" target="_blank">Chapel of Prophet Ilias, Kanalia Karditsas</a>
                                        </Link>
                                    </h4>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        In the legendary village of Kanalia, the groom&apos;s birthplace, lies the old and unique church of Prophet Elias in which the ceremony will be held. This traditional church, located at the outskirts of a forest, offers a spectacular view towards Thessaly.
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">The village and the church is 14km from Karditsa. If you need directions click on the link above.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">There is space near the entrance, that you can park you car.</p>
                                </div>
                            </div>
                        </div>
                        <div className="title pb-5">
                            <h2 className="font-thin text-center text-5xl text-gray-600 pb-10 pt-10">...And then we are partying!</h2>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="basis-1/2 flex-col border-r-2 border-solid border-gray-300">
                                <div className="flex flex-row pb-4 pt-4 border-b-2 border-solid border-gray-300">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={party}
                                            alt="chapel pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3 text-2xl">The Party</h4>
                                </div>
                                <div className="flex flex-row pb-4 pt-4">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={clock}
                                            alt="chapel pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3">08:00 PM</h4>
                                </div>
                                <div className="flex flex-row pb-4 pt-4">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={map}
                                            alt="chapel pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3">
                                        <Link href="https://www.google.com/maps/place/Nevros+Hotel+Resort+and+Spa/@39.2817974,21.7294522,17z/data=!3m1!4b1!4m8!3m7!1s0x13592f68aaf9d815:0xd5c7bc3314ee31e!5m2!4m1!1i2!8m2!3d39.2817974!4d21.7316409">
                                            <a className="text-indigo-800" target="_blank">Nevros Hotel Resort &amp; Spa</a>
                                        </Link>
                                    </h4>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        Did someone said party? We did!
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">
                                        After the ceremony, join our wedding party that will take place in the amazing 
                                        <Link href="https://www.nevros.gr/el/">
                                            <a className="text-indigo-800" target="_blank"> Nevros Hotel Resort &amp; Spa</a>
                                        </Link>
                                        . We will dance and party together until the next morning.
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        Nevros Hotel, is located at Neoxori in Lake Plastira. Click the link above for directions and other usefull informations if you plan to stay at the hotel.
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        If you need accommodation and Nevros is full booked, 
                                        <Link href="https://www.google.com/maps/place/Anth%C3%A9mion/@39.2807711,21.7306773,15z/data=!4m2!3m1!1s0x0:0x2c1f91a8a2e384c3?sa=X&ved=2ahUKEwi-hfb087b4AhWZSfEDHTEfAqkQ_BJ6BAhUEAU">
                                            <a className="text-indigo-800" target="_blank"> Anthemion</a>
                                        </Link> 
                                        is an excellent hotel, within walking distance.
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/2 text-center">
                                <h3 className="text-xl hidden md:block">21 August 2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marriage;