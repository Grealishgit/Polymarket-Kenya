
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { themeMode, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center min-h-screen w-full 
        ${themeMode === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>

            <p className='mt-20'>Hello there!</p>
        </div>
    )
}

export default Home