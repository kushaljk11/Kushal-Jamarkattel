export default function Testimonials() {
    const reviews = [
        {
            name: "Dilli Phuyal",
            role: "Director of IT",
            rating: 5,
            quote: "Kushal's exceptional design expertise and frontend development workflow are absolutely top-tier. He transformed our complex product idea into a beautiful, fluid, and conversion-optimized application."
        },
        {
            name: "Basanta Ghimire",
            role: "CEO of Bardali Creation",
            rating: 5,
            quote: "Highly recommended! Kushal is highly professional, communicates extremely well, and delivers pixel-perfect layouts. Our customer engagement metrics improved by 40% after launching the new site."
        }
    ];

    return (
        <section className="w-full bg-[#121214] text-white py-16 px-6 sm:px-12 md:py-24">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Area */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    {/* Handwritten style spark decoration */}
                    <div className="relative inline-block mb-3">
                        <span className="text-3xl tracking-wide font-sans text-neutral-400">Feedback</span>
                        <svg className="absolute -top-3 -right-6 w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M4 18L7 15" strokeLinecap="round" />
                            <path d="M12 20L12 16" strokeLinecap="round" />
                            <path d="M20 18L17 15" strokeLinecap="round" />
                        </svg>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                        Testimonials that <br />
                        Speak to <span className="text-primary bg-secondary py-1 px-2 font-semibold">My Results</span>
                    </h2>

                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {reviews.map((rev, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1c1c1e] border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-primary/20 transition-all duration-300 min-h-[260px]"
                        >
                            {/* Stars & Text */}
                            <div className="flex flex-col gap-4">
                                {/* Stars */}
                                <div className="flex items-center gap-0.5 text-primary">
                                    {[...Array(rev.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed pr-6">
                                    "{rev.quote}"
                                </p>
                            </div>

                            {/* User details */}
                            <div className="mt-8 flex items-center justify-between border-t border-neutral-800/80 pt-4">
                                <div className="flex items-center gap-3">
                                    {/* Circular profile avatar */}
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm font-sans">
                                        {rev.name[0]}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-white font-semibold text-sm sm:text-base">{rev.name}</span>
                                        <span className="text-neutral-500 font-medium text-xs uppercase tracking-wider">{rev.role}</span>
                                    </div>
                                </div>

                                {/* Background double quotes decoration */}
                                <span className="text-5xl text-neutral-800/40 font-serif leading-none select-none h-8">”</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Indicators & Buttons */}
                <div className="flex items-center justify-center gap-4 mt-6">
                    {/* Left Button */}
                    <button className="w-10 h-10 rounded-full bg-[#1c1c1e] text-white flex items-center justify-center border border-neutral-800 hover:bg-neutral-800 transition duration-300 cursor-pointer shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    {/* Right Button */}
                    <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:shadow-[0_4px_15px_rgba(0,71,65,0.4)] transition-all duration-300 cursor-pointer shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
