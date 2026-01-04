import React from 'react'
import { useOutletContext } from 'react-router-dom';

const Breaking = () => {
    const { theme, setTheme: toggleTheme } = useOutletContext();


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

    return (
        <div className={`flex  flex-col items-center pt-38 p-4 mb-12 min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>

        </div>
    )
}

export default Breaking