export default function Experience() {
    const experiences = [
        {
            company: "Bardali Creations",
            period: "Sep 2020 - July 2024",
            role: "Graphic Designer",
            desc: "Created visually stunning brand assets, social graphics, and marketing designs. Collaborated with core creative teams to produce high-impact vector artwork, print layouts, and digital illustrations."
        },
        {
            company: "Neparica Inc",
            period: "July 2018 - Sep 2020",
            role: "Full Stack Developer",
            desc: "Architected modern web apps using React, Node.js, and TypeScript. Handled server hosting, API integrations, data schemas, and state management solutions to ensure high availability and responsiveness."
        },
        {
            company: "Udaan Tech Solution",
            period: "Sep 2015 - June 2018",
            role: "UI/UX Developer",
            desc: "Designed user-centric wireframes, user journeys, and interactive prototypes. Translated visual mockups into clean, semantic frontend code, focusing on fluid micro-animations and responsiveness."
        }
    ];

    return (
        <section id="resume" className="w-full bg-white text-black py-16 px-6 sm:px-12">
            <div className="max-w-4xl mx-auto w-full">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#111] tracking-tight">
                    My Work Experience
                </h2>

                {/* Timeline Container */}
                <div className="relative flex flex-col gap-12 md:gap-0">

                    {/* Vertical line for desktop (centered) */}
                    <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1.5px] bg-neutral-200 -translate-x-1/2 z-0" />

                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative flex flex-col md:flex-row md:items-start justify-between w-full md:py-8 z-10">

                            {/* Company Name & Date */}
                            <div className="pl-10 md:pl-0 md:w-[45%] md:text-right flex flex-col gap-1 pr-0 md:pr-12">
                                <h3 className="text-lg font-semibold text-black">{exp.company}</h3>
                                <span className="text-sm text-neutral-500 font-medium">{exp.period}</span>
                            </div>

                            {/* Timeline Node Marker */}
                            <div className="absolute left-4 md:left-1/2 top-1.5 md:top-8 w-8 h-8 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center -translate-x-1/2 shadow-sm z-20">
                                <div className="w-3.5 h-3.5 rounded-full bg-primary" />
                            </div>

                            {/* Role Title & Description */}
                            <div className="pl-10 md:pl-12 md:w-[45%] flex flex-col gap-2">
                                <h4 className="text-lg font-semibold text-black">{exp.role}</h4>
                                <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
                                    {exp.desc}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
