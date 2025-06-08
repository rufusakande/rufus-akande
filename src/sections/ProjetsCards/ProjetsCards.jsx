import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye, Code, Palette, ShoppingCart, Heart, Users, Calendar } from 'lucide-react';
import './ProjetsCards.css';

const ProjetsCards = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Données des projets (à adapter selon vos vrais projets)
  const projets = [
    {
      id: 1,
      nom: "Site vitrine pour coach bien-être",
      description: "Design élégant avec blog intégré, système de prise de rendez-vous et espace client personnalisé.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MySQL", "CSS"],
      lienSite: "#",
      lienDemo: "#",
      category: "vitrine",
      icon: Heart,
      couleurAccent: "#facc15"
    },
    {
      id: 2,
      nom: "Boutique e-commerce artisanale",
      description: "Plateforme de vente en ligne avec gestion des stocks, paiements sécurisés et tableau de bord vendeur.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Express", "Stripe", "MongoDB"],
      lienSite: "#",
      lienDemo: "#",
      category: "ecommerce",
      icon: ShoppingCart,
      couleurAccent: "#0206b7"
    },
    {
      id: 3,
      nom: "Application de réservation",
      description: "Système complet de réservation en ligne avec calendrier interactif et notifications automatiques.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      lienSite: "#",
      lienDemo: "#",
      category: "webapp",
      icon: Calendar,
      couleurAccent: "#3c44e9"
    },
    {
      id: 4,
      nom: "Plateforme communautaire",
      description: "Réseau social spécialisé avec forums, messagerie temps réel et système de badges gamifié.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "GraphQL", "Redis", "Docker"],
      lienSite: "#",
      lienDemo: "#",
      category: "webapp",
      icon: Users,
      couleurAccent: "#facc15"
    },
    {
      id: 5,
      nom: "Portfolio créatif interactif",
      description: "Site portfolio avec animations 3D, transitions fluides et système de filtrage dynamique.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Three.js", "GSAP", "Vite"],
      lienSite: "#",
      lienDemo: "#",
      category: "vitrine",
      icon: Palette,
      couleurAccent: "#0206b7"
    },
    {
      id: 6,
      nom: "Dashboard analytique",
      description: "Interface d'administration avec graphiques temps réel, exports PDF et gestion multi-utilisateurs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "D3.js", "Express", "Chart.js"],
      lienSite: "#",
      lienDemo: "#",
      category: "webapp",
      icon: Code,
      couleurAccent: "#3c44e9"
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