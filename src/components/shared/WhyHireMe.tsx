import img from "../../assets/jk.png";

export default function WhyHireMe() {
    return (
        <section id="about" className="w-full bg-white text-black py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto bg-neutral-50 rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm border border-neutral-100/50">

                {/* Left Side: Avatar Graphic */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
                    {/* Patterned orange circle background */}
                    <div className="absolute inset-0 rounded-full bg-primary overflow-hidden flex items-end justify-center">
                        {/* Decorative dotted pattern overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                        {/* Person portrait cutout */}
                        <img
                            src={img}
                            alt="Kushal Portrait"
                            className="w-[85%] h-[95%] object-contain select-none pointer-events-none z-10 bottom-0"
                        />
                    </div>
                </div>

                {/* Right Side: Copy & Stats */}
                <div className="flex-grow flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111] leading-tight">
                        Why You <span className="text-primary font-semibold">Hire Me</span> for Your Next Projects?
                    </h2>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 w-full border-t border-neutral-200/60 pt-6 mt-2">
                        <div className="flex flex-col gap-1 items-center lg:items-start">
                            <span className="text-3xl font-semibold text-black">500+</span>
                            <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Project Completed</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center lg:items-start">
                            <span className="text-3xl font-semibold text-black">250+</span>
                            <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Happy Client</span>
                        </div>
                    </div>

                    {/* Button */}
                    <a
                        href="https://wa.me/9779804060401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-8 py-3 bg-white text-black border border-neutral-300 hover:border-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300 shadow-sm cursor-pointer inline-block"
                    >
                        Hire Me
                    </a>
                </div>

            </div>
        </section>
    );
}
