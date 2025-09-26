import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div ><a href="src/GruhaLogo.png"></div >
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-amber-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-700 hover:text-amber-600 font-medium text-left px-4 py-2 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors mx-4"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
