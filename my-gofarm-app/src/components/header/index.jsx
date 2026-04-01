import { NavLink } from 'react-router-dom';

const Header = () => {
    const linkClasses = ({ isActive }) =>
        `hover:text-[#2D5A27] transition ${isActive ? 'text-[#2D5A27]' : 'text-[#666666]'}`;

    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100] px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center text-white text-xs font-bold">GP</div>
                <h1 className="text-[#2D5A27] font-bold text-xl tracking-tight font-serif">GOfarm Palace</h1>
            </div>
            <nav className="hidden lg:flex gap-8 font-medium">
                <NavLink to="/" className={linkClasses}>Home</NavLink>
                <NavLink to="/marketplace" className={linkClasses}>Marketplace</NavLink>
                <NavLink to="/how-it-works" className={linkClasses}>How It Works</NavLink>
                <NavLink to="/about" className={linkClasses}>About</NavLink>
                <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
            </nav>
            <div className="flex items-center gap-4 md:gap-6">
                <NavLink to="/login" className="text-[#666666] font-medium hidden sm:block">Login</NavLink>
                <button className="bg-[#2D5A27] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#23471f] transition shadow-md">
                    Register
                </button>
            </div>
        </header>
    );
};

export default Header;