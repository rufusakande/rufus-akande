import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header id="header" className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo" aria-label="Rufus Akande - Accueil">
            <span className="logo-text">Rufus<span className="logo-highlight">Akande</span></span>
          </a>
        </div>

        <nav className={`nav-desktop ${isMenuOpen ? 'show' : ''}`} role="navigation" aria-label="Menu principal">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link active">Accueil</a>
            </li>
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleDropdown(0)}
                aria-expanded={activeDropdown === 0}
                aria-haspopup="true"
              >
                Services <ChevronDown size={16} />
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 0 ? 'show' : ''}`}>
                <li><a href="/services#vitrine">Sites Vitrines</a></li>
                <li><a href="/services#ecommerce">E-commerce</a></li>
                <li><a href="/services#webapp">Applications Web</a></li>
                <li><a href="/services#conseil">Conseil & Accompagnement</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/realisations" className="nav-link">Réalisations</a>
            </li>
            <li className="nav-item">
              <a href="/apropos" className="nav-link">À propos</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="cta-container">
          <a href="/contact" className="cta-button" aria-label="Me contacter">
            Me contacter
          </a>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-container">
          <ul className="mobile-nav-list">
            <li><a href="/" onClick={closeMenu}>Accueil</a></li>
            <li className="mobile-dropdown">
              <button 
                onClick={() => toggleDropdown(1)}
                aria-expanded={activeDropdown === 1}
              >
                Services <ChevronDown size={16} className={activeDropdown === 1 ? 'rotate' : ''} />
              </button>
              <ul className={`mobile-dropdown-menu ${activeDropdown === 1 ? 'show' : ''}`}>
                <li><a href="/services#vitrine" onClick={closeMenu}>Sites Vitrines</a></li>
                <li><a href="/services#ecommerce" onClick={closeMenu}>E-commerce</a></li>
                <li><a href="/services#webapp" onClick={closeMenu}>Applications Web</a></li>
                <li><a href="/services#conseil" onClick={closeMenu}>Conseil & Accompagnement</a></li>
              </ul>
            </li>
            <li><a href="/realisations" onClick={closeMenu}>Réalisations</a></li>
            <li><a href="/apropos" onClick={closeMenu}>À propos</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="mobile-contact-info">
            <p>Besoin d'un site web qui vous démarque ?</p>
            <a href="/contact" className="mobile-cta-button" onClick={closeMenu}>Discutons de votre projet</a>
            <div className="mobile-contact-details">
              <a href="mailto:rufus.dev@mail.com">rufus.dev@mail.com</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;