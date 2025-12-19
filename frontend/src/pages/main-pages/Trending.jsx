import React, { useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { PiSlidersHorizontal } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { trendingData, trendingInputs, trendingLinks } from '../../lib/data';
import { IoChevronBackOutline } from "react-icons/io5";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";


const Trending = () => {
    const [activeTab, setActiveTab] = useState('All');
    const scrollContainerRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [searchInputActive, setSearchInputActive] = useState(false);

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

    // Function to calculate percentage from chance string
    const getPercentageValue = (chance) => {
        if (!chance) return 0;
        // Remove % and < > symbols, then parse
        const cleanValue = chance.replace(/[<%]/g, '');
        return parseFloat(cleanValue) || 0;
    };

    // Function to create SVG arc path for semi-circle
    const createArcPath = (percentage) => {
        const radius = 35;
        const centerX = 40;
        const centerY = 40;
        const startAngle = 180; // Start from left (180 degrees)
        const endAngle = 180 + (180 * percentage / 100); // Calculate end angle based on percentage

        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        const x1 = centerX + radius * Math.cos(startRad);
        const y1 = centerY + radius * Math.sin(startRad);
        const x2 = centerX + radius * Math.cos(endRad);
        const y2 = centerY + radius * Math.sin(endRad);

        const largeArcFlag = percentage > 50 ? 1 : 0;

        return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
    };

    return (
        <div className={`flex  flex-col items-center pt-38 p-4  min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <nav className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-2'>
                    <div className={`flex relative  
                    ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#f4f5f6]'} items-center gap-2  px-2 w-65 py-1 rounded-lg`}>
                        <TbSearch className='text-gray-400  text-xl'
                    />
                        <input type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Search"
                            onFocus={() => setSearchInputActive(true)}
                            onBlur={() => setSearchInputActive(false)}

                        className={`bg-[#2f3f50] ${theme === 'dark' ? 'bg-[#2f3f50]' : 'bg-[#f4f5f6]'} placeholder:text-gray-400 text-white rounded-lg py-2 focus:outline-none`}
                        />
                        {searchInput.length > 0 && (
                            <IoClose className='absolute right-5 text-xl text-gray-400 cursor-pointer'
                                onClick={() => setSearchInput('')}
                            />
                        )}
                        {/* Active Search input dialog */}
                        {searchInputActive && (
                            <div className='flex flex-col absolute rounded-lg border border-gray-600  left-3 top-13 w-55 bg-[#1d2b3a]'>
                                <div className='p-3'>
                                    <p className='text-gray-400 text-sm'>TRENDING</p>
                                </div>

                                {trendingInputs.map((input, index) => (
                                    <button key={index} className='text-white px-4 cursor-pointer py-2 hover:bg-[#2f3f50] w-full text-left'>
                                        <HiMiniArrowTrendingUp className='inline-block mr-2 text-xl' />
                                        {input.name}
                                    </button>
                                ))}
                            </div>
                        )}


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

            {/* Cards for the trending data */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full'>
                {trendingData.map((item) => (
                    <div
                        key={item.id}
                        className={`flex flex-col rounded-xl ${theme === 'dark' ? 'bg-[#2f3f50] border-gray-700' : 'bg-white border border-gray-200 '} p-4  transition-colors cursor-pointer`}
                    >
                        {/* Header with image, title, and optional chance */}
                        <div className='flex items-start gap-3 mb-4'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-12 h-12 rounded-lg object-cover'
                            />
                            <div className='flex-1 flex items-start justify-between gap-2'>
                                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-base hover:underline cursor-pointer font-medium leading-tight flex-1`}>
                                    {item.title}
                                </h3>
                                {item.type === 'simple' && item.chance && (
                                    <div className='flex flex-col items-center shrink-0 relative'>
                                        {/* Semi-circle progress indicator */}
                                        <div className='relative w-20 h-10 mb-1'>
                                            <svg width="80" height="40" viewBox="0 0 80 40" className='overflow-visible'>
                                                {/* Background arc */}
                                                <path
                                                    d={createArcPath(100)}
                                                    fill="none"
                                                    stroke={theme === 'dark' ? '#4d657c' : '#e6e8ea'}
                                                    strokeWidth="6"
                                                    strokeLinecap="round"
                                                />
                                                {/* Progress arc */}
                                                <path
                                                    d={createArcPath(getPercentageValue(item.chance))}
                                                    fill="none"
                                                    stroke={getPercentageValue(item.chance) > 50 ? '#43c267' : '#d33b4a'}
                                                    strokeWidth="6"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            {/* Percentage text centered */}
                                            <div className='absolute inset-0 top-6 pt-3 flex items-end justify-center pb-0'>
                                                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-semibold text-lg`}>
                                                    {item.chance}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-xs`}>
                                            chance
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Simple card with just Yes/No buttons */}
                        {item.type === 'simple' ? (
                            <div className='flex gap-2 mb-4'>
                                <button className={`flex-1 ${theme === 'dark' ? 'bg-[#325455] text-[#43c267]' : 'bg-[#e3f7ea] text-[#30a159]'}  hover:bg-[#43c772] nav-bold cursor-pointer hover:text-white text-lg py-2 rounded-lg font-medium`}>
                                    Yes
                                </button>
                                <button className={`flex-1 ${theme === 'dark' ? 'bg-[#4a3e4c] text-[#d33b4a]' : 'bg-[#fceded] text-[#e23979]'} hover:bg-[#d33b5a] nav-bold cursor-pointer hover:text-white text-lg py-2 rounded-lg font-medium`}>
                                    No
                                </button>
                            </div>
                        ) : (
                            /* Options/Predictions for complex cards */
                            <div className='flex flex-col gap-3 mb-4'>
                                    {item.options && item.options.map((option, index) => (
                                        <div key={index} className='flex items-center justify-between'>
                                            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline cursor-pointer text-md`}>
                                                {option.date || option.name || option.range}
                                            </span>
                                            <div className='flex items-center gap-3'>
                                                <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold text-lg`}>
                                                {typeof option.percentage === 'number' ? `${option.percentage}%` : option.percentage}
                                            </span>
                                                <button className={`bg-[#325455] ${theme == 'dark' ? 'text-[#43c267] hover:bg-[#43c772] ' : 'bg-[#e3f7ea] text-[#30a159]'} nav-bold cursor-pointer hover:text-white text-sm px-3 py-1 rounded`}>
                                                {option.yesVotes}
                                            </button>
                                                <button className={`bg-[#4a3e4c] ${theme == 'dark' ? 'text-[#d33b4a] hover:bg-[#d33b5a] ' : 'bg-[#fceded] text-[#e23979]'} nav-bold cursor-pointer hover:text-white text-sm px-3 py-1 rounded`}>
                                                {option.noVotes}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                </div>
                        )}

                        {/* Footer with volume and actions */}
                        <div className='flex items-center justify-between pt-3 border-t border-gray-700'>
                            <div className='flex items-center gap-2 text-gray-400 text-xs'>
                                <span>{item.volume}</span>
                                {item.author && (
                                    <>
                                        <span>•</span>
                                        <span>{item.author}</span>
                                    </>
                                )}
                                {item.frequency && (
                                    <>
                                        <span>•</span>
                                        <span>{item.frequency}</span>
                                    </>
                                )}
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='text-gray-400 hover:text-white transition-colors'>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' />
                                    </svg>
                                </button>
                                <button className='text-gray-400 hover:text-white transition-colors'>
                                    <CiBookmark className='w-5 h-5' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending