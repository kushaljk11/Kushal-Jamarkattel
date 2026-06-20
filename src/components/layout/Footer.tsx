import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-[#121214] text-white pt-16 pb-8 px-6 sm:px-12 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Header CTA Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-neutral-800/80">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                        Let's Connect there
                    </h2>
                    <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-[0_10px_25px_-5px_rgba(0,71,65,0.4)] hover:scale-105 transition duration-300 flex items-center gap-1 shadow-sm cursor-pointer text-sm sm:text-base">
                        Hire me ↗
                    </button>
                </div>

                {/* Footer Columns grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-16">
                    
                    {/* Brand column */}
                    <div className="flex flex-col gap-4 items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 select-none">
                            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-sans text-xl font-semibold">
                                K
                            </div>
                            <span className="text-white font-sans font-semibold text-2xl tracking-wide">Kushal</span>
                        </div>
                        
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-[240px]">
                            Creating premium layouts and interfaces that delight users and drive conversion. Let's work together.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-2">
                            <a 
                                href="https://www.facebook.com/kushal.jamarkattel.1" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-primary hover:text-primary flex items-center justify-center text-neutral-400 hover:bg-neutral-900 transition duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://github.com/kushaljk11" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-primary hover:text-primary flex items-center justify-center text-neutral-400 hover:bg-neutral-900 transition duration-300"
                                aria-label="GitHub"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/kushal-jamarkattel-72639a330" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-primary hover:text-primary flex items-center justify-center text-neutral-400 hover:bg-neutral-900 transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.instagram.com/kushal_jamarkattel/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-primary hover:text-primary flex items-center justify-center text-neutral-400 hover:bg-neutral-900 transition duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation column */}
                    <div className="flex flex-col gap-4 text-left">
                        <h4 className="text-base font-semibold text-white uppercase tracking-wider">Navigation</h4>
                        <ul className="flex flex-col gap-2.5 text-sm text-neutral-400 font-medium">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/projects/ui-ux" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/projects/web-design" className="hover:text-primary transition-colors">Web Design</Link></li>
                            <li><Link to="/projects/landing-page" className="hover:text-primary transition-colors">Landing Page</Link></li>
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div className="flex flex-col gap-4 text-left">
                        <h4 className="text-base font-semibold text-white uppercase tracking-wider">Contact</h4>
                        <ul className="flex flex-col gap-2.5 text-sm text-neutral-400 font-medium">
                            <li className="hover:text-primary transition-colors cursor-pointer">
                                <a href="tel:+9779804060401" className="hover:text-primary transition-colors">+977 9804060401</a>
                            </li>
                            <li className="hover:text-primary transition-colors cursor-pointer">
                                <a href="mailto:kushalkattel0408@gmail.com" className="hover:text-primary transition-colors">kushalkattel0408@gmail.com</a>
                            </li>
                            <li className="hover:text-primary transition-colors cursor-pointer">
                                <a href="https://wa.me/9779804060401" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Chat</a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe column */}
                    <div className="flex flex-col gap-4 text-left">
                        <h4 className="text-base font-semibold text-white uppercase tracking-wider">Get the latest updates</h4>
                        
                        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-full p-1.5 flex items-center justify-between mt-1">
                            <input 
                                type="email" 
                                placeholder="Your Email..." 
                                className="bg-transparent border-none outline-none text-white placeholder-neutral-500 text-xs sm:text-sm pl-3 flex-grow focus:ring-0"
                            />
                            <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer flex-shrink-0 shadow-md">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800/80 text-xs text-neutral-500 font-medium">
                    <span>© Copyright 2026. All Rights Reserved.</span>
                    <div className="flex gap-6">
                        <span className="hover:text-neutral-400 cursor-pointer transition-colors">Terms of Use</span>
                        <span className="hover:text-neutral-400 cursor-pointer transition-colors">Privacy Policy</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}