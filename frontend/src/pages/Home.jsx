import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
            <a href="https://polymarket.com/" target="_blank" rel="noopener noreferrer">
                <header className='w-full p-4 bg-[#2c9cdb] rounded-md mt-4 text-white text-center'>
                    <h1 className='text-3xl font-bold'>Welcome to Polymarket Kenya</h1>
                </header>
            </a>
            <main className='grow p-4'>
                <p className='text-lg'>This is the home page of the Polymarket Kenya application.</p>
            </main>
            <footer className='w-full p-4 bg-gray-200 text-center'>
                <p className='text-sm'>&copy; <span>
                    {new Date().getFullYear()}
                </span> Polymarket Kenya. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home