import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import { CgArrowBottomRight } from "react-icons/cg";
import { FaXTwitter } from 'react-icons/fa6';

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


    const twitterLinks = [
        {
            id: 1,
            title: 'Breaking news',
            tweet: 'President Trump warns if Republicans do  ot win midterms, he will be impeached',
            image: '',
            time: '6 Jan, 20:12'
        },
        {
            id: 2,
            title: 'Polymarket news',
            tweet: 'Elon Musk announces new Tesla model to be released in 2026',
            image: '',
            time: '6 Jan, 16:20'
        },
        {
            id: 3,
            title: 'Breaking news',
            tweet: 'New study reveals the benefits of a plant-based diet',
            image: 'https://pbs.twimg.com/media/G96CB5lWMAALfqw.jpg',
            time: '6 Jan, 18:31'
        },
        {
            id: 4,
            title: 'Polymarket news',
            tweet: 'NASA announces plans for manned mission to Mars by 2030',
            image: 'https://pbs.twimg.com/media/G972SbfWIAAwtvw.jpg',
            time: '6 Jan, 14:22'
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
                    <div className={`flex relative rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-[#1f3f56]' : 'bg-[#e7edfd]'} flex-col  mb-6 gap-3 p-8`}>
                        <p className={`nav-bold ${theme === 'dark' ? 'text-[#617788] font-semibold' : 'text-[#91949f]'}`}>{formatDate(new Date())}</p>
                        <p className={`nav-bold text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Breaking News</p>
                        <p className={`nav-bold ${theme === 'dark' ? 'text-[#617788] font-semibold' : 'text-[#91949f]'} text-lg mt-5 mb-7`}>See the polymarkets that moved the most in the last 24 hours</p>


                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-96  @max-[500px]:left-5/12 @max-[500px]:-scale-x-100">
                            <svg className="w-full h-auto" viewBox="0 0 559 820" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="243.868" y="215.689" width="325.125" height="537.75" rx="162.562" transform="rotate(15 243.868 215.689)" stroke="#2f3f50" stroke-width="1.125"></rect><rect x="283.644" y="284.581" width="212.625" height="425.25" rx="106.312" transform="rotate(15 283.644 284.581)" stroke="#2f3f50" stroke-width="1.125"></rect><path d="M188.541 395.367L193.492 400.157C193.864 400.517 194.396 400.66 194.899 400.534L201.581 398.861" stroke="#e9eef1ff" stroke-width="1.5" stroke-linecap="round"></path><path d="M169.131 467.811L174.081 472.6C174.454 472.961 174.986 473.103 175.489 472.977L182.171 471.305" className="#c00932" stroke-width="1.5" stroke-linecap="round"></path><path d="M235.533 489.486L230.583 484.697C230.21 484.336 229.678 484.194 229.175 484.319L222.493 485.992" className="#2f3f50" stroke-width="1.5" stroke-linecap="round"></path><rect x="0.688919" y="-0.397748" width="325.125" height="537.75" rx="162.562" transform="matrix(0.965926 0.258819 0.258819 -0.965926 0.175247 519.766)" className="#c00932" stroke-width="1.125"></rect><rect x="0.688919" y="-0.397748" width="212.625" height="425.25" rx="106.312" transform="matrix(0.965926 0.258819 0.258819 -0.965926 69.0678 479.991)" className="#2f3f50" stroke-width="1.125"></rect><path d="M42.6621 337.061L49.3443 335.388C49.847 335.262 50.3791 335.404 50.7516 335.765L55.7021 340.555" className="#2f3f50" stroke-width="1.5" stroke-linecap="round"></path><path d="M62.0742 264.615L68.7564 262.942C69.2591 262.817 69.7912 262.959 70.1637 263.319L75.1142 268.109" color="#c00932" stroke-width="1.5" stroke-linecap="round"></path><path d="M130.418 279.047L123.736 280.72C123.233 280.846 122.701 280.703 122.329 280.343L117.378 275.553" className="#2f3f50" stroke-width="1.5" stroke-linecap="round"></path><path d="M111.006 351.49L104.324 353.163C103.821 353.289 103.289 353.146 102.916 352.786L97.9659 347.996" className="#2f3f50" stroke-width="1.5" stroke-linecap="round"></path><rect width="101.25" height="313.875" rx="50.625" transform="matrix(0.965926 0.258819 0.258819 -0.965926 137.834 441.176)" fill="url(#paint0_linear_1167_586)"></rect><rect width="101.25" height="101.25" rx="50.625" transform="matrix(0.965926 0.258819 0.258819 -0.965926 137.834 441.176)" fill="#2c9cdb"></rect><g filter="url(#filter0_d_1167_586)"><path d="M215.019 388.259C215.514 386.412 215.396 384.845 214.666 383.558C213.941 382.255 212.663 381.358 210.832 380.867L202.475 378.628C200.661 378.142 199.105 378.279 197.809 379.041C196.533 379.791 195.648 381.089 195.153 382.936L187.393 411.899C186.894 413.761 187.009 415.336 187.739 416.623C188.485 417.915 189.765 418.804 191.58 419.29L199.937 421.53C201.767 422.02 203.32 421.89 204.596 421.14C205.872 420.39 206.759 419.084 207.258 417.222L215.019 388.259ZM180.973 399.66C180.05 399.413 179.207 399.503 178.444 399.93C177.677 400.372 177.17 401.055 176.923 401.979C176.748 402.631 176.721 403.272 176.842 403.902C176.964 404.532 177.236 405.236 177.658 406.014L190.338 429.655C190.656 430.252 191.028 430.71 191.454 431.029C191.896 431.352 192.333 431.571 192.762 431.686C193.224 431.81 193.719 431.84 194.248 431.777C194.777 431.714 195.326 431.511 195.895 431.169L218.583 416.98C219.419 416.471 220.043 415.99 220.454 415.537C220.877 415.104 221.174 414.57 221.345 413.933C221.596 412.994 221.477 412.134 220.986 411.354C220.496 410.575 219.797 410.063 218.89 409.82L180.973 399.66Z" fill="white"></path></g><rect x="323.021" y="352.785" width="101.25" height="313.875" rx="50.625" transform="rotate(15 323.021 352.785)" fill="url(#paint1_linear_1167_586)"></rect><rect x="323.021" y="352.785" width="101.25" height="101.25" rx="50.625" transform="rotate(15 323.021 352.785)" fill="#2c9cdb"></rect><g filter="url(#filter1_d_1167_586)"><path d="M363.407 437.205C362.912 439.052 362.027 440.35 360.751 441.1C359.471 441.866 357.915 442.004 356.085 441.513L347.728 439.274C345.913 438.788 344.635 437.891 343.894 436.583C343.164 435.296 343.046 433.729 343.541 431.882L351.302 402.92C351.801 401.057 352.688 399.751 353.964 399.001C355.256 398.255 356.809 398.125 358.623 398.612L366.98 400.851C368.811 401.341 370.091 402.23 370.821 403.518C371.551 404.805 371.666 406.38 371.167 408.243L363.407 437.205ZM339.623 410.308C338.7 410.061 338.014 409.562 337.567 408.811C337.125 408.044 337.027 407.199 337.274 406.275C337.449 405.623 337.746 405.054 338.166 404.569C338.586 404.085 339.174 403.611 339.929 403.148L362.73 389.015C363.304 388.657 363.855 388.446 364.384 388.383C364.929 388.324 365.416 388.353 365.846 388.468C366.307 388.591 366.751 388.813 367.178 389.132C367.604 389.451 367.978 389.901 368.3 390.482L380.854 414.114C381.323 414.973 381.623 415.702 381.753 416.3C381.903 416.886 381.893 417.497 381.722 418.134C381.47 419.073 380.937 419.758 380.122 420.188C379.308 420.618 378.447 420.711 377.539 420.468L339.623 410.308Z" fill="white"></path></g><defs><filter id="filter0_d_1167_586" x="101.773" y="305.021" width="180.632" height="186.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-7.64266" dy="-7.64266"></feOffset><feGaussianBlur stdDeviation="30.5707"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1167_586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1167_586" result="shape"></feBlend></filter><filter id="filter1_d_1167_586" x="260.941" y="313.734" width="180.632" height="186.122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-7.64266" dy="-7.64266"></feOffset><feGaussianBlur stdDeviation="30.5707"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1167_586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1167_586" result="shape"></feBlend></filter><linearGradient id="paint0_linear_1167_586" x1="50.625" y1="0" x2="50.625" y2="313.875" gradientUnits="userSpaceOnUse"><stop stop-color="#2c9cdb"></stop><stop offset="0.9999" stop-color="var(--color-brand-50)"></stop><stop offset="1" stop-color="var(--color-brand-100)"></stop></linearGradient><linearGradient id="paint1_linear_1167_586" x1="373.646" y1="352.785" x2="373.646" y2="666.66" gradientUnits="userSpaceOnUse"><stop stop-color="#2c9cdb"></stop><stop offset="0.9999" stop-color="var(--color-brand-50)"></stop><stop offset="1" stop-color="#2c9cdb"></stop></linearGradient></defs>
                            </svg>
                        </div>
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
                                    ${theme === 'dark' ? 'bg-[#1d2b3a] border-gray-700 hover:bg-[#2f3f50]' : 'bg-white border-gray-200 hover:bg-[#f4f5f6] '}`}
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
                                            <span className='text-[#e23939] text-md nav-bold mr-3 flex items-center'>
                                                <CgArrowBottomRight className='text-[#e23939]' />
                                                {Math.abs(news.change)}%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Trend chart placeholder */}
                                <div className='flex items-center'>
                                    <svg width="80" height="20" className='text-[#e23939]'>
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
                                    <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex fixed flex-col right-0 w-[30%] pr-4'>

                    <div className={`flex flex-col p-4 border  ${theme === 'dark' ? 'border-[#3d5266]' : 'border-[#e6e8ea] shadow-xl shadow-[#e6e8ea] '}   rounded-2xl`}>
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
                                className={`w-full p-3 pl-4 focus:outline-3 
                                 ${theme === 'dark' ? 'bg-[#2f3f50] focus:outline-[#2c9cdb]' : 'bg-white border border-gray-200 focus:outline-[#1452f0]'} rounded-lg `} />
                            <button className={`w-full ${theme === 'dark' ? ' bg-[#2c9cdb]' : 'bg-[#1452f0]'} text-white p-3 rounded-lg `}>Get updates</button>
                        </div>

                    </div>

                    {/* Live from Twitter */}
                    <div className='flex  flex-col mt-7 w-full'>
                        <div className={`flex border-b ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} justify-between w-full`} >
                            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-[#77808d]'}`}>Live from @ploymarket</h2>
                            <button className={`flex rounded-full mb-3 nav-bold text-sm p-1 px-4 py-2 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} items-center gap-2`}>
                                Follow on
                                <FaXTwitter className={`cursor-pointer text-sm  ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`} />
                            </button>
                        </div>

                        <div className='flex flex-col overflow-y-auto mt-3 no-scrollview w-full max-h-96'>
                            {twitterLinks.map((tweet) => (
                                <div key={tweet.id} className={`flex flex-col gap-2 mb-4 p-2 rounded-lg cursor-pointer
                                    ${theme === 'dark' ? 'bg-[#1d2b3a] hover:bg-[#2f3f50]' : ' bg-[#ffffff] hover:bg-[#f4f5f6]'}`}>
                                    <div className='flex items-center justify-between w-full'>
                                        <p className={` ${theme === 'dark' ? 'text-[#405062]' : 'text-gray-400'}`}>{tweet.title}</p>
                                        <p className={` ${theme === 'dark' ? 'text-[#405062]' : 'text-gray-400'}`}>{tweet.time}</p>
                                    </div>

                                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>{tweet.tweet}</p>
                                    {tweet.image && (
                                        <img src={tweet.image} alt="Tweet image" className="rounded-lg" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Breaking