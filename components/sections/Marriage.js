import chapel from '../../public/icons/chapel.svg';
import map from '../../public/icons/map.svg';
import clock from '../../public/icons/clock.svg';
import party from '../../public/icons/party.svg';
import Image from 'next/image';
import Link from "next/link";   //import this


const Marriage = ({}) => {

    return (
        <section className="bg-slate-50">
            <div className="w-8/12 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="container mx-auto w-full h-full">
                        <div className="title pb-5">
                            <h2 className="font-thin text-center text-5xl text-gray-600 pb-10 pt-10">Now we are getting  Married!</h2>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="basis-1/2 text-center">
                                <h3 className="text-xl">21 August 2022</h3>
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
                                            <a className="text-slate-800" target="_blank">Chapel of Prophet Ilias, Kanalia Karditsas</a>
                                        </Link>
                                    </h4>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        In the magical village on Kanalia, the groom's birthplace, lies the old and unique church of Prophet Elias in witch the Marriage Ceremony will be held. The tradditional church, located at the outskirts of a forest, offers a spectacular view towards Thessaly's place.
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">The village and the church is 14km from Karditsa. If you need directions click the link above.</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">There is space near the entrance, that you can park you caro.</p>
                                </div>
                            </div>
                        </div>
                        <div className="title pb-5">
                            <h2 className="font-thin text-center text-5xl text-gray-600 pb-10 pt-10">...And then we are partying!</h2>
                        </div>
                        <div className="flex flex-row items-center">
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
                                    <h4 className="basis-2/3 text-2xl">The Festivity</h4>
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
                                        <Link href="https://www.google.com/maps/place/Church+Prophet+Elias/@39.3954593,21.7970212,15z/data=!4m5!3m4!1s0x0:0xcad246f1b2d80176!8m2!3d39.3962762!4d21.7972823">
                                            <a className="text-slate-800" target="_blank">Nevros Hotel Resort & Spa</a>
                                        </Link>
                                    </h4>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        Did someone said Party? We did!
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">
                                        After the ceremony, join us for our wedding party that will take place in the amazing
                                        <Link href="https://www.nevros.gr/el/">
                                            <a className="text-slate-800" target="_blank">Nevros Hotel Resort & Spa</a>
                                        </Link>
                                        . There we will dance and laugh together until the next morning.
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        Nevros Hotel, is located at Neoxori in Lake Plastira.
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/2 text-center">
                                <h3 className="text-xl">21 August 2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Marriage;