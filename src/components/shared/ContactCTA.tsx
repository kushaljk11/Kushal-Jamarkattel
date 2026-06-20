import { useState } from "react";

export default function ContactCTA() {
    const [email, setEmail] = useState("");

    const handleSendMail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        window.location.href = `mailto:kushalkattel0408@gmail.com?subject=Awesome Project Idea&body=Hello Kushal,%0D%0A%0D%0AI have an awesome project idea and would love to discuss it with you.%0D%0A%0D%0AMy contact email: ${encodeURIComponent(email)}`;
    };

    return (
        <section id="contact" className="w-full bg-white text-black py-16 px-6 sm:px-12 flex flex-col items-center">
            
            {/* Project Idea Discussion Box */}
            <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center mb-16">
                
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111] leading-tight">
                    Have An Awesome Project <br />
                    Idea? <span className="text-primary font-semibold">Let's Discuss</span>
                </h2>

                {/* Email Input Capsule */}
                <form onSubmit={handleSendMail} className="w-full max-w-lg mt-10 bg-white border border-neutral-200 shadow-lg rounded-full p-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-3 pl-4 flex-grow">
                        {/* Orange dot / Mail icon */}
                        <div className="w-3.5 h-3.5 rounded-full bg-primary flex-shrink-0" />
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email Address..." 
                            className="bg-transparent border-none outline-none text-black placeholder-neutral-400 text-sm sm:text-base w-full focus:ring-0"
                        />
                    </div>
                    <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-[0_10px_25px_-5px_rgba(0,71,65,0.4)] hover:scale-105 active:scale-95 transition duration-300 cursor-pointer shadow-md">
                        Send Mail
                    </button>
                </form>

                {/* Benefit checklist items */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center mt-8 text-neutral-500 font-medium text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5">
                        <span className="text-primary font-bold">✔</span> Full Confidentiality
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-primary font-bold">✔</span> On-Time Delivery
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-primary font-bold">✔</span> Lifetime Support
                    </span>
                </div>

            </div>

            {/* Marquee Banner Ticker */}
            <div className="w-full bg-primary text-white py-5 overflow-hidden select-none relative z-10 -mx-6 sm:-mx-12 border-y border-white/10">
                <div className="flex whitespace-nowrap gap-12 animate-marquee w-max">
                    {/* Ticker Content Row */}
                    <div className="flex gap-12 text-lg sm:text-xl uppercase font-semibold tracking-wider">
                        <span>Design ✦ App Design ✦ Dashboard ✦ Wireframes ✦ User Flow</span>
                        <span>Design ✦ App Design ✦ Dashboard ✦ Wireframes ✦ User Flow</span>
                        <span>Design ✦ App Design ✦ Dashboard ✦ Wireframes ✦ User Flow</span>
                        <span>Design ✦ App Design ✦ Dashboard ✦ Wireframes ✦ User Flow</span>
                    </div>
                </div>
            </div>

        </section>
    );
}
