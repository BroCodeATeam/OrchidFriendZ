import React from 'react'
import {Transition} from "@headlessui/react";
import { Link } from 'react-scroll';
import { useRouter } from 'next/router'
import Image from 'next/image'

import Logo from '../../public/logo-min.png'

function Topnav() {
    const router = useRouter()

    return (
        <div>
            <nav className='fixed w-full z-10'>
                <div className="w-full mx-10">
                    <div className="flex items justify-around items-center h-10 w-full">
                        <div className="flex items-center w-36 h-36">
                            <Image src={Logo} className={`w-fit`} />
                        </div>

                        <div className="flex items-center ">
                            {/* small screen hidden med screen show in block */}
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-4">
                                    <Link activeClass='Home' href='/' smooth={true} offset={50} duration={500} className="cursor-pointer text-primaryPurple font-semibold px-6 py-2 text-xl hover:font-black">
                                        Home
                                    </Link>
                                    <Link activeClass='gallery' href='/gallery' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-primaryPurple text-white hover:text-white rounded-md font-semibold px-6 py-2 text-xl hover:font-black">
                                        Gallery
                                    </Link>
                                    <Link activeClass='resources' href='/resources' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-primaryPurple text-white hover:text-white rounded-md font-semibold px-6 py-2 text-xl hover:font-black">
                                        Resources
                                    </Link>
                                    <Link activeClass='upload' href='/upload' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-darkBlue bg-primaryPurple text-white rounded-md font-semibold px-6 py-2 text-xl ">
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