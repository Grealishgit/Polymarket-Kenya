import React from 'react'
import logo from '../assets/images/logo-white.svg'
import flag from '../assets/images/flag.png'
import { MdMenu as IonsMdMenu } from 'react-icons/md'
import { GoSearch } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";

const Navbar = () => {

    const navLinks = [
        { name: 'Trending', href: '#', icon: '' },
        { name: 'Breaking', href: '#', icon: '' },
        { name: 'New', href: '#', icon: '' },
        { name: 'Politics', href: '#', icon: '' },
        { name: 'Sports', href: '#', icon: '' },
        { name: 'Finance', href: '#', icon: '' },
        { name: 'Crypto', href: '#', icon: '' },
        { name: 'Geopolitics', href: '#', icon: '' },
        { name: 'Earnings', href: '#', icon: '' },
        { name: 'Tech', href: '#', icon: '' },
        { name: 'Culture', href: '#', icon: '' },
        { name: 'World', href: '#', icon: '' },
        { name: 'Economy', href: '#', icon: '' },
        { name: 'Elections', href: '#', icon: '' },
        { name: 'Mentions', href: '#', icon: '' },
        { name: 'More', href: '#', icon: '' },
    ]

    return (
        <div className="w-full flex border-b border-gray-700 fixed top-0 z-10 dark:bg-[#1d2b3a] bg-white flex-col p-2">
            <nav className="w-full flex items-center h-16 justify-between p-4 text-white">
                <div className='flex items-center gap-4'>
                    <img src={logo} alt="" className='w-auto h-8' />
                    <img src={flag} alt="" className='w-auto h-7 -rotate-4' />
                </div>

                <div className='flex relative dark:bg-[#2f3f50]  bg-white items-center gap-2  px-2 w-150 py-1 rounded-lg'>
                    <GoSearch className='text-gray-400 ml-2 text-xl'
                    />
                <input type="text"
                        placeholder="Search polymarket "
                        className="bg-[#2f3f50]  placeholder:text-gray-400 text-white rounded-lg px-4 py-2 focus:outline-none"
                    /> 
                    <span className='absolute right-5 text-xl text-gray-400'>/</span>
                </div>




                <div className='flex items-center gap-2 text-[#2c9cdb] hover:text-[#4ab1ec] cursor-pointer'>
                    <AiFillInfoCircle className='' />
                    <a href="" className='text-lg font-semibold'>How it works</a>
                </div>


                <div className='flex items-center gap-4'>
                    <button className="text-[#2c9cdb] hover:text-[#35acf1] 
                    rounded-lg hover:bg-gray-700/90 cursor-pointer items-center justify-center px-4 py-1.5 font-semibold text-lg  ">
                        Log In
                    </button>
                    <button className="bg-[#2c9cdb] cursor-pointer hover:bg-[#3fb0f1] px-5 font-medium py-2 rounded-md">
                        Sign Up
                    </button>
                    <IonsMdMenu size={35} className="text-white cursor-pointer hover:bg-gray-700 p-1 rounded-xl" />
                </div>


            </nav>

            <div className='flex items-center no-scrollview gap-2 mt-4 overflow-x-auto'>
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className='text-gray-400 px-3 py-2 whitespace-nowrap hover:text-white cursor-pointer text-lg font-medium'
                    >
                        {link.name}
                    </a>
                ))}

            </div>
        </div>
    )
}

export default Navbar