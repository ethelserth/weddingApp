import adventure from '../../public/images/location.png';
import  React, {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";   //import this

const Area = ({}) => {
    
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <section className="bg-slate-50">
            <div className="w-11/12 lg:w-8/12 mx-auto">
                <div className="flex items-center justify-center">
                    <div className="container mx-auto w-full h-full">
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="basis-1/2 flex-col border-r-2 border-solid border-gray-300">
                                <div className="flex flex-row pb-4 pt-4 border-solid border-gray-300"></div>
                                <div className="flex flex-row pb-4 pt-4"></div>
                                <div className="flex flex-row pb-4 pt-4 border-solid border-gray-300"></div>
                                <div className="flex flex-row pb-4 pt-4"></div>
                                {/* <div className="flex flex-row pb-4 pt-4 border-solid border-gray-300"></div>
                                <div className="flex flex-row pb-4 pt-4"></div>
                                <div className="flex flex-row pb-4 pt-4 border-solid border-gray-300"></div>
                                <div className="flex flex-row pb-4 pt-4"></div> */}
                            </div>
                        </div>
                        <div className="title pb-5">
                            <h2 className="font-thin text-center text-5xl text-gray-600 pb-10 pt-10">You are comming? That&apos;s great!</h2>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center">
                            <div className="basis-1/2 flex-col border-r-2 border-solid border-gray-300">
                                <div className="flex flex-row pb-4 pt-4 border-b-2 border-solid border-gray-300">
                                    <div className='basis-1/3 text-center'>
                                        <Image
                                            src={adventure}
                                            alt="adventure map pic"
                                            width="30px"
                                            height="30px"
                                            className="basis-1/3"
                                        />
                                    </div>
                                    <h4 className="basis-2/3 text-2xl">Discover Karditsa</h4>
                                </div>
                                
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        We are expecting you!
                                    </p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="basis-3/3 p-5 text-justify">
                                        While you are in Karditsa for the wedding, feel free too explore
                                        our beautifull area. From endless plains to wild mountains, the region 
                                        have a lot of amazing places for you to Discover.
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        The city of Karditsa is located ath the souther part of Thessaly plains. Also at the
                                        center of Greece, thus the name &quot;Karditsa&quot; that loosely means heart. It is a relative
                                        new city, small and cozy, with a lot of public spaces and very friendly denizens. Whether
                                        you are looking for coffee, drinks or a special restaurant, you will probably find everything
                                        here.
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        But if you want to really enjoy yourself, you shall live the city behind you and wander
                                        towards the mountains. Plastiras Lake (were our party is taking place) is just 30 minutes
                                        drive away from the city center. Enjoy the scenery that in the past was hailed as &quot;Greece&apos;s Alps&quot;,
                                        take a stroll in the varius, traditional villages like Neoxori, Neraida and Kanalia or you can 
                                        even ebrace your wild side and take a hike in the mountains, even enjoy a &quot;lake-bike&quot; tour in the lake.
                                    </p>
                                </div>
                                <div className="flex flex-row pt-4">
                                    <p className="basis-3/3 p-5 text-justify">
                                        Whatever you choose to do, we are sure that you will enjoy it. Feel free to check our suggestions!
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/2 text-center">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col" role="tablist">
                                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                <a className={"px-5 py-3 block leading-normal text-2xl border-solid border-gray-300 " +
                                                    (openTab === 1
                                                        ? "border-t-2 border-b-2 border-r-2 rounded-r"
                                                        : "border-b-2")
                                                    }
                                                    onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#link1"
                                                    role="tablist"
                                                >
                                                    Sightseeing
                                                </a>
                                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                    <div className="text-center p-4 flex flex-col">
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Paus%C3%ADlypo/@39.3652226,21.9255888,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d90cd7bb9725:0xbd2250319443e3d9!8m2!3d39.3652226!4d21.9277775">
                                                                <a className="text-indigo-800" target="_blank">Karditsa City Center &amp; Pausilypo</a>
                                                            </Link>                                                            
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Archaeological+Museum+of+Karditsa/@39.3631017,21.9162561,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d908e565cc13:0x3916dfca4d8bcc69!8m2!3d39.3630016!4d21.9184242">
                                                                <a className="text-indigo-800" target="_blank">Karditsa Archeologigal museum</a>
                                                            </Link>
                                                        </div>                                                        
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Fanari+Castle/@39.4156999,21.7996569,17z/data=!3m1!4b1!4m5!3m4!1s0x135926d13dc0ad09:0x459c29432c7c86d7!8m2!3d39.4157083!4d21.801817">
                                                                <a className="text-indigo-800" target="_blank">Medival Castle at Fanari</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Kanalia,+Karditsa+431+00/@39.3986234,21.7958458,16z/data=!3m1!4b1!4m5!3m4!1s0x135926e6667458b1:0x78a8f3e5339fe61d!8m2!3d39.3988712!4d21.8005546">
                                                                <a className="text-indigo-800" target="_blank">Traditional Village of Kanalia</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Plastiras+Lake+Dam/@39.2359927,21.7437243,17z/data=!3m1!4b1!4m5!3m4!1s0x13592c626513474f:0x6d85b11f6eb8f55c!8m2!3d39.2359927!4d21.745913">
                                                                <a className="text-indigo-800" target="_blank">Plastiras Lake &amp; Damm</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Pelekiti+Monastery/@39.2598781,21.6862289,17z/data=!3m1!4b1!4m5!3m4!1s0x13592d963f5e1de1:0xaa8348bd882e00af!8m2!3d39.2599581!4d21.6885616">
                                                                <a className="text-indigo-800" target="_blank">Pelekiti Μonastery</a>
                                                            </Link>
                                                        </div>                                                            
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                <a className={"px-5 py-3 block leading-normal text-2xl border-b-2 border-solid border-gray-300 " +
                                                    (openTab === 2
                                                        ? "border-t-2 border-b-2 border-r-2 rounded-r"
                                                        : "border-b-2")
                                                    }
                                                    onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(2);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#link2"
                                                    role="tablist"
                                                >
                                                    Cafes &amp; Bars
                                                </a>
                                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                    <div className="text-center p-4 flex flex-col">
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Cadillac+Records+Cocktail+Bar/@39.364724,21.9227053,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d90c5d8e8c83:0xc42d9a44b2e68dde!8m2!3d39.364724!4d21.924894">
                                                                <a className="text-indigo-800" target="_blank">Cadilac Records Coctail Bar (Karditsa)</a>
                                                            </Link>                                                            
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Blues+Bar+-+COFFEE+BAR/@39.3646518,21.9232003,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d90f22e0a3b7:0x201d378b2cca6c29!8m2!3d39.3647874!4d21.9254309">
                                                                <a className="text-indigo-800" target="_blank">Blues Bar (Karditsa)</a>
                                                            </Link>
                                                        </div>                                                        
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Remp%C3%A9tiko/@39.3650303,21.9226927,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d90c5b4e73e5:0x73c702471b09f3a5!8m2!3d39.3650303!4d21.9248814">
                                                                <a className="text-indigo-800" target="_blank">Rebetiko (Karditsa)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Skiouros/@39.2990285,21.70254,17z/data=!3m1!4b1!4m5!3m4!1s0x13592f0cd54b5dd1:0x5843bbf6daee11ee!8m2!3d39.2990285!4d21.7047287">
                                                                <a className="text-indigo-800" target="_blank">Skiouros (Neraida)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Chr%E1%B9%93mata/@39.2807641,21.7285015,17z/data=!3m1!4b1!4m5!3m4!1s0x13592f880a271411:0x6a71e0aae22b9b3f!8m2!3d39.2807641!4d21.7306902">
                                                                <a className="text-indigo-800" target="_blank">Chromata (Neochori)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/%CE%A4%CE%BF+%CE%9C%CF%80%CE%B1%CF%81%CE%AC%CE%BA%CE%B9/@39.4026926,21.7966897,17z/data=!3m1!4b1!4m5!3m4!1s0x135927115dd2be6f:0xbe2b1126a780c25b!8m2!3d39.4026969!4d21.7988733">
                                                                <a className="text-indigo-800" target="_blank">Το Baraki (Kanalia)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/%CE%9A%CE%B1%CF%86%CE%AD+%CE%9A%CE%AC%CF%83%CF%84%CF%81%CE%BF/@39.4159033,21.800217,17z/data=!3m1!4b1!4m5!3m4!1s0x1359273d0fc1b503:0xb74571a503990f9f!8m2!3d39.415905!4d21.8024655">
                                                                <a className="text-indigo-800" target="_blank">Cafe Castro (Fanari)</a>
                                                            </Link>
                                                        </div>                                                            
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                                <a className={"px-5 py-3 block leading-normal text-2xl border-b-2 border-solid border-gray-300 " +
                                                    (openTab === 3
                                                        ? "border-t-2 border-b-2 border-r-2 rounded-r"
                                                        : "border-b-2")
                                                    }
                                                    onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(3);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#link3"
                                                    role="tablist"
                                                >
                                                    Restaurants
                                                </a>
                                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                                    <div className="text-center p-4 flex flex-col">
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Ap%C3%B3mero/@39.3693873,21.926899,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d9094c94fe09:0x45a0be2d4b84997f!8m2!3d39.3693873!4d21.9290877">
                                                                <a className="text-indigo-800" target="_blank">Apomero (Karditsa)</a>
                                                            </Link>                                                            
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Capricciosa+Pizzeria+Ristorante/@39.3693873,21.926899,17z/data=!4m5!3m4!1s0x1358d90cb296a697:0x1b698158dd01897f!8m2!3d39.3633606!4d21.9282963">
                                                                <a className="text-indigo-800" target="_blank">Capricciosa Pizzeria Ristorante (Karditsa)</a>
                                                            </Link>
                                                        </div>                                                        
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/La+Madonnina/@39.3658753,21.9221449,17z/data=!3m1!4b1!4m5!3m4!1s0x1358d9dec4e80a13:0x7f271aa816dfbf9f!8m2!3d39.3658753!4d21.9243336">
                                                                <a className="text-indigo-800" target="_blank">La Maddonina (Karditsa)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/903/@39.305925,21.6921719,17z/data=!3m1!4b1!4m5!3m4!1s0x13592e41c022585d:0xab4cdadf80f6ace5!8m2!3d39.3059397!4d21.6943545">
                                                                <a className="text-indigo-800" target="_blank">903 (Pezoula)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Chalilis+V+Kardoulas+a+O.E./@39.4278796,21.6619598,17z/data=!3m1!4b1!4m5!3m4!1s0x13593b2b56e41061:0x7f6c70cf553d8d84!8m2!3d39.427878!4d21.6641371">
                                                                <a className="text-indigo-800" target="_blank">Chalilis (near Charma village)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/Grill+Platanos/@39.3995203,21.7973811,17z/data=!3m1!4b1!4m5!3m4!1s0x135926e68b799a17:0xf7f38277fb0a1da0!8m2!3d39.3995203!4d21.7995698">
                                                                <a className="text-indigo-800" target="_blank">Grill Platanos (Kanalia)</a>
                                                            </Link>
                                                        </div>
                                                        <div className="px-1 py-1">
                                                            <Link href="https://www.google.com/maps/place/To+Tsardaki/@39.3093644,21.7749818,17z/data=!3m1!4b1!4m5!3m4!1s0x135928d891f72939:0xc9b5fa679c0bf57b!8m2!3d39.3093715!4d21.7771564">
                                                                <a className="text-indigo-800" target="_blank">Tsardaki (near Kastania village)</a>
                                                            </Link>
                                                        </div>                                                            
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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

export default Area;