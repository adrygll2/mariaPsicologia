import React, { useState, useEffect } from 'react';
import { Menu, Heart, Phone } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { BlogPage } from './pages/BlogPage';
import { Services } from './pages/Services';
//import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { MessageCircle } from 'lucide-react';


function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Ocultar al hacer scroll hacia abajo
      } else {
        setIsVisible(true);  // Mostrar al hacer scroll hacia arriba
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 bg-white shadow-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Barra superior con información de contacto */}
      <div style={{ backgroundColor: "#FFFDF8"}} className="w-full py-2">
        <div className="container mx-auto flex items-center justify-center space-x-2">
          <span className="text-sm pr-4">Llámanos y te informamos</span>
          <Phone className="w-5 h-5 text-teal-600" />
          <span className="text-base font-semibold text-lg">+34 641 431 426</span>
        </div>
      </div>

      <div style={{ backgroundColor: "#FFFDF8"}} className="w-full py-0.9">
        <nav className="container mx-auto px-5 sm:px-6 lg:px-8 pb-3">
        
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <img src="/resources/img/MainHeaderLogo.png" alt="MainHeaderLogo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold">Inicio</Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold">Sobre mí</Link>
              <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold">Sevicios</Link>
              <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors font-semibold">Contacto</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-teal-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    isHomePage && (
      <div className="relative w-full h-[700px] md:h-[800px] lg:h-[700px] xl:h-[800px]">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/resources/vid/6174826-hd_1366_720_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Sombreado */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 h-full"></div>

        {/* Contenido */}
        <div className="absolute top-0 left-0 h-full flex items-center w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                María Flores Psicología
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Servicios de Psicoterapia y Formación ONLINE
              </p>
              <a
                href="https://wa.me/34641431426?text=Hola,%20me%20gustaría%20obtener%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consúltame si necesitas ayuda
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

function Home() {
  return (
    <>
      <div className="pb-8">
        <Services />
        <div className="border-b-4 border-teal-600 opacity-50"></div>
      </div>
      <div className="pb-8">
        <About />
        <div className="border-b-4 border-teal-600 opacity-50"></div>
      </div>
    </>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34641431426?text=Hola,%20me%20gustaría%20obtener%20más%20información."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-8 md:bottom-8 md:right-11 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <HeroSection />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
