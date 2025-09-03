import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button-custom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "O que você vai viver", href: "#viver" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Para Quem", href: "#para-quem" },
    { label: "Depoimentos", href: "#provas" },
    { label: "Perguntas", href: "#faq" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-elegant' : 'bg-white/90 backdrop-blur-sm'
      }`}
      style={{ 
        borderBottom: isScrolled ? '1px solid hsl(var(--gold) / 0.4)' : 'none'
      }}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="font-heading font-bold text-xl text-bordeaux">
              Travessia Mulher
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-bordeaux text-sm font-medium transition-colors link-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button variant="primary" size="sm" asChild>
              <a href="#form" className="flex items-center gap-2">
                Quero fazer a Travessia
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-bordeaux"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gold/20 shadow-lg">
            <nav className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-bordeaux font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="primary" size="sm" className="w-full" asChild>
                  <a href="#form" onClick={() => setIsMenuOpen(false)}>
                    Quero fazer a Travessia
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;