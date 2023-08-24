import logo from '../assets/logo-mobile.svg'
import iconUp from "../assets/icon-chevron-up.svg"
import iconDown from "../assets/icon-chevron-down.svg"
const Header = () => {
    return (
        <section className="p-4 fixed bg-white dark:bg-[#2b2c37] z-50 right-0 left-0">
            <header className=' flex justify-between dark:text-white items-center'>
                {/* Left Side */}
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <img src={logo} alt="logo" className='h-6 w-6' />
                    <h3 className='hidden md:inline-block font-bold md:text-4xl'>Kanban</h3>
                    <div>
                        <h3 className='truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20'>
                            Board Name
                        </h3>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;