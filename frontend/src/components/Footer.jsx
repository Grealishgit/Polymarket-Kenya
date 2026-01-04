import React from 'react'


const Footer = ({ themeMode, setTheme: toggleTheme }) => {

    return (
        <div className={`w-full flex font-medium
        ${themeMode === 'dark' ? 'bg-[#1d2b3a] border-[#3d5266] text-gray-400' :
                'bg-white border-gray-200 text-gray-400 '}  fixed w-full bottom-0 z-10  flex-col p-3`}>
            <div className='w-full flex justify-between ml-5'>
                <div className='flex items-center gap-1'>
                    <p className='text-sm'>Adventure One QSS Inc.ⓒ {new Date().getFullYear()}</p>
                    <ul className={`flex items-center  text-sm gap-2`}>
                        <a href='' className={`cursor-pointer 
                            ${themeMode === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Privacy</a> •
                        <a href='' className={`cursor-pointer 
                            ${themeMode === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Terms of use</a> •
                        <a href='' className={`cursor-pointer 
                            ${themeMode === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Learn</a> •
                        <a href='' className={`cursor-pointer 
                            ${themeMode === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Careers</a> •
                        <a href='' className={`cursor-pointer 
                            ${themeMode === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Press</a>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer