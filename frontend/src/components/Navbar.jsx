import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo-white.svg'
import logob from '../assets/images/logo-black.svg'
import flag from '../assets/images/flag.png'
import { MdMenu as IonsMdMenu } from 'react-icons/md'
import { GoSearch } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa6";

import { FaTrophy } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { TbPlugConnected, TbRuler2 } from "react-icons/tb";
import { IoMdMoon } from "react-icons/io";
import { mainLinks, navLinks } from '../lib/data'
import logo1 from '../assets/images/logo1.svg'
import logo2 from '../assets/images/logo2.svg'
import logo3 from '../assets/images/logo3.svg'
import logo4 from '../assets/images/logo4.svg'
import logo5 from '../assets/images/logo5.svg'

const Navbar = ({ themeMode, setTheme: toggleTheme }) => {
    const [activeTab, setActiveTab] = useState('Trending');
    const [modalOpen, setModalOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [activeButton, setActiveButton] = useState(false);

    // Check email validity whenever email changes
    useEffect(() => {
        if (email.includes('@') && email.includes('.')) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }, [email]);

    const handleSubmit = () => {
        // Handle form submission here
        if (activeButton) {
            console.log('Email submitted:', email);
            // Add your submission logic here
        }
    }

    return (
        <div className={`w-full flex border-b  fixed top-0 z-10  flex-col p-2
        ${themeMode === 'dark' ? 'bg-[#1d2b3a] border-[#3d5266]' : 'bg-white border-gray-200'} `}>
            <nav className="w-full flex items-center h-16 justify-between p-4 text-white">

                <div className='flex items-center gap-4'>

                    {themeMode === 'dark' ? (
                        <img src={logo} alt="" className='w-auto h-8' />
                    ) : (
                        <img src={logob} alt="" className='w-auto h-8' />
                    )}
                    <img src={flag} alt="" className='w-auto h-7 -rotate-4' />

                </div>

                <div className={`flex relative d  ${themeMode === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#f4f5f6]'} items-center gap-2  px-2 w-150 py-1 rounded-lg`}>
                    <GoSearch className='text-gray-400 ml-2 text-xl'
                    />
                    <input type="text"
                        placeholder="Search polymarket "
                        className={`bg-[#2f3f50] ${themeMode === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#f4f5f6]'} placeholder:text-gray-400 text-white rounded-lg px-4 py-2 focus:outline-none`}
                    />
                    <span className='absolute right-5 text-xl text-gray-400'>/</span>
                </div>




                <div className={`flex items-center gap-2 
                    ${themeMode === 'dark' ? 'text-[#2c9cdb] font-semibold' : 'text-[#1452f0]'}  cursor-pointer`}>
                    <AiFillInfoCircle className='' />
                    <a href="" className='text-lg '>How it works</a>
                </div>


                <div className='flex items-center gap-4'>
                    <button onClick={() => setShowLoginModal(true)}
                        className={`${themeMode === 'dark' ? 'text-[#2c9cdb] hover:bg-gray-700/90 font-semibold' : 'text-[#1452f0] hover:bg-gray-100/80'}  rounded-lg  cursor-pointer items-center justify-center px-4 py-1.5  text-md`}>

                        Log In
                    </button>
                    <button onClick={() => setShowLoginModal(true)}
                        className={`px-4 font-medium nav-bold text-white  py-2 rounded-md 
                        ${themeMode === 'dark' ? 'bg-[#2c9cdb]' : 'bg-[#1452f0]'} hover:opacity-90 cursor-pointer`}>
                        Sign Up
                    </button>
                    <IonsMdMenu
                        onClick={() => setModalOpen(!modalOpen)}
                        onMouseEnter={() => setModalOpen(true)}
                        size={35}
                        className={` cursor-pointer ${themeMode === 'dark' ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100/80'}  p-1 rounded-xl`}
                    />
                </div>


            </nav>

            <div className='flex w-full gap-2 items-center justify-center'>

                <div className='flex items-center no-scrollview gap-1 mt-4'>
                    {mainLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`gap-2 flex items-center px-1 py-2 whitespace-nowrap cursor-pointer nav-bold font-medium
                               
                                ${activeTab === link.name ? (themeMode === 'dark' ? 'text-white' : 'text-black ') : 'text-gray-400 hover:text-white'}`}
                            onClick={() => setActiveTab(link.name)}
                        >
                            {link.icon && <link.icon
                                className={`text-xl ${activeTab === link.name ? (themeMode === 'dark' ? 'text-white' : 'text-black') : ''}`}
                            />}
                            {link.name}
                        </a>
                    ))}

                </div>

                <hr className={`border-r ${themeMode === 'dark' ? 'border-gray-700' : 'border-gray-300'}  h-5 ml-2 mt-4 `} />

                <div className='flex items-center no-scrollview gap-2 mt-4 overflow-x-auto'>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`px-3 py-2 whitespace-nowrap ${themeMode === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-black'}  cursor-pointer
                             nav-bold font-medium`}
                        >
                            {link.name}
                        </a>
                    ))}

                </div>
            </div>

            {modalOpen && (
                <div onMouseLeave={() => setModalOpen(false)} className={`flex flex-col overflow-y-auto z-50 justify-start items-start max-w-70 w-full ${themeMode === 'dark' ? 'bg-[#1d2b3a] border-gray-600' : 'bg-white border-gray-200'}
                 rounded-xl border  fixed top-16 right-5`}>

                    <div className={`flex flex-col ${themeMode === 'dark' ? 'text-gray-300' : 'text-black'} w-full p-2`}>
                        <button className={`flex gap-2 items-center w-full py-2.5 px-5 text-left 
                    font-medium nav-bold ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}  rounded-lg cursor-pointer mb-2`}>
                            <FaTrophy className='text-yellow-500 text-lg' color='gold' />
                            Leaderboard
                        </button>

                        <button className={`flex gap-2 items-center w-full py-2.5 px-5 text-left 
                    font-medium nav-bold ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}  rounded-lg cursor-pointer mb-2`}>
                            <BiSolidDollarCircle className='text-green-600 text-lg' color='green' />
                            Rewards
                        </button>

                        <button className={`flex gap-2 items-center w-full py-2.5 px-5 text-left 
                    font-medium nav-bold ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}  rounded-lg cursor-pointer mb-2`}>
                            <TbPlugConnected className='text-red-500 text-lg' color='red' />
                            API
                        </button>

                        <div
                            onClick={() => toggleTheme(themeMode === 'light' ? 'dark' : 'light')}
                            className={`flex justify-between gap-2 items-center w-full py-2.5 px-5 text-left 
                    font-medium nav-bold ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}  rounded-lg cursor-pointer mb-2`}>
                            <div className={`flex gap-2 items-center text-left
                                 ${themeMode === 'dark' ? 'text-gray-300' : 'text-black'}`}>
                                <IoMdMoon className='text-lg' color='#2173cc' />   Dark mode
                            </div>


                            <div className={`w-11 h-7  ${themeMode === 'dark' ? 'bg-[#2c9cdb]' : 'bg-gray-200'} rounded-full flex items-center p-1 transition-all`}>
                                <div className={`w-5 h-5  ${themeMode === 'dark' ? 'bg-white translate-x-4' : 'bg-white'} rounded-full transition-transform`}></div>
                            </div>

                        </div>
                    </div>


                    <hr className='border-t border-gray-500 w-full' />

                    <div className={`flex flex-col ${themeMode === 'dark' ? 'text-gray-300' : 'text-gray-600'} w-full p-2`}>

                        <button className={`w-full py-2.5 px-5 text-left 
                        ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}
                     font-medium nav-bold  rounded-lg cursor-pointer`}>
                            Accuracy
                        </button>
                        <button className={`w-full py-2.5 px-5 text-left 
                        ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}
                     font-medium nav-bold  rounded-lg cursor-pointer`}>
                            Documentation
                        </button>
                        <button className={`w-full py-2.5 px-5 text-left 
                        ${themeMode === 'dark' ? 'hover:bg-[#2f3f50]' : 'hover:bg-gray-100/80'}
                     font-medium nav-bold  rounded-lg cursor-pointer`}>
                            Terms Of Use
                        </button>

                    </div>
                </div>
            )}

            {showLoginModal && (
                <div onClick={() => setShowLoginModal(false)}
                    className='fixed inset-0 bg-black/60 bg-opacity-50 left-0 right-0 flex items-center justify-center z-50'>
                    <div onClick={(e) => e.stopPropagation()}
                        className={`rounded-lg p-6 w-120
                     ${themeMode === 'dark' ? 'bg-[#1d2b3a] text-white' : 'bg-white text-black'}`}>
                        <h2 className='text-2xl text-center font-bold mb-4'>Welcome to Ploymarket</h2>

                        <button className={`w-full py-4 flex items-center justify-center gap-2 px-5 text-center mb-4
                        ${themeMode === 'dark' ? 'bg-[#2c9cdb] hover:bg-[#1a8acb]' : 'bg-[#1452f0] hover:bg-[#0d3ebf]'}
                     font-medium nav-bold  rounded-lg cursor-pointer text-white`}>
                            <FaGoogle />
                            Continue with Google
                        </button>

                        {/* Or separator here */}
                        <div className='flex items-center gap-4 justify-between mt-4'>
                            <div className={`border-b ${themeMode === 'dark' ? 'border-gray-600' : 'border-gray-300'} w-full `} />
                            <h2 className={`text-center nav-bold ${themeMode === 'dark' ? 'text-gray-400' : 'text-[#77808d]'}`}>OR</h2>
                            <div className={`border-b ${themeMode === 'dark' ? 'border-gray-600' : 'border-gray-300'} w-full `} />
                        </div>

                        <div className='flex relative flex-col gap-4 mt-4'>
                            <input type="email"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                placeholder='Email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`p-4 rounded-lg border transition-all focus:outline-none focus:ring-1 focus:ring-[#1452f0]
                                ${themeMode === 'dark' ? 'border-gray-600 bg-[#1d2b3a] text-white placeholder:text-gray-400' : 'border-gray-300 bg-white text-black placeholder:text-gray-400'}`} />
                            <button
                                onClick={handleSubmit}
                                disabled={!activeButton}
                                className={`absolute p-2 px-3 text-white rounded-md top-2 right-2 transition-colors
                                ${activeButton
                                        ? (themeMode === 'dark' ? 'bg-[#2c9cdb] hover:bg-[#1a8acb]' : 'bg-[#1452f0] hover:bg-[#0d3ebf]')
                                        : (themeMode === 'dark' ? 'bg-[#4a5a6a] cursor-not-allowed' : 'bg-[#89a8f7] cursor-not-allowed')
                                    }`}>
                                Continue
                            </button>
                        </div>

                        <div className='flex items-center justify-center mt-4 w-full gap-4'>
                            <button className={`flex p-3.5 w-full items-center justify-center rounded-lg 
                                ${themeMode === 'dark' ? 'bg-[#3d5266]' : 'border border-gray-200'} `}>
                                <img src={logo5} alt="" />
                            </button>

                            <button className={`flex p-3.5 w-full items-center justify-center rounded-lg 
                                ${themeMode === 'dark' ? 'bg-[#3d5266]' : 'border border-gray-200'} `}>
                                <img src={logo2} alt="" />
                            </button>

                            <button className={`flex p-3.5 w-full items-center justify-center  rounded-lg
                                 ${themeMode === 'dark' ? 'bg-[#3d5266]' : 'border border-gray-200'} `}>
                                <img src={logo4} alt="" className="rounded-lg" />
                            </button>

                            <button className={`flex p-2.5 w-full items-center justify-center  rounded-lg 
                                ${themeMode === 'dark' ? 'bg-[#3d5266]' : 'border border-gray-200'} `}>
                                <img src={logo1} alt="" />
                            </button>
                        </div>

                        <div className='flex items-center mt-3 justify-center gap-2'>
                            <p className={`text-sm nav-bold ${themeMode === 'dark' ? 'text-gray-400' : 'text-[#7b809f]'}`}>Terms •</p>
                            <p className={`text-sm nav-bold ${themeMode === 'dark' ? 'text-gray-400' : 'text-[#7b809f]'}`}>Privacy</p>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Navbar