import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Trending = () => {



    const { theme, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center pt-38 p-4  min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <nav className='flex justify-between items-center w-full'>
                <div>
                    <input
                        type="text"
                        name="" id=""
                        placeholder='Search ...'
                        className={`px-4 py-2 rounded-lg w-1/3 
                    ${theme === 'dark' ? 'bg-[#2f3f50] text-white placeholder:text-gray-400' : 'bg-[#f4f5f6] text-black placeholder:text-gray-600'}`}
                    />
                </div>

            </nav>
        </div>
    )
}

export default Trending