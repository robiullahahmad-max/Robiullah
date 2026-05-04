import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Flavors', path: '/products' },
  { name: 'Promotions', path: '/promotions' },
  { name: 'The Story', path: '/about' },
  { name: 'Connect', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-pepper-black/90 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" id="nav-logo">
          <div className="w-10 h-10 bg-pepper-red rounded-full flex items-center justify-center font-display font-bold text-xl transform group-hover:rotate-12 transition-transform shadow-lg shadow-pepper-red/20">
            P
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase">Pepper Bold</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-pepper-red transition-colors relative ${
                location.pathname === link.path ? 'text-pepper-red' : 'text-neutral-400'
              }`}
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pepper-red"
                />
              )}
            </Link>
          ))}
          <button 
            className="pepper-gradient px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pepper-red/20 flex items-center gap-2"
            id="nav-buy-now"
          >
            Buy Now
            <ShoppingCart size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} id="mobile-nav-toggle">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-pepper-black border-b border-white/10"
        id="mobile-menu"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold uppercase tracking-tighter hover:text-pepper-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="pepper-gradient px-8 py-4 rounded-xl font-black uppercase tracking-widest text-lg w-full">
            Buy Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
