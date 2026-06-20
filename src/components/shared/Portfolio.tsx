import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData as slides } from "../../data/projects";

export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const activeSlide = slides[activeIndex];
    const nextSlide = slides[(activeIndex + 1) % slides.length];

    return (
        <section id="projects" className="w-full bg-[#f6f6f6] text-black py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111]">
                        Let's Have a Look at <br />
                        my <span className="text-primary font-semibold">Portfolio</span>
                    </h2>

                    <Link
                        to="/projects"
                        className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-[0_10px_25px_-5px_rgba(0,71,65,0.4)] hover:scale-105 transition duration-300 flex items-center gap-1 shadow-sm cursor-pointer text-sm sm:text-base"
                    >
                        See More ↗
                    </Link>
                </div>

                {/* Slider Container */}
                <div className="relative w-full px-4 sm:px-6">

                    {/* Grid of visible cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">

                        {/* Active Slide (Left) */}
                        <div className="bg-[#f4f4f6] rounded-4xl p-0 border-white border-8 flex items-center justify-center overflow-hidden w-full aspect-video transition-all duration-500 hover:shadow-lg relative group">
                            <img
                                src={activeSlide.image}
                                alt={activeSlide.title}
                                className="w-full h-full object-cover object-top select-none pointer-events-none transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            {/* Visit Website Overlay */}
                            <a
                                href={activeSlide.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white z-20 cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    ↗
                                </div>
                                <span className="font-semibold text-sm tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Visit Website
                                </span>
                            </a>
                        </div>

                        {/* Next Slide (Right) - Shows side-by-side on desktop */}
                        <div className="hidden md:flex bg-[#f4f4f6] rounded-4xl p-0 border-8 border-white flex-col justify-center items-center overflow-hidden w-full aspect-video transition-all duration-500 hover:shadow-lg relative group">
                            <img
                                src={nextSlide.image}
                                alt={nextSlide.title}
                                className="w-full h-full object-cover object-top select-none pointer-events-none transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            {/* Visit Website Overlay */}
                            <a
                                href={nextSlide.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white z-20 cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    ↗
                                </div>
                                <span className="font-semibold text-sm tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    Visit Website
                                </span>
                            </a>
                        </div>

                    </div>

                    {/* Navigation Slider controls */}
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[-16px] sm:left-[-12px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg border border-white/5 hover:bg-black transition-all z-20 cursor-pointer hover:scale-105 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-[-16px] sm:right-[-12px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-[0_4px_15px_rgba(0,71,65,0.4)] transition-all z-20 cursor-pointer hover:scale-105 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>

                {/* Lower Detail Section (Dynamic based on active slide) */}
                <div className="mt-12 max-w-2xl mx-auto flex flex-col items-center text-center">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2.5 items-center justify-center">
                        {activeSlide.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`px-4 py-1 text-xs font-semibold rounded-full uppercase tracking-wider ${idx === 0
                                    ? "bg-primary/10 text-primary border border-primary/20"
                                    : "bg-neutral-100 text-neutral-600 border border-neutral-200"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title with link */}
                    <Link
                        to={`/projects/${activeSlide.id}`}
                        className="mt-6 inline-flex items-center gap-2 group cursor-pointer"
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-black group-hover:text-primary transition-colors duration-300">
                            {activeSlide.title}
                        </h3>
                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm select-none transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                            ↗
                        </div>
                    </Link>

                    {/* Description */}
                    <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                        {activeSlide.description}
                    </p>
                </div>

            </div>
        </section>
    );
}
