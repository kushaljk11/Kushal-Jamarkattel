import { useParams, Link } from "react-router-dom";
import { projectsData } from "../../data/projects";

const categoryTitles: Record<string, { title: string; description: string }> = {
    "ui-ux": {
        title: "UI/UX Design Projects",
        description: "Designing simple, beautiful, and intuitive interfaces with a focus on user experience."
    },
    "web-design": {
        title: "Web Design Projects",
        description: "Creating modern, responsive, and performance-optimized layouts for websites."
    },
    "landing-page": {
        title: "Landing Page Projects",
        description: "High-converting layouts built with modern standards and strong calls-to-action."
    }
};

export default function Projects() {
    const { category } = useParams<{ category: string }>();
    
    // Filter projects based on category if one is passed, otherwise show all
    const filteredProjects = category 
        ? projectsData.filter(proj => proj.category === category)
        : projectsData;

    const currentTitle = category && categoryTitles[category]
        ? categoryTitles[category].title
        : "My Portfolio Projects";

    const currentDescription = category && categoryTitles[category]
        ? categoryTitles[category].description
        : "A showcase of my recent design and development work across all fields.";

    return (
        <div className="min-h-screen bg-black text-white py-16 px-6 sm:px-12 md:py-24">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Back Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 group transition-colors duration-300"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <span>Back to Home</span>
                </Link>

                {/* Header Area */}
                <div className="mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                        {currentTitle.split(" ").slice(0, -1).join(" ")} <span className="text-primary font-semibold">{currentTitle.split(" ").slice(-1)[0]}</span>
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                        {currentDescription}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((proj) => (
                        <div 
                            key={proj.id} 
                            className="bg-[#1c1c1e] border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Project Visual Image */}
                            <div className="w-full h-48 rounded-2xl border border-neutral-850 overflow-hidden relative group bg-neutral-900 flex items-center justify-center shadow-md">
                                <img 
                                    src={proj.image} 
                                    alt={proj.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                                />
                                {/* Hover visit overlay */}
                                <a 
                                    href={proj.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 transition-opacity duration-300 text-white cursor-pointer z-10"
                                >
                                    <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm">↗</span>
                                    <span className="text-xs uppercase font-semibold tracking-wider">Visit Website</span>
                                </a>
                            </div>

                            {/* Details */}
                            <div className="mt-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <a 
                                        href={proj.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xl font-bold font-sans text-white hover:text-primary transition-colors duration-300 block"
                                    >
                                        {proj.title}
                                    </a>
                                    <p className="text-neutral-400 text-sm mt-2 leading-relaxed min-h-12">
                                        {proj.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {proj.tags.map((tag, idx) => (
                                        <span 
                                            key={idx} 
                                            className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-400 uppercase rounded-full tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
