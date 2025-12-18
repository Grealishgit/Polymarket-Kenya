import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Trending = () => {



    const { theme, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>
            <nav>

            </nav>
        </div>
    )
}

export default Trending