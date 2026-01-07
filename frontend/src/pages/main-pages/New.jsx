import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { PiSlidersHorizontal } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { TbSearch } from "react-icons/tb";

const New = () => {
    const { theme, setTheme: toggleTheme } = useOutletContext();
    const subLinks = [
        { id: 1, name: 'All', href: '' },
        { id: 2, name: 'Trump', href: '' },
        { id: 3, name: 'Iran', href: '' },
        { id: 4, name: 'Greenland', href: '' },
        { id: 5, name: 'Ukraine', href: '' },
        { id: 6, name: 'Portugal Election', href: '' },
        { id: 7, name: 'Minnesota Fraud', href: '' },
        { id: 8, name: 'Epstein', href: '' },
        { id: 9, name: 'Fed', href: '' },
        { id: 10, name: 'Tweet Markets', href: '' },
        { id: 11, name: 'Golden Globes', href: '' },
        { id: 12, name: 'Silver', href: '' },
        { id: 13, name: 'Tweet Markets', href: '' },
        { id: 14, name: 'China', href: '' },
        { id: 15, name: 'AI', href: '' },
        { id: 16, name: 'Weather', href: '' },
        { id: 17, name: 'Equalities', href: '' },
        { id: 18, name: 'Derivatives', href: '' },
        { id: 19, name: 'Primaries', href: '' },
        { id: 20, name: 'Midterms', href: '' },
        { id: 21, name: 'Movies', href: '' },
        { id: 22, name: 'Global Elections', href: '' },
        { id: 23, name: 'Parlays', href: '' },
        { id: 24, name: 'Israel', href: '' },
        { id: 25, name: 'Crypto Prices', href: '' },
        { id: 26, name: 'Bitcoin', href: '' },
        { id: 27, name: 'Commodities', href: '' },
    ]

    return (
        <div className={`flex  flex-col items-center pt-38 p-4 mb-12 min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <nav className='flex items-center gap-3 w-full'>
                <div className='flex items-center gap-2 w-full'>
                    {subLinks.map((link) => (
                        <button key={link.id} className='px-3 py-1 rounded-lg hover:bg-[#2f3f50] cursor-pointer'>
                            {link.name}
                        </button>
                    ))}
                </div>


                <button className='flex px-2.5 py-2 ml-4 rounded-lg hover:bg-[#2f3f50] cursor-pointer'>
                    <TbSearch className='text-2xl  text-white' />
                </button>
                <button className='flex px-2 py-2 rounded-lg hover:bg-[#2f3f50] cursor-pointer'>
                    <PiSlidersHorizontal className='text-2xl' />
                </button>

                <button className='flex px-2.5 py-2 ml-4 rounded-lg hover:bg-[#2f3f50] cursor-pointer'>
                    <CiBookmark className='text-2xl  text-white' />
                </button>
            </nav>
        </div>
    )
}

export default New