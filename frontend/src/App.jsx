import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useKonamiCode from './hooks/useKonamiCode';


import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Eye Health Guide", path: "/guide" },
  ];

  return (
    <>
      <nav className={`absolute top-6 left-1/2 -translate-x-1/2 z-[60] w-[95%] md:w-auto px-6 md:px-12 py-3 md:py-4 min-h-[70px] md:min-h-[90px] rounded-[2rem] md:rounded-[4rem] transition-all duration-500 flex items-center justify-between gap-4 md:gap-20 ${isHome && !isOpen
        ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
        : "bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_12px_48px_0_rgba(0,0,0,0.3)]"
        }`}>

        <Link to="/" className="flex items-center group flex-shrink-0" onClick={() => setIsOpen(false)}>
          <img
            src="/logo.png"
            alt="Vimala Eye Hospital Logo"
            style={{ width: '180px', minWidth: '180px', maxWidth: 'none', height: 'auto' }}
            className={`object-contain transition-transform group-hover:scale-105 ${(isHome && !isOpen) ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-12 text-base font-bold uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-500 ${isHome && !isOpen ? "text-white" : "text-slate-900"
          }`}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-primary transition-colors shrink-0">{link.name}</Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${isHome && !isOpen ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100"
            }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform ${isOpen ? "translate-y-0" : "-translate-y-10"}`}>
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold uppercase tracking-widest text-slate-900 hover:text-primary transition-colors ${location.pathname === link.path ? "text-primary" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="pt-0">
      <Navbar />
      <div className={isHome ? "pt-0" : "pt-32 md:pt-64"}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/guide" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const [isRainbow, setIsRainbow] = useState(false);

  const handleKonamiSuccess = useCallback(() => {
    setIsRainbow(prev => !prev);
  }, []);

  useKonamiCode(handleKonamiSuccess);

  return (
    <Router>
      <ScrollToTop />
      <div className={isRainbow ? "rainbow-mode" : ""}>
        <MainLayout />
        {isRainbow && (

          <div className="fixed inset-0 pointer-events-none z-[9999] opacity-20 bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 animate-pulse" />
        )}
      </div>
    </Router>
  );
}

export default App;
