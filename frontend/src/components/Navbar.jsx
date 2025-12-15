import React from 'react'
import logo from '../assets/images/logo-white.svg'
import flag from '../assets/images/flag.png'
import { MdMenu as IonsMdMenu } from 'react-icons/md'
import { GoSearch } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="w-full p-2 flex">
            <nav className="w-full flex items-center h-16 justify-between p-4 text-white">
                <div className='flex items-center gap-4'>
                    <img src={logo} alt="" className='w-auto h-8' />
                    <img src={flag} alt="" className='w-auto h-7 -rotate-4' />
                </div>

                <div className='flex relative items-center gap-2 bg-[#2f3f50] px-2 w-150 py-1 rounded-lg'>
                    <GoSearch className='text-gray-400 ml-2 text-xl'
                    />
                <input type="text"
                        placeholder="Search polymarket "
                        className="bg-[#2f3f50]  placeholder:text-gray-400 text-white rounded-lg px-4 py-2 focus:outline-none"
                    /> 
                    <span className='absolute right-5 text-xl text-gray-400'>/</span>
                </div>






                <a href="">How it works</a>

                <div className='flex items-center gap-4'>
                    <button className="text-[#2c9cdb] hover:text-[#35acf1] 
                    rounded-lg hover:bg-gray-700/90 cursor-pointer items-center justify-center px-4 py-1.5 font-semibold text-lg  ">
                        Log In
                    </button>
                    <button className="bg-[#2c9cdb] cursor-pointer hover:bg-[#3fb0f1] px-5 font-medium py-2 rounded-md">
                        Sign Up
                    </button>
                    <IonsMdMenu size={35} className="text-white cursor-pointer hover:bg-gray-700 p-1 rounded-xl" />
                </div>


            </nav>
        </div>
    )
}

export default Navbar