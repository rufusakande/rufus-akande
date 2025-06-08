import { Instagram, Linkedin, Mail, MapPin, Phone, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            fill="#f5f7fa"
            fillOpacity="1"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-column brand-column">
              <a href="/" className="footer-logo" aria-label="Rufus Akande - Accueil">
                <span className="footer-logo-text">Rufus<span className="footer-logo-highlight">Akande</span></span>
              </a>
              <p className="footer-tagline">
                Des solutions web sur mesure pour vous démarquer et développer votre présence en ligne.
              </p>
              <div className="social-links">
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                  <Github size={20} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Navigation</h3>
              <ul className="footer-links">
                <li><a href="/">Accueil</a></li>
                <li><a href="/a-propos">À propos</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/realisations">Réalisations</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><a href="/services#vitrine">Sites Vitrines</a></li>
                <li><a href="/services#ecommerce">E-commerce</a></li>
                <li><a href="/services#webapp">Applications Web</a></li>
                <li><a href="/services#conseil">Conseil & Accompagnement</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column contact-column">
              <h3 className="footer-heading">Contact</h3>
              <ul className="contact-info">
                <li>
                  <Mail size={16} className="contact-icon" />
                  <a href="mailto:rufus.dev@mail.com">rufus.dev@mail.com</a>
                </li>
                <li>
                  <Phone size={16} className="contact-icon" />
                  <a href="tel:+22900000000">+229 00 00 00 00</a>
                </li>
                <li>
                  <MapPin size={16} className="contact-icon" />
                  <span>Parakou, Bénin</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              &copy; {currentYear} Rufus Akande. Tous droits réservés.
            </div>
            <div className="legal-links">
              <a href="/mentions-legales">Mentions légales</a>
              <span className="separator">|</span>
              <a href="/politique-confidentialite">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;