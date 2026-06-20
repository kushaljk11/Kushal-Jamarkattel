import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import WhatsAppWidget from "./components/shared/WhatsAppWidget";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-secondary text-black">
      <Navbar />
      <main className="w-full overflow-hidden">
        {children}
      </main>
      <WhatsAppWidget />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout children={<Home />} />} />
        <Route path="/projects" element={<MainLayout children={<Projects />} />} />
        <Route path="/projects/:category" element={<MainLayout children={<Projects />} />} />
      </Routes>
    </Router>
  );
}

export default App;