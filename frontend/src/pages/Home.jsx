
import { useOutletContext } from 'react-router-dom';
import Trending from './main-pages/Trending';

const Home = () => {
    const { theme, setTheme: toggleTheme } = useOutletContext();
    return (
        <div className={`flex flex-col items-center justify-center min-h-screen w-full 
        ${theme === 'dark' ? 'bg-[#1d2b3a]' : 'bg-[#ffffff]'}`}>


        </div>
    )
}

export default Home;