import React, { useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { PiSlidersHorizontal } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { trendingLinks } from '../../lib/data';
import { IoChevronBackOutline } from "react-icons/io5";
const Trending = () => {
    const [activeTab, setActiveTab] = useState('All');
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const { theme, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center pt-38 p-4  min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <nav className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-2'>
                    <div className={`flex relative  
                    ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#f4f5f6]'} items-center gap-2  px-2 w-65 py-1 rounded-lg`}>
                    <TbSearch className='text-gray-400 ml-2 text-xl'
                    />
                    <input type="text"
                        placeholder="Search polymarket "
                        className={`bg-[#2f3f50] ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#f4f5f6]'} placeholder:text-gray-400 text-white rounded-lg py-2 focus:outline-none`}
                    />
                    <span className='absolute right-5 text-xl text-gray-400'><IoClose /></span>
                </div>

                    <button className='flex px-2 py-2 rounded-lg hover:bg-[#2f3f50] cursor-pointer'>
                        <PiSlidersHorizontal className='text-2xl' />   
                    </button>

                    <button className='flex px-2.5 py-2 ml-4 rounded-lg hover:bg-[#2f3f50] cursor-pointer'>
                        <CiBookmark className='text-2xl  text-white' />
                    </button>


                    <hr className={`border-r ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}  h-7 ml-2  `} />
                </div>


                <div className='flex ml-2 items-center gap-2 flex-1 overflow-hidden'>
                    <button
                        onClick={scrollLeft}
                        className="p-1 hover:text-white text-gray-400 cursor-pointer  transition-colors shrink-0"
                        aria-label="Scroll left"
                    >
                        <IoChevronBackOutline className="text-xl" />
                    </button>
                    <div
                        ref={scrollContainerRef}
                        className="flex items-center gap-2  overflow-x-auto scrollbar-hide scroll-smooth flex-1"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {trendingLinks.map((link, index) => (
                            <button onClick={() => setActiveTab(link.name)}
                                key={index} className={`px-4 py-1.5 cursor-pointer rounded-md whitespace-nowrap
                         ${activeTab === link.name ? (theme === 'dark' ? 'bg-[#20415a] text-[#2c9cdb]' : 'text-gray-400') : 'text-gray-400 hover:text-white'}`}>
                                {link.name}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className="p-1 hover:text-white text-gray-400 cursor-pointer  transition-colors shrink-0"
                        aria-label="Scroll right"
                    >
                        <IoChevronBackOutline className='rotate-180 text-xl' />
                    </button>
                </div>



            </nav>
        </div>
    )
}

export default Trending