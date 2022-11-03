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
            <nav className='w-[96vw] h-auto z-10'>
                <div className="w-fit h-auto">
                    <div className="w-screen flex items justify-between items-center px-[2.5rem]">
                        <div className="flex items-center h-auto w-36 h-36">
                            <Image src={Logo} className={`w-fit`} />
                        </div>

                        <div className="flex items-center ">
                            {/* small screen hidden med screen show in block */}
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-4">
                                    <Link activeClass='Home' href='/' smooth={true} offset={50} duration={500} className="cursor-pointer text-primaryPurple font-semibold px-6 py-2 text-xl hover:font-black hover:bg-white text-primaryPurple hover:text-primaryPurple rounded-md font-semibold">
                                        Home
                                    </Link>
                                    <Link activeClass='gallery' href='./pages/Gallery' smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-primaryPurple text-white hover:text-white rounded-md font-semibold px-6 py-2 text-xl hover:font-black">
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