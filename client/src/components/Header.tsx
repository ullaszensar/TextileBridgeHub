import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-primary font-roboto font-bold text-2xl cursor-pointer">
                <span className="text-secondary">Tex</span>Bridge
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`nav-link font-medium hover:text-secondary transition-300 py-2 ${
                isActive('/') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={`nav-link font-medium hover:text-secondary transition-300 py-2 ${
                isActive('/about') ? 'text-primary' : 'text-neutral-700'
              }`}>
                About Us
              </a>
            </Link>
            <Link href="/services">
              <a className={`nav-link font-medium hover:text-secondary transition-300 py-2 ${
                isActive('/services') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Services
              </a>
            </Link>
            <Link href="/products">
              <a className={`nav-link font-medium hover:text-secondary transition-300 py-2 ${
                isActive('/products') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Products
              </a>
            </Link>
            <Link href="/contact">
              <a className={`nav-link font-medium hover:text-secondary transition-300 py-2 ${
                isActive('/contact') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Contact
              </a>
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              aria-label="Toggle mobile menu"
              onClick={toggleMenu} 
              className="text-neutral-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/">
                <a 
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md ${
                    isActive('/') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a 
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md ${
                    isActive('/about') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  About Us
                </a>
              </Link>
              <Link href="/services">
                <a 
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md ${
                    isActive('/services') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Services
                </a>
              </Link>
              <Link href="/products">
                <a 
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md ${
                    isActive('/products') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Products
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md ${
                    isActive('/contact') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
