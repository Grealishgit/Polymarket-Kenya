import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
const Trending = () => {



    const { theme, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center pt-38 p-4  min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <nav className='flex justify-between items-center w-full'>

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

            </nav>
        </div>
    )
}

export default Trending