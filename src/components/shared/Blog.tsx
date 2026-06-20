export default function Blog() {
    const posts = [
        {
            id: 1,
            category: "UI/UX Design",
            title: "Down Unveiled: Behind the Scenes of UI/UX Designs",
            author: "Jenny Smith",
            date: "22 July 2024",
            btnTheme: "dark",
            btnColor: "bg-[#1c1c1e] text-white hover:bg-black",
            gradient: "from-blue-500/10 to-indigo-500/10",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "Development",
            title: "Modern Avoidance: Operating Codebases at Scale",
            author: "Jenny Smith",
            date: "22 July 2024",
            btnTheme: "primary",
            btnColor: "bg-primary text-white hover:shadow-[0_4px_15px_rgba(0,71,65,0.4)]",
            gradient: "from-primary/10 to-orange-500/10",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "Design",
            title: "Production Models: Visual Guide to UI Layouts",
            author: "Jenny Smith",
            date: "22 July 2024",
            btnTheme: "dark",
            btnColor: "bg-[#1c1c1e] text-white hover:bg-black",
            gradient: "from-emerald-500/10 to-teal-500/10",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlTEXVCs9mNfTSLyC904Km4z6f0Zgbfu3Sg&s"
        }
    ];

    return (
        <section className="w-full bg-white text-black py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111]">
                        From my <br />
                        blog post
                    </h2>

                    <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:shadow-[0_10px_25px_-5px_rgba(0,71,65,0.4)] hover:scale-105 transition duration-300 flex items-center gap-1 shadow-sm cursor-pointer text-sm sm:text-base">
                        View All ↗
                    </button>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white border border-neutral-100 shadow-md rounded-[2rem] p-5 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 min-h-[420px]"
                        >
                            {/* Visual Post cover */}
                            <div className="w-full h-48 rounded-2xl overflow-hidden relative border border-neutral-200/50 bg-neutral-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Details Container */}
                            <div className="mt-5 flex-grow flex flex-col justify-between relative">
                                <div className="flex flex-col gap-2">
                                    {/* Category tag */}
                                    <span className="text-primary font-semibold text-xs uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-black leading-snug group-hover:text-primary transition-colors duration-300 pr-6">
                                        {post.title}
                                    </h3>
                                </div>

                                {/* Author & Arrow at bottom */}
                                <div className="mt-6 flex items-end justify-between border-t border-neutral-100 pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-neutral-500 font-medium">{post.author}</span>
                                        <span className="text-xs text-neutral-400 font-medium">{post.date}</span>
                                    </div>

                                    {/* Action Arrow Button */}
                                    <button className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition duration-300 cursor-pointer ${post.btnColor}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
