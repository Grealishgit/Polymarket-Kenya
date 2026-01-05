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

    const newsLinks = [
        {
            id: 1,
            rank: 1,
            title: 'Maduro mugshot released by Monday?',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fmaduro-428d41b1ac.jpg&w=96&q=75',
            percentage: 7,
            change: -24,
            trend: 'down'
        },
        {
            id: 2,
            rank: 2,
            title: 'Will Supha Xayprasith-Mays win the 2026 Arkansas Governor Democratic primary election?',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Farkansas-governor-democratic-primary-winner-At6exE4JbPI-.png&w=96&q=75',
            percentage: 25,
            change: -20,
            trend: 'down'
        },
        {
            id: 3,
            rank: 3,
            title: 'Will María Corina Machado be the leader of Venezuela end of 2026?',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fvenezuela-leader-end-of-2026-lOfqbUxiKAsg.png&w=96&q=75',
            percentage: 18,
            change: -18,
            trend: 'down'
        },
        {
            id: 4,
            rank: 4,
            title: 'Venezuela election scheduled by March 31, 2026?',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fvenezuela-leader-end-of-2026-lOfqbUxiKAsg.png&w=96&q=75',
            percentage: 22,
            change: -17,
            trend: 'down'
        },
        {
            id: 5,
            rank: 5,
            title: 'Will the Logan Paul 1st Edition Charizard sale price be over 800k?',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Flogan-paul-break-1st-edition-charizard-sale-price-nEUsugaq3YGe.jpg&w=96&q=75',
            percentage: 40,
            change: -17,
            trend: 'down'
        },
        {
            id: 6,
            rank: 6,
            title: 'Nothing Ever Happens: Israel Edition',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fnothing-ever-happens-israel-edition-62-JFPwY_rXF.jpg&w=96&q=75',
            percentage: 53,
            change: -17,
            trend: 'down'
        },
        {
            id: 7,
            rank: 7,
            title: 'US strike on Colombia by January 31?',
            image: 'https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fus-strike-on-colombia-by-january-31-P4KCpXnvCj4O.jpg&w=96&q=75',
            percentage: 5,
            change: -3,
            trend: 'down'
        }
    ]



    // format date to 1 Jan, 2026
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }

    return (
        <div className={`flex  flex-col items-center pt-38 p-4 mb-12 min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <div className='w-full flex gap-3 p-2'>
                <div className='flex flex-col w-[70%]'>
                    {/* Header */}
                    <div className={`flex rounded-2xl  ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#e7edfd]'} flex-col  mb-6 gap-3 p-8`}>
                        <p className={`nav-bold ${theme === 'dark' ? 'text-[#617788] font-semibold' : 'text-[#91949f]'}`}>{formatDate(new Date())}</p>
                        <p className={`nav-bold text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Breaking News</p>
                        <p className={`nav-bold ${theme === 'dark' ? 'text-[#617788] font-semibold' : 'text-[#91949f]'} text-lg mt-5 mb-7`}>See the polymarkets that moved the most in the last 24 hours</p>
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

                    {/* News here */}
                    <div className='flex flex-col gap-3'>
                        {newsLinks.map((news) => (
                            <div
                                key={news.id}
                                className={`flex items-center justify-between p-6 border-b rounded-lg cursor-pointer transition-colors
                                    ${theme === 'dark' ? 'bg-[#f4f5f6] border-gray-700' : 'bg-white border-gray-200 hover:bg-[#f4f5f6] '}`}
                            >
                                {/* Rank number */}
                                <div className='flex items-center justify-center w-8'>
                                    <span className={`text-xl  ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {news.rank}
                                    </span>
                                </div>

                                {/* Image and Title */}
                                <div className='flex items-center gap-3 flex-1 mx-4'>
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className='w-12 h-12 rounded-lg object-cover'
                                    />
                                    <div className='flex flex-col gap-1'>
                                        <h3 className={`text-lg nav-bold hover:underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {news.title}
                                        </h3>
                                        <div className='flex items-center gap-2'>
                                            <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-red-500'}`}>
                                                {news.percentage}%
                                            </span>
                                            <span className='text-red-500 text-sm font-semibold flex items-center'>
                                                <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                                                    <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                                                </svg>
                                                {Math.abs(news.change)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Trend chart placeholder */}
                                <div className='flex items-center'>
                                    <svg width="100" height="40" className='text-red-500'>
                                        <polyline
                                            points="0,10 20,8 40,15 60,12 80,20 100,25"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>

                                {/* Arrow */}
                                <div className='ml-4'>
                                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex flex-col w-[30%] pr-4'>
                    <div className={`flex flex-col p-4 border  ${theme === 'dark' ? 'border-[#3d5266]' : 'border-[#e6e8ea] shadow-xl shadow-[#e6e8ea] '} fixed  rounded-2xl`}>
                        <div className='flex flex-row gap-2'>
                            <MdNotificationsActive size={40} className={`${theme === 'dark' ? 'text-[#6d7e92]' : 'text-[#77808d]'}`} />
                            <div className='flex flex-col'>
                                <h2 className={`text-lg nav-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Get daily update</h2>
                                <p className={`${theme === 'dark' ? 'text-[#6d7e92]' : 'text-gray-400'}`}>We'll send you an email every day with what's moving on Polymarket</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 mt-8'>
                            <input type="text"
                                placeholder='Enter your email'
                                className={`w-full p-3 pl-4 focus:outline-3 focus:outline-[#1452f0]
                                 ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-white border border-gray-200'} rounded-lg `} />
                            <button className={`w-full ${theme === 'dark' ? ' bg-[#2c9cdb]' : 'bg-[#1452f0]'} text-white p-3 rounded-lg `}>Get updates</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breaking