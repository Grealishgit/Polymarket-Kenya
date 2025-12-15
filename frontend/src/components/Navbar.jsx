import React from 'react'
import logo from '../assets/images/logo-white.svg'

const Navbar = () => {
    return (
        <div className="w-full flex">
            <nav className="w-full h-16 justify-between p-4 text-white">
                <img src={logo} alt="" className='w-auto h-8' />
            </nav>
        </div>
    )
}

export default Navbar