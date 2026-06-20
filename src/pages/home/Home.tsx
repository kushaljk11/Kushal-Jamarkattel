import Hero from "../../components/shared/Hero";
import Services from "../../components/shared/Services";
import Experience from "../../components/shared/Experience";
import WhyHireMe from "../../components/shared/WhyHireMe";
import Portfolio from "../../components/shared/Portfolio";
import Testimonials from "../../components/shared/Testimonials";
import ContactCTA from "../../components/shared/ContactCTA";
import Blog from "../../components/shared/Blog";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Experience />
            <WhyHireMe />
            <Portfolio />
            <Testimonials />
            <ContactCTA />
            <Blog />
        </>
    );
}