import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-surface/90 backdrop-blur-xl py-3 shadow-sm border-b border-brand-orange/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-serif italic font-medium tracking-tight text-brand-black"
        >
          Wyll Studio <span className="text-brand-orange">Hair</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link, i) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-[11px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                  isActive ? 'text-brand-orange' : 'text-brand-black/60 hover:text-brand-orange'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>
            );
          })}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
            className="bg-brand-black text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-all duration-300 shadow-lg hover:shadow-brand-orange/20"
          >
            Agendar
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-black p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-black/40 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-surface shadow-2xl md:hidden z-50 flex flex-col"
          >
            <div className="p-8 pt-24 flex flex-col gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif italic transition-colors ${
                      isActive ? 'text-brand-orange' : 'text-brand-black hover:text-brand-orange'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="mt-4 pt-8 border-t border-brand-orange/10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-6">Contato Direto</p>
                <a
                  href="https://wa.me/5513997087600?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
                  className="flex items-center justify-center gap-3 bg-brand-orange text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-orange/20"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  Agendar Agora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

