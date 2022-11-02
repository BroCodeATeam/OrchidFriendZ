import React from 'react'
import {Transition} from "@headlessui/react";
import { Link } from 'react-scroll';
import Image from 'next/image'

import Logo from '../../public/logo-min.png'

function Topnav() {
    return (
        <div>
            <nav className='shadow-sm fixed w-full z-10'>
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">

                        <div className="flex items items-center mx-20 justify-between w-full ">
                            <div className="flex justify-center items-center flex-shrink-0 w-48 h-48">
                                <Image src={Logo} className={`w-fit`} />
                            </div>
                            {/* small screen hidden med screen show in block */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link activeClass='Home' href='/' smooth={true} offset={50} duration={500} className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black">
                                        Home
                                    </Link>
                                    <Link activeClass='gallery' href='gallery' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-white hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
                                        Gallery
                                    </Link>
                                    <Link activeClass='services' href='services' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 text-white hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
                                        Resources
                                    </Link>
                                    <Link activeClass='contact' href='contact' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-black bg-blue-600 text-white rounded-md font-semibold px-3 py-2 text-md ">
                                        Upload
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Topnav