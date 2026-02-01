import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye, Code, Palette, ShoppingCart, Heart, Users, Calendar } from 'lucide-react';
import './ProjetsCards.css';
import img1 from '../../assets/Images/Rufus Akande développeur web freelance22.png';
import img2 from '../../assets/Images/Rufus Akande développeur web freelance14.webp';
import img3 from '../../assets/Images/Rufus Akande développeur web freelance21.png';
import img4 from '../../assets/Images/Rufus Akande développeur web freelance12.png';
import img5 from '../../assets/Images/Rufus Akande développeur web freelance13.png';
import img6 from '../../assets/Images/Rufus Akande développeur web freelance15.png';

const ProjetsCards = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Données des projets (à adapter selon vos vrais projets)
  const projets = [
    {
      id: 1,
      nom: "Landing page Back To Business",
      description: "Page ultra-convertissante, qui parle directement aux entrepreneurs et les incite à passer à l'action.",
      image: img1,
      technologies: ["React", "Node.js", "Express", "MySQL"],
      lienSite: "https://rufusakande.github.io/backtobusiness/",
      lienDemo: "https://rufusakande.github.io/backtobusiness/",
      category: "webapp",
      icon: Code,
      couleurAccent: "#3c44e9"
    },
    {
      id: 2,
      nom: "Landing page pour Safari Baleine",
      description: "Landing page interactive qui permet de réserver des excursions en mer avec une expérience utilisateur immersive.",
      image: img5,
      technologies: ["React", "Node.js", "Express", "MySQL"],
      lienSite: "https://safaribaleine-ig.com/",
      lienDemo: "https://safaribaleine-ig.com/",
      category: "webapp",
      icon: Palette,
      couleurAccent: "#0206b7"
    },  
    {
      id: 3,
      nom: "Application de réservation des vols",
      description: "Système complet de réservation des vols et hôtes avec calendrier interactif et notifications automatiques.",
      image: img3,
      technologies: ["React", "Node.js", "Express", "MySQL"],
      lienSite: "https://cartiertravel.com/",
      lienDemo: "https://cartiertravel.com/",
      category: "webapp",
      icon: Calendar,
      couleurAccent: "#3c44e9"
    },
    {
      id: 4,
      nom: "Site web pour Eraste Akande",
      description: "Portfolio professionnel mettant en avant les compétences et réalisations d'un expert en elasticsearch.",
      image: img6,
      technologies: ["React", "Node.js", "Express", "MySQL"],
      lienSite: "https://iyanou.github.io/eraste-akande/",
      lienDemo: "https://iyanou.github.io/eraste-akande/",
      category: "webapp",
      icon: Code,
      couleurAccent: "#3c44e9"
    },
    {
      id: 5,
      nom: "Site web pour ActuDuBled",
      description: "Site d'actualités communautaire avec contenu généré par les utilisateurs, modération et fonctionnalités sociales.",
      image: img4,
      technologies: ["React", "Node.js", "Express", "MySQL"],
      lienSite: "https://test.safaribaleine-ig.com/",
      lienDemo: "https://test.safaribaleine-ig.com/",
      category: "webapp",
      icon: Users,
      couleurAccent: "#facc15"
    },
    {
      id: 6,
      nom: "Boutique e-commerce pour ShineCraft",
      description: "Plateforme de vente en ligne avec gestion des stocks, paiements sécurisés et tableau de bord vendeur.",
      image: img2,
      technologies: ["React", "Express", "Node.js", "MySQL"],
      lienSite: "#",
      lienDemo: "#",
      category: "ecommerce",
      icon: ShoppingCart,
      couleurAccent: "#0206b7"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const IconComponent = ({ icon: Icon, ...props }) => <Icon {...props} />;

  return (
    <section 
      id="ProjetsCards" 
      ref={sectionRef}
      role="main"
      aria-labelledby="projets-section-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 id="projets-section-title" className="section-title">
            Mes dernières <span className="highlight">réalisations</span>
          </h2>
          
          <div className="filter-tabs" role="tablist" aria-label="Filtrer les projets">
            <button className="filter-tab active" role="tab" aria-selected="true">
              Tous les projets
            </button>
            <button className="filter-tab" role="tab" aria-selected="false">
              Sites vitrines
            </button>
            <button className="filter-tab" role="tab" aria-selected="false">
              E-commerce
            </button>
            <button className="filter-tab" role="tab" aria-selected="false">
              Web Apps
            </button>
          </div>
        </div>

        <div className="projects-grid" role="list" aria-label="Liste des projets">
          {projets.map((projet, index) => {
            const isVisible = visibleCards.has(projet.id);
            return (
              <article 
                key={projet.id}
                className={`project-card ${isVisible ? 'visible' : ''}`}
                data-card-id={projet.id}
                role="listitem"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-image-container">
                  <img 
                    src={projet.image} 
                    alt={`Capture d'écran du projet ${projet.nom}`}
                    className="card-image"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="image-overlay">
                    <div className="overlay-actions">
                      <a 
                        href={projet.lienSite} 
                        className="action-btn site-btn"
                        aria-label={`Voir le site ${projet.nom}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                        <span>Site</span>
                      </a>
                      <a 
                        href={projet.lienDemo} 
                        className="action-btn demo-btn"
                        aria-label={`Voir la démo de ${projet.nom}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye size={18} aria-hidden="true" />
                        <span>Démo</span>
                      </a>
                    </div>
                  </div>
                  <div 
                    className="category-badge"
                    style={{ backgroundColor: projet.couleurAccent }}
                  >
                    <IconComponent icon={projet.icon} size={16} aria-hidden="true" />
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="project-title">{projet.nom}</h3>
                  <p className="project-description">{projet.description}</p>
                  
                  <div className="technologies" role="list" aria-label="Technologies utilisées">
                    {projet.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <button 
                      className="voir-plus-btn"
                      aria-label={`Voir plus de détails sur ${projet.nom}`}
                    >
                      <span>Voir plus</span>
                      <ExternalLink size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="section-footer">
          <p className="footer-text">
            Plus de projets disponibles sur demande
          </p>
          <button className="load-more-btn">
            Voir tous mes projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjetsCards;