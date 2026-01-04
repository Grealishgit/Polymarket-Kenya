import React from 'react'


const Footer = ({ themeMode, setTheme: toggleTheme }) => {

    return (
        <div className={`w-full flex  
        ${themeMode === 'dark' ? 'bg-[#1d2b3a] border-[#3d5266] text-gray-400' : 'bg-white border-gray-200'}  fixed w-full bottom-0 z-10  flex-col p-3`}>
            <div className='w-full flex justify-between'>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Adventure One QSS Inc.ⓒ {new Date().getFullYear()}</p>
                    <ul className={`flex items-center  text-sm gap-2`}>
                        <li>Privacy</li> •
                        <li>Terms of use</li> •
                        <li>Learn</li> •
                        <li>Careers</li> •
                        <li>Press</li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer