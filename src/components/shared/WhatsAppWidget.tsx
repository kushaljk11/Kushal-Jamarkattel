import { useState } from "react";
import jkImg from "../../assets/jk.png";

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, sender: "bot", text: "Hey there! I am Kushal's assistant. 👋" },
        { id: 2, sender: "bot", text: "What project are we discussing today? Write a message and hit Send to chat directly on my WhatsApp!" }
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        const userMsg = message.trim();
        
        // Add user message to local chat view
        setMessages(prev => [...prev, { id: Date.now(), sender: "user", text: userMsg }]);
        setMessage("");

        // Show bot acknowledgment
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: "bot", text: "Redirecting you to WhatsApp..." }]);
            
            // Open WhatsApp link in new window/tab
            const whatsappUrl = `https://wa.me/9779804060401?text=${encodeURIComponent(userMsg)}`;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            {/* Chat Box Popup */}
            {isOpen && (
                <div className="w-[320px] sm:w-[360px] bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col mb-4 transition-all duration-300 transform scale-100 origin-bottom-right">
                    
                    {/* Header */}
                    <div className="bg-[#075e54] text-white p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="relative w-10 h-10 rounded-full bg-neutral-200 border border-white/20 overflow-hidden flex items-end justify-center">
                                <img src={jkImg} alt="Kushal" className="w-full h-full object-cover object-top" />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border border-[#075e54]" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-semibold text-sm">Kushal Jamarkattel</span>
                                <span className="text-[11px] text-white/80">Online • Live Chat</span>
                            </div>
                        </div>
                        
                        {/* Close button */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-grow h-64 overflow-y-auto p-4 bg-[#efeae2] flex flex-col gap-3">
                        {messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-xs leading-relaxed text-left ${
                                    msg.sender === "user" 
                                        ? "bg-[#d9fdd3] text-neutral-800 self-end rounded-tr-none" 
                                        : "bg-white text-neutral-800 self-start rounded-tl-none"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Message Input Form */}
                    <form onSubmit={handleSendMessage} className="p-3 border-t border-neutral-100 flex items-center gap-2 bg-neutral-50">
                        <input 
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            required
                            className="flex-grow bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm outline-none focus:border-[#075e54] text-black"
                        />
                        <button 
                            type="submit"
                            className="w-9 h-9 rounded-full bg-[#075e54] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition cursor-pointer flex-shrink-0"
                        >
                            <svg className="w-4.5 h-4.5 fill-current rotate-90 transform translate-x-[1px]" viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Trigger Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition duration-300 hover:scale-110 active:scale-90 cursor-pointer ${
                    isOpen ? "bg-red-500" : "bg-[#25D366] hover:bg-[#20ba5a]"
                }`}
                aria-label="Contact on WhatsApp"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M12.012 1.987a9.98 9.98 0 00-7.067 2.923 9.98 9.98 0 00-2.92 7.07 9.92 9.92 0 001.442 5.127L2 22l5.068-1.312c1.554.85 3.292 1.298 5.065 1.3H12.1a10.02 10.02 0 007.072-2.922 10.02 10.02 0 002.916-7.08A9.97 9.97 0 0012.012 1.987zm4.982 12.355c-.273.136-1.62.8-1.872.892-.252.093-.437.139-.62.416-.184.277-.71 1.1-.87 1.285-.16.185-.32.208-.593.072-.273-.136-1.155-.426-2.2-1.358-.813-.726-1.362-1.623-1.522-1.9-.16-.277-.017-.426.12-.562.122-.122.272-.32.408-.479.136-.16.182-.275.273-.459.09-.184.045-.345-.023-.483-.068-.139-.62-1.493-.848-2.046-.223-.538-.448-.465-.62-.472-.16-.008-.344-.008-.527-.008-.183 0-.48.07-.732.346-.252.277-.962.942-.962 2.298s.985 2.667 1.122 2.852c.137.185 1.938 2.96 4.696 4.148 2.758 1.188 2.758.792 3.256.746.498-.046 1.62-.663 1.849-1.303.229-.64.229-1.188.16-1.302-.07-.115-.252-.185-.525-.321z"/>
                    </svg>
                )}
            </button>
        </div>
    );
}
