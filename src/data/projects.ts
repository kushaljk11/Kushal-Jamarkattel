import easykotha from "../assets/easykotha.png";
import divinegym from "../assets/divinegym.png";
import baadfaad from "../assets/baadfaad.png";
import gonepali from "../assets/gonepali.png";
import gymudaan from "../assets/gymudaan.png";
import client from "../assets/client.png";

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    url: string;
    category: "ui-ux" | "web-design" | "landing-page";
}

export const projectsData: Project[] = [
    {
        id: "easykotha",
        title: "EasyKotha - Room & Flat Rental Finder",
        description: "A modern, map-integrated room and flat rental platform designed to help users find premium living spaces easily across Nepal.",
        tags: ["Web Design", "UI/UX Design", "Real Estate"],
        image: easykotha,
        url: "https://easykotha.vercel.app/",
        category: "web-design"
    },
    {
        id: "divinegym",
        title: "Divine Gym - Ultimate Fitness Hub",
        description: "A comprehensive gym membership management and workout planner featuring attendance tracking, diet charts, and trainer communication.",
        tags: ["App Design", "Fitness UI", "SaaS Dashboard"],
        image: divinegym,
        url: "https://divinegym.netlify.app/",
        category: "ui-ux"
    },
    {
        id: "baadfaad",
        title: "BaadFaad - Interactive Debate Platform",
        description: "A community-driven online debate platform where users engage in video and text debates, vote on topics, and follow discussions.",
        tags: ["UI/UX Design", "Web Application", "Community"],
        image: baadfaad,
        url: "https://baadfaad.vercel.app/",
        category: "landing-page"
    },
    {
        id: "gonepali",
        title: "GoNepali - Nepal Tourism Platform",
        description: "A clean, visual-rich tourism and trekking booking directory that showcases Nepalese hospitality, destinations, and cultural spots.",
        tags: ["Web Design", "Travel & Tourism", "UI/UX Design"],
        image: gonepali,
        url: "https://gonepali.com/",
        category: "web-design"
    },
    {
        id: "gymudaan",
        title: "GymUdaan - Workout & Tracker App",
        description: "An interactive mobile-friendly web dashboard for tracking progress, routines, diet, and gym bookings on the fly.",
        tags: ["Dashboard", "User Experience", "App Design"],
        image: gymudaan,
        url: "https://www.gymudaan.com/",
        category: "ui-ux"
    },
    {
        id: "client",
        title: "Client Management - SaaS Portal",
        description: "A robust client relationship management (CRM) console highlighting billing cycles, onboarding progress, and active user analytics.",
        tags: ["SaaS Console", "Dashboard", "Data Analytics"],
        image: client,
        url: "https://clientmtrack.com/",
        category: "landing-page"
    }
];
