import { Link } from "react-router-dom";

export default function Services() {
    const categories = [
        {
            id: "ui-ux",
            title: "UI/UX Design",
            theme: "dark",
            bgColor: "bg-[#1c1c1e] text-white",
            btnColor: "bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white",
            mockups: (
                <div className="relative w-full h-[220px] mt-6 flex items-end justify-center">
                    {/* Back card */}
                    <div className="absolute bottom-6 w-[70%] h-37.5 bg-neutral-800/40 border border-neutral-700/40 rounded-t-2xl opacity-40 scale-90 origin-bottom shadow-sm" />
                    {/* Middle card */}
                    <div className="absolute bottom-3 w-[80%] h-41.25 bg-neutral-800/80 border border-neutral-700/80 rounded-t-2xl opacity-75 scale-95 origin-bottom shadow-md" />
                    {/* Front card (Mobile Phone mockup) */}
                    <div className="absolute bottom-0 w-[88%] h-[180px] bg-[#0c0c0e] border-4 border-neutral-800 rounded-t-2xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Speaker & camera notch */}
                        <div className="w-20 h-3 bg-neutral-800 rounded-b-md mx-auto z-10 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-neutral-900" />
                        </div>
                        {/* Status bar */}
                        <div className="px-3 py-1 flex justify-between text-[7px] text-neutral-500 font-sans font-bold">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <span>📶</span>
                                <span>🔋</span>
                            </div>
                        </div>
                        {/* Screen Content */}
                        <div className="p-3 flex-grow flex flex-col gap-2 bg-[#121214] text-white">
                            <div className="w-1/2 h-2.5 bg-primary rounded" />
                            <div className="w-full h-1 bg-neutral-800 rounded" />
                            <div className="w-2/3 h-1 bg-neutral-800 rounded" />
                            {/* Inner mockup widgets */}
                            <div className="grid grid-cols-2 gap-1.5 mt-1">
                                <div className="p-1.5 rounded bg-neutral-900 border border-neutral-800 flex flex-col gap-1">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[8px]">📱</div>
                                    <div className="w-2/3 h-1.5 bg-neutral-700 rounded" />
                                </div>
                                <div className="p-1.5 rounded bg-neutral-900 border border-neutral-800 flex flex-col gap-1">
                                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[8px]">🎨</div>
                                    <div className="w-2/3 h-1.5 bg-neutral-700 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "web-design",
            title: "Web Design",
            theme: "primary",
            bgColor: "bg-primary text-white",
            btnColor: "bg-white text-primary hover:bg-neutral-100",
            mockups: (
                <div className="relative w-full h-55 mt-6 flex items-end justify-center">
                    {/* Back card */}
                    <div className="absolute bottom-6 w-[70%] h-37.5 bg-white/10 border border-white/10 rounded-t-xl opacity-40 scale-90 origin-bottom shadow-sm" />
                    {/* Middle card */}
                    <div className="absolute bottom-3 w-[80%] h-41.25 bg-white/20 border border-white/20 rounded-t-xl opacity-75 scale-95 origin-bottom shadow-md" />
                    {/* Front card (Browser mockup) */}
                    <div className="absolute bottom-0 w-[88%] h-45 bg-white text-black border border-neutral-200 rounded-t-xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Browser header */}
                        <div className="h-4 bg-neutral-100 border-b border-neutral-200 px-2 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        </div>
                        {/* Web Content */}
                        <div className="p-2.5 grow bg-neutral-50 flex flex-col gap-1.5 text-left">
                            <div className="flex justify-between items-center pb-1 border-b border-neutral-200">
                                <div className="w-8 h-2 bg-primary rounded" />
                                <div className="flex gap-1.5">
                                    <div className="w-4 h-1 bg-neutral-400 rounded" />
                                    <div className="w-4 h-1 bg-neutral-400 rounded" />
                                </div>
                            </div>
                            {/* Hero banner layout */}
                            <div className="p-2 rounded bg-white border border-neutral-200 shadow-sm flex flex-col gap-1 mt-0.5">
                                <div className="w-1/2 h-2 bg-neutral-800 rounded" />
                                <div className="w-2/3 h-1 bg-neutral-500 rounded" />
                                <div className="w-8 h-2.5 bg-primary rounded mt-1" />
                            </div>
                            <div className="grid grid-cols-3 gap-1 mt-0.5">
                                <div className="h-6 rounded bg-neutral-100" />
                                <div className="h-6 rounded bg-neutral-100" />
                                <div className="h-6 rounded bg-neutral-100" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "landing-page",
            title: "Landing Page",
            theme: "dark",
            bgColor: "bg-[#1c1c1e] text-white",
            btnColor: "bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white",
            mockups: (
                <div className="relative w-full h-55 mt-6 flex items-end justify-center">
                    {/* Back card */}
                    <div className="absolute bottom-6 w-[70%] h-37.5 bg-neutral-800/40 border border-neutral-700/40 rounded-t-xl opacity-40 scale-90 origin-bottom shadow-sm" />
                    {/* Middle card */}
                    <div className="absolute bottom-3 w-[80%] h-41.25 bg-neutral-800/80 border border-neutral-700/80 rounded-t-xl opacity-75 scale-95 origin-bottom shadow-md" />
                    {/* Front card (Landing page browser mockup) */}
                    <div className="absolute bottom-0 w-[88%] h-45 bg-[#0c0c0e] border border-neutral-800 rounded-t-xl shadow-2xl overflow-hidden flex flex-col">
                        {/* Browser header */}
                        <div className="h-4 bg-[#18181b] border-b border-neutral-800 px-2 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        </div>
                        {/* Content */}
                        <div className="p-2.5 grow bg-[#121214] flex flex-col gap-2 text-left">
                            <div className="flex justify-between items-center pb-1">
                                <div className="w-10 h-2 bg-neutral-700 rounded" />
                                <div className="w-6 h-3.5 bg-primary rounded-full" />
                            </div>
                            {/* Big heading layout */}
                            <div className="flex flex-col gap-1 items-center py-2 text-center">
                                <div className="w-2/3 h-2 bg-white rounded" />
                                <div className="w-1/2 h-1 bg-neutral-600 rounded" />
                                <div className="w-12 h-3.5 bg-primary rounded mt-1.5" />
                            </div>
                            {/* Grid of features */}
                            <div className="grid grid-cols-2 gap-1 mt-0.5">
                                <div className="h-5 rounded bg-neutral-900 border border-neutral-800" />
                                <div className="h-5 rounded bg-neutral-900 border border-neutral-800" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="services" className="w-full bg-[#121214] text-white py-16 px-6 sm:px-12 md:py-24">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800 mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        My <span className="text-primary bg-secondary py-1 px-2 font-extrabold"> Services</span>
                    </h2>
                    <p className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed">
                        Explore our design and development offerings. Click on any category to view our complete portfolio of related work.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className={`group relative rounded-3xl p-6 overflow-hidden flex flex-col justify-between ${cat.bgColor} min-h-95 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                        >
                            {/* Title */}
                            <h3 className="text-2xl font-bold font-sans tracking-tight pt-2 z-10">
                                {cat.title}
                            </h3>

                            {/* Render Mockups */}
                            <div className="grow flex items-end justify-center select-none">
                                {cat.mockups}
                            </div>

                            {/* Arrow Button at bottom right */}
                            <Link
                                to={`/projects/${cat.id}`}
                                className={`absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md z-30 ${cat.btnColor}`}
                            >
                                <svg
                                    className="w-6 h-6 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
