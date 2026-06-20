import jkImg from "../../assets/jk.png";

export default function Hero() {
    return (
        <section id="home" className="relative w-full bg-secondary text-black py-12 overflow-hidden min-h-[calc(100vh-110px)] flex flex-col justify-between">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center grow">

                {/* Hello! Badge */}
                <div className="px-5 py-1.5 border border-black/30 rounded-full text-sm font-semibold bg-white shadow-sm select-none">
                    Hello
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-center mt-4 text-[#111] leading-tight font-sans">
                    I'm <span className="text-primary font-semibold">Kushal,</span>
                    <br />
                    Product Maker
                </h1>

                {/* Layout Container */}
                <div className="w-full flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12 mt-12 relative grow">

                    {/* Left Column (Quote & Clients) */}
                    <div className="flex flex-col justify-between gap-4 md:w-1/4 items-center md:items-start text-center md:text-left order-2 md:order-1 py-4">
                        <div className="flex flex-col max-w-62.5 relative">
                            <span className="text-4xl font-serif text-black leading-none select-none">““</span>
                            <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                                Kushal is highly recommended for his exceptional expertise in UI/UX design, graphic design, and software development.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-3xl font-semibold text-black tracking-tight">50+</span>
                            <span className="text-xs text-black/50 tracking-wider font-semibold uppercase mt-0.5">Client Served</span>
                        </div>
                    </div>

                    {/* Center Column (Orange Half Circle + Portrait Image + Buttons) */}
                    <div className="relative flex flex-col items-center justify-end md:w-2/4 order-1 md:order-2 pt-16 min-h-50 sm:min-h-62.5 md:min-h-75">
                        {/* Half Circle */}
                        <div className="relative w-70 h-35 sm:w-87.5 sm:h-43.75 md:w-105 md:h-52.5 rounded-t-full bg-primary flex items-end justify-center shadow-lg">
                            {/* jk.png Portrait Image positioned inside the circle */}
                            <img
                                src={jkImg}
                                alt="Kushal Jamarkattel Portrait"
                                className="absolute bottom-[-16%] left-1/2 -translate-x-[56%] w-auto h-[230%] object-contain z-10 select-none pointer-events-none origin-bottom"
                            />
                        </div>

                        {/* Action buttons capsule overlapping the bottom */}
                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white rounded-full p-1.5 border border-black/5 flex items-center gap-1.5 z-20 shadow-xl w-max">
                            <a 
                                href="https://www.linkedin.com/in/kushal-jamarkattel-72639a330" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-1 sm:gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-[0_10px_25px_-5px_rgba(0,71,65,0.5)] hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
                            >
                                Profile ↗
                            </a>
                            <a 
                                href="https://wa.me/9779804060401" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm sm:text-base hover:bg-black/5 transition duration-300 cursor-pointer"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>

                    {/* Right Column (Rating & Experience) */}
                    <div className="flex flex-col justify-between gap-10 md:w-1/4 items-center md:items-end text-center md:text-right order-3 md:order-3 py-4">
                        <div className="flex flex-col items-center md:items-end border-b-2 border-black/10 pb-2 w-32">
                            <div className="flex flex-col gap-2 items-center md:items-end">
                                <div className="flex items-center gap-0.5 text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <span className="text-3xl font-semibold text-black">
                                <span className="underline decoration-primary decoration-2">2</span> Years
                            </span>
                            <span className="text-xs text-black/50 tracking-wider font-semibold uppercase mt-0.5">Experience</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}