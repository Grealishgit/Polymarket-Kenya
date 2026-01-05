import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";

const Breaking = () => {
    const { theme, setTheme: toggleTheme } = useOutletContext();
    const [activeLink, setActiveLink] = useState('All');


    const subLinks = [
        { id: 1, title: 'All', href: '#' },
        { id: 2, title: 'Politics', href: '#' },
        { id: 3, title: 'World', href: '#' },
        { id: 4, title: 'Sports', href: '#' },
        { id: 5, title: 'Crypto', href: '#' },
        { id: 6, title: 'Finance', href: '#' },
        { id: 7, title: 'Tech', href: '#' },
        { id: 8, title: 'Culture', href: '#' },

    ]

    // format date to 1 Jan, 2026
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div className={`flex  flex-col items-center pt-38 p-4 mb-12 min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <div className='w-full flex p-2'>
                <div className='flex flex-col  w-[70%]'>
                    {/* Header */}
                    <div className='flex rounded-2xl flex-col bg-[#1f3f56] mb-6 gap-3 p-8'>
                        <p className={`${theme === 'dark' ? 'text-[#617788] font-semibold' : 'text-black'}`}>{formatDate(new Date())}</p>
                        <p className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Breaking News</p>
                        <p className={`${theme === 'dark' ? 'text-[#617788] font-semibold' : 'text-black'} mt-5 mb-7`}>See the polymarkets that moved the most in the last 24 hours</p>
                    </div>

                    {/* sublinks */}
                    <div className='flex items-center no-scrollview gap-4 mb-4 overflow-x-auto'>
                        {subLinks.map((link) => (
                            <button key={link.id}
                                onClick={() => setActiveLink(link.title)}
                                className={`px-3 py-2 rounded-full whitespace-nowrap border transition-colors
                                     ${activeLink === link.title
                                        ? (theme === 'dark'
                                            ? 'border-[#2c9cdb] bg-[#1d3548] text-[#2c9cdb]'
                                            : 'border-[#2c9cdb] bg-[#e3f2fd] text-[#1976d2]')
                                        : (theme === 'dark'
                                            ? 'text-[#8998aa] hover:text-white border-[#3a4e61] hover:border-gray-500'
                                            : 'text-gray-600 hover:text-black border-gray-300 hover:border-gray-400')}
                                     cursor-pointer nav-bold font-medium`}
                            >
                                {link.title}
                            </button>
                        ))}
                    </div>

                </div>
                <div className='flex flex-col w-[30%] pl-4'>
                    <div className={`flex flex-col p-4 border  ${theme === 'dark' ? 'border-[#3d5266]' : ''} fixed  rounded-2xl`}>
                        <div className='flex flex-row gap-2'>
                            <MdNotificationsActive size={40} className={`${theme === 'dark' ? 'text-[#6d7e92]' : 'text-black'}`} />
                            <div className='flex flex-col'>
                                <h2 className={`text-lg font-medium mt-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Get daily update</h2>
                                <p className={`${theme === 'dark' ? 'text-[#6d7e92]' : 'text-black'}`}>We'll send you an email every day with what's moving on Polymarket</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 mt-8'>
                            <input type="text"
                                placeholder='Enter your email'
                                className={`w-full p-3 pl-4 ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-white border border-gray-200'} rounded-lg  `} />
                            <button className={`w-full ${theme === 'dark' ? ' bg-[#2c9cdb]' : 'bg-[#1452f0]'} text-white p-3 rounded-lg `}>Get updates</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breaking