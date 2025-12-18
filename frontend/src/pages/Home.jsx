
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { theme, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>

            <p className='mt-20'>Hello there!</p>
        </div>
    )
}

export default Home;