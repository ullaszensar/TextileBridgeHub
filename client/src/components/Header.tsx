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
              <div className="flex items-center cursor-pointer">
                {/* Logo Image */}
                <div className="w-10 h-10 mr-2 flex items-center justify-center bg-primary rounded-md">
                  <span className="text-white font-bold text-xl">TB</span>
                </div>
                {/* Logo Text */}
                <h1 className="text-primary font-roboto font-bold text-2xl">
                  <span className="text-secondary">Tex</span>Bridge
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className={`nav-link font-medium hover:text-secondary transition-300 py-2 cursor-pointer ${
                isActive('/') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className={`nav-link font-medium hover:text-secondary transition-300 py-2 cursor-pointer ${
                isActive('/about') ? 'text-primary' : 'text-neutral-700'
              }`}>
                About Us
              </span>
            </Link>
            <Link href="/services">
              <span className={`nav-link font-medium hover:text-secondary transition-300 py-2 cursor-pointer ${
                isActive('/services') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Services
              </span>
            </Link>
            <Link href="/products">
              <span className={`nav-link font-medium hover:text-secondary transition-300 py-2 cursor-pointer ${
                isActive('/products') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Products
              </span>
            </Link>
            <Link href="/contact">
              <span className={`nav-link font-medium hover:text-secondary transition-300 py-2 cursor-pointer ${
                isActive('/contact') ? 'text-primary' : 'text-neutral-700'
              }`}>
                Contact
              </span>
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
                <span 
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md block cursor-pointer ${
                    isActive('/') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md block cursor-pointer ${
                    isActive('/about') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  About Us
                </span>
              </Link>
              <Link href="/services">
                <span
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md block cursor-pointer ${
                    isActive('/services') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Services
                </span>
              </Link>
              <Link href="/products">
                <span
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md block cursor-pointer ${
                    isActive('/products') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Products
                </span>
              </Link>
              <Link href="/contact">
                <span
                  onClick={closeMenu}
                  className={`mobile-nav-link font-medium hover:bg-neutral-100 px-3 py-2 rounded-md block cursor-pointer ${
                    isActive('/contact') ? 'text-primary' : 'text-neutral-700'
                  }`}
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
