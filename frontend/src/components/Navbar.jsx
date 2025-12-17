import React, { useState } from 'react'
import logo from '../assets/images/logo-white.svg'
import flag from '../assets/images/flag.png'
import { MdMenu as IonsMdMenu } from 'react-icons/md'
import { GoSearch } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaTrophy } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { TbPlugConnected } from "react-icons/tb";
import { IoMdMoon } from "react-icons/io";

const Navbar = ({ themeMode, setTheme: toggleTheme }) => {

    const [activeTab, setActiveTab] = useState('Trending');
    const [modalOpen, setModalOpen] = useState(false);

    const mainLinks = [
        { name: 'Trending', href: '#', icon: HiMiniArrowTrendingUp },
        { name: 'Breaking', href: '#', icon: '' },
        { name: 'New', href: '#', icon: '' },
    ]

    const navLinks = [

        { name: 'Politics', href: '#' },
        { name: 'Sports', href: '#' },
        { name: 'Finance', href: '#' },
        { name: 'Crypto', href: '#' },
        { name: 'Geopolitics', href: '#' },
        { name: 'Earnings', href: '#' },
        { name: 'Tech', href: '#' },
        { name: 'Culture', href: '#' },
        { name: 'World', href: '#' },
        { name: 'Economy', href: '#', },
        { name: 'Elections', href: '#' },
        { name: 'Mentions', href: '#' },
        { name: 'More', href: '#' },
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
                    <IonsMdMenu
                        onClick={() => setModalOpen(!modalOpen)}
                        onMouseEnter={() => setModalOpen(true)}

                        size={35}
                        className="text-white cursor-pointer hover:bg-gray-700 p-1 rounded-xl"
                    />
                </div>


            </nav>

            <div className='flex w-full gap-2 items-center justify-center'>

                <div className='flex items-center no-scrollview gap-1 mt-4'>
                    {mainLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={` gap-2 flex items-center px-1 py-2 whitespace-nowrap nav-bold
                                 hover:text-white cursor-pointer  font-medium
                                 ${activeTab === link.name ? 'text-white' : 'text-gray-400'}`}
                            onClick={() => setActiveTab(link.name)}
                        >
                            {link.icon && <link.icon
                                className={` text-xl ${activeTab === link.name ? 'text-white' : 'text-gray-400'}`} />}

                            {link.name}
                        </a>
                    ))}

                </div>

                <hr className='border-r border-gray-500 h-5 ml-2 mt-4' />

                <div className='flex items-center no-scrollview gap-2 mt-4 overflow-x-auto'>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className='text-gray-400 px-3 py-2 whitespace-nowrap hover:text-white cursor-pointer
                             nav-bold font-medium'
                        >
                            {link.name}
                        </a>
                    ))}

                </div>
            </div>

            {modalOpen && (
                <div onMouseLeave={() => setModalOpen(false)} className={`flex flex-col z-50 justify-start items-start max-w-70 w-full ${themeMode === 'dark' ? 'bg-[#1d2b3a]' : 'bg-white'}
                 rounded-xl border border-gray-600 fixed top-16 right-5`}>

                    <div className={`flex flex-col ${themeMode === 'dark' ? 'text-gray-300' : 'text-black'} w-full p-2`}>
                        <button className='flex gap-2 items-center w-full py-2.5 px-5 text-left 
                    font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer mb-2'>
                            <FaTrophy className='text-yellow-500 text-lg' color='gold' />
                            Leaderboard
                        </button>

                        <button className='flex gap-2 items-center w-full py-2.5 px-5 text-left 
                    font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer mb-2'>
                            <BiSolidDollarCircle className='text-green-600 text-lg' color='green' />
                            Rewards
                        </button>

                        <button className='flex gap-2 items-center w-full py-2.5 px-5 text-left
                     font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer mb-2'>
                            <TbPlugConnected className='text-red-500 text-lg' color='red' />
                            API
                        </button>

                        <div
                            onClick={() => toggleTheme(themeMode === 'light' ? 'dark' : 'light')}
                            className='flex items-center justify-between w-full py-2.5 px-5
                     font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer mb-2'>
                            <div className={`flex gap-2 items-center text-left
                                 ${themeMode === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                                <IoMdMoon className='text-lg' color='#2173cc' />   Dark mode
                            </div>


                            <div className={`w-12 h-7  ${themeMode === 'dark' ? 'bg-[#2c9cdb]' : 'bg-gray-300'} rounded-full flex items-center p-1 transition-all`}>
                                <div className={`w-5 h-5  ${themeMode === 'dark' ? 'bg-white translate-x-6' : 'bg-gray-600'} rounded-full transition-transform`}></div>
                            </div>

                        </div>
                    </div>


                    <hr className='border-t border-gray-500 w-full' />

                    <div className={`flex flex-col ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} w-full p-2`}>

                        <button className=' w-full py-2.5 px-5 text-left
                     font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer'>
                            Accuracy
                        </button>
                        <button className=' w-full py-2.5 px-5 text-left
                     font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer'>
                            Documentation
                        </button>
                        <button className=' w-full py-2.5 px-5 text-left
                     font-medium nav-bold hover:bg-[#2f3f50] rounded-lg cursor-pointer'>
                            Terms Of Use
                        </button>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Navbar