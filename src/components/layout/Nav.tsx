import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-evenly w-[calc(100%-2rem)] max-w-7xl mx-4 md:mx-auto bg-primary border-white/10 px-8 py-4 rounded-full text-xl shadow-xl mt-6 relative z-50">
            {/* Desktop Menu - Left Links */}
            <div className="hidden md:flex items-center gap-10">
                <a href="#home" className="relative overflow-hidden h-6 group text-secondary font-semibold">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-primary">Home</span>
                </a>
                <a href="#about" className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors duration-300">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">About</span>
                </a>
                <a href="#services" className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors duration-300">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Service</span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Service</span>
                </a>
            </div>

            {/* Center Logo */}
            <a href="#" className="flex items-center gap-2 select-none group">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-primary text-xl font-semibold group-hover:scale-105 transition-transform duration-300">
                    K
                </div>
                <span className="text-secondary font-arial font-semibold text-2xl ">Kushal</span>
            </a>

            {/* Desktop Menu - Right Links */}
            <div className="hidden md:flex items-center gap-10">
                <a href="#resume" className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors duration-300">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Resume</span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Resume</span>
                </a>
                <a href="#projects" className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors duration-300">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Project</span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Project</span>
                </a>
                <a href="#contact" className="relative overflow-hidden h-6 group text-white hover:text-white transition-colors duration-300">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact Us</span>
                    <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">Contact Us</span>
                </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
                id="menuToggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-primary transition-colors focus:outline-none"
            >
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Dropdown Menu */}
            <div
                id="mobileMenu"
                className={`absolute md:hidden ${isMenuOpen ? "flex" : "hidden"} top-20 left-0 right-0 bg-black/95 backdrop-blur-md rounded-2xl flex-col items-center gap-6 py-8 border border-white/10 shadow-2xl z-50`}
            >
                <a className="text-primary text-lg font-semibold" href="#home" onClick={() => setIsMenuOpen(false)}>
                    Home
                </a>
                <a className="text-white/80 hover:text-white text-lg transition-colors" href="#about" onClick={() => setIsMenuOpen(false)}>
                    About
                </a>
                <a className="text-white/80 hover:text-white text-lg transition-colors" href="#services" onClick={() => setIsMenuOpen(false)}>
                    Service
                </a>
                <a className="text-white/80 hover:text-white text-lg transition-colors" href="#resume" onClick={() => setIsMenuOpen(false)}>
                    Resume
                </a>
                <a className="text-white/80 hover:text-white text-lg transition-colors" href="#projects" onClick={() => setIsMenuOpen(false)}>
                    Project
                </a>
                <a className="text-white/80 hover:text-white text-lg transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                </a>
            </div>
        </nav>
    );
};

export default Nav;