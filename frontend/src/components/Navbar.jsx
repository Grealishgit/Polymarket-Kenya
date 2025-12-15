import React from 'react'
import logo from '../assets/images/logo-white.svg'
import flag from '../assets/images/flag.png'

const Navbar = () => {
    return (
        <div className="w-full flex">
            <nav className="w-full h-16 justify-between p-4 text-white">
                <div className='flex items-center gap-4'>
                    <img src={logo} alt="" className='w-auto h-8' />
                    <img src={flag} alt="" className='w-auto h-7 -rotate-4' />
                </div>

            </nav>
        </div>
    )
}

export default Navbar