import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-slate-800">
              LAW<span className="text-amber-600">EX</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">About</a>
            <a href="#practice-areas" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Practice Areas</a>
            <a href="#attorneys" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Attorneys</a>
            <a href="#testimonials" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-amber-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-700 transition-colors"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium">About</a>
              <a href="#practice-areas" className="text-slate-700 hover:text-amber-600 font-medium">Practice Areas</a>
              <a href="#attorneys" className="text-slate-700 hover:text-amber-600 font-medium">Attorneys</a>
              <a href="#testimonials" className="text-slate-700 hover:text-amber-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium">Contact</a>
              <a 
                href="#contact" 
                className="bg-amber-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-amber-700 transition-colors text-center"
              >
                Free Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
