import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';
import './styles.css';

import birthdayFlyer from '../birthday-flyer.jpg';
import foodFlyer from '../food-flyer.jpg';
import fashionFlyer from '../fashion-flyer.jpg';
import eventFlyer from '../event-flyer.jpg';
import skincareAd from '../skincare-ad.jpg';

const projects = [
  {
    number: '01',
    title: 'Birthday Celebration',
    type: 'Birthday event flyer',
    image: birthdayFlyer,
    tone: 'tone-rose',
    description:
      'A celebration-focused design that puts the occasion at the centre.',
    alt: 'Birthday celebration flyer from the Bhigfhavee Designs portfolio',
  },
  {
    number: '02',
    title: 'Food & Delivery',
    type: 'Food business flyer',
    image: foodFlyer,
    tone: 'tone-gold',
    description:
      'Promotional artwork for a food business and its offerings.',
    alt: 'Food business promotional flyer from the Bhigfhavee Designs portfolio',
  },
  {
    number: '03',
    title: 'Fashion Campaign',
    type: 'Fashion brand flyer',
    image: fashionFlyer,
    tone: 'tone-mauve',
    description:
      'Fashion-focused promotional artwork with an editorial direction.',
    alt: 'Fashion flyer from the Bhigfhavee Designs portfolio',
  },
  {
    number: '04',
    title: 'Nightlife & Events',
    type: 'Event promotional flyer',
    image: eventFlyer,
    tone: 'tone-violet',
    description:
      'Event promotional artwork with a bold visual direction.',
    alt: 'Event promotional flyer from the Bhigfhavee Designs portfolio',
  },
  {
    number: '05',
    title: 'Skincare Spotlight',
    type: 'Product advertisement',
    image: skincareAd,
    tone: 'tone-sage',
    description:
      'Beauty and skincare advertising with a product-led presentation.',
    alt: 'Skincare advertisement from the Bhigfhavee Designs portfolio',
  },
];

const services = [
  {
    number: '01',
    title: 'Flyers & Posters',
    description:
      'Designs for birthdays, events, business promotions and announcements.',
  },
  {
    number: '02',
    title: 'Social Media Design',
    description:
      'Promotional graphics for Instagram, Facebook and other social platforms.',
  },
  {
    number: '03',
    title: 'Business Advertising',
    description:
      'Visual promotions for businesses, products and services.',
  },
  {
    number: '04',
    title: 'Document Design',
    description:
      'CVs, presentations and other clean, professional documents.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const menuToggleRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  // Allow Escape to close the mobile navigation.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const toggle = menuToggleRef.current;

    function handleMenuKeyDown(event) {
      if (event.key !== 'Escape') return;

      setMenuOpen(false);
      toggle?.focus();
    }

    document.addEventListener('keydown', handleMenuKeyDown);

    return () => {
      document.removeEventListener('keydown', handleMenuKeyDown);
    };
  }, [menuOpen]);

  // Manage focus and keyboard navigation inside the artwork lightbox.
  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveProject(null);
        return;
      }

      if (event.key !== 'Tab') return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusableElements = dialog.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const firstFocusable = focusableElements[0];
      const lastFocusable =
        focusableElements[focusableElements.length - 1];

      if (!firstFocusable || !lastFocusable) {
        event.preventDefault();
        return;
      }

      const activeElement = document.activeElement;

      // Recover focus if it somehow moves outside the dialog.
      if (!dialog.contains(activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastFocusable : firstFocusable).focus();
        return;
      }

      // Shift+Tab from the first control wraps to the last.
      if (event.shiftKey && activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
        return;
      }

      // Tab from the last control wraps to the first.
      if (!event.shiftKey && activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);

      if (trigger && document.contains(trigger)) {
        trigger.focus();
      }
    };
  }, [activeProject]);

  function openProject(project, event) {
    triggerRef.current = event.currentTarget;
    setActiveProject(project);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function closeLightbox() {
    setActiveProject(null);
  }

  const featuredProject = projects[2];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" id="home">
        <div className="shell nav-shell">
          <a
            className="brand"
            href="#home"
            aria-label="Bhigfhavee Designs home"
            onClick={closeMenu}
          >
            <span className="brand-mark" aria-hidden="true">
              B<span>.</span>
            </span>

            <span className="brand-name">
              BHIGFHAVEE
              <small>DESIGNS</small>
            </span>
          </a>

          <button
            ref={menuToggleRef}
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>

          <nav
            className={`primary-nav${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            <a href="#work" onClick={closeMenu}>
              Selected work
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" aria-hidden="true" />
                Graphic design · Nigeria
              </p>

              <h1>
                Make your
                <br />
                <em>message</em>
                <br />
                stand out.
              </h1>

              <p className="hero-description">
                Promotional visuals for businesses, products, events and
                moments worth sharing.
              </p>

              <div className="hero-actions">
                <a className="button button-accent" href="#work">
                  Explore selected work
                  <ArrowRight size={17} aria-hidden="true" />
                </a>

                <a className="text-link text-link-light" href="#contact">
                  Start a project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>

              <p className="hero-footnote">
                Thoughtful visuals. Clear communication.
              </p>
            </div>

            <div className="hero-artwork-wrap">
              <div className="hero-artwork">
                <div className="artwork-topline">
                  <span>Selected work</span>
                  <span>03 / 05</span>
                </div>

                <button
                  className="hero-artwork-button"
                  type="button"
                  onClick={(event) => openProject(featuredProject, event)}
                  aria-label="View Fashion Campaign artwork larger"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.alt}
                    fetchPriority="high"
                  />
                </button>

                <div className="artwork-bottomline">
                  <span>Fashion Campaign</span>
                  <span className="artwork-open">
                    View artwork
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </div>
              </div>

              <span className="hero-side-note">
                BHIGFHAVEE DESIGNS / PORTFOLIO
              </span>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="shell intro-grid">
            <p className="section-kicker">
              A little about the work
            </p>

            <div>
              <h2 className="intro-heading">
                Design is more than decoration.
                <span> It should communicate.</span>
              </h2>

              <p className="intro-copy">
                Bhigfhavee Designs creates graphics for promotions, events,
                products and businesses, with an emphasis on clear messages
                and deliberate visual presentation.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">01 / Portfolio</p>
                <h2>
                  Selected <em>work.</em>
                </h2>
              </div>

              <p className="section-intro">
                A collection of flyers, promotional graphics and advertising
                designs from the portfolio.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  className={`project-card${
                    index === 0 ? ' project-card-featured' : ''
                  }`}
                  key={project.number}
                >
                  <button
                    className={`project-visual ${project.tone}`}
                    type="button"
                    onClick={(event) => openProject(project, event)}
                    aria-label={`View ${project.title} artwork larger`}
                  >
                    <span className="project-index">
                      {project.number} / 05
                    </span>

                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                    />

                    <span className="project-visual-hint">
                      Enlarge artwork
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </button>

                  <div
                    className={`project-meta${
                      index === 0 ? ' project-meta-featured' : ''
                    }`}
                  >
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <button
                      className="project-details"
                      type="button"
                      onClick={(event) => openProject(project, event)}
                    >
                      View design
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="gallery-footnote">
              Each design is presented as a portfolio sample. Contact the
              designer to discuss a project of your own.
            </p>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 / Services</p>
                <h2>
                  Design for your
                  <br />
                  <em>next idea.</em>
                </h2>
              </div>

              <p className="section-intro">
                Have something to promote, announce or introduce? Start with
                the message and build the visual around it.
              </p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-number">
                    {service.number}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ArrowUpRight
                    className="service-arrow"
                    size={19}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>

            <a className="button button-dark" href="#contact">
              Discuss your project
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="shell about-grid">
            <div>
              <p className="section-kicker section-kicker-light">
                03 / The designer
              </p>

              <h2>
                Behind
                <br />
                <em>the visuals.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                Bhigfhavee Designs is built around the idea that a good
                visual should look intentional and communicate its message.
              </p>

              <p>
                Services include promotional flyers, social media graphics,
                business advertising and document design, alongside event
                and product promotions.
              </p>

              <p>
                Whether you already have a clear direction or need help
                shaping the visual idea, start with what you want your
                design to communicate.
              </p>

              <a className="text-link text-link-light" href="#contact">
                Tell me about your idea
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="shell">
            <p className="section-kicker">
              04 / Start a conversation
            </p>

            <h2>
              Have something
              <br />
              to <em>design?</em>
            </h2>

            <p className="contact-intro">
              Share what you need, the message you want to communicate and
              any important deadline. Let's discuss your project.
            </p>

            <div className="contact-grid">
              <a
                className="contact-card"
                href="https://wa.me/2348050620968"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={22} aria-hidden="true" />

                <span className="contact-card-copy">
                  <small>CHAT ON WHATSAPP</small>
                  <strong>+234 805 062 0968</strong>
                </span>

                <ArrowUpRight
                  className="contact-arrow"
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <a
                className="contact-card"
                href="mailto:bhigfhavee@gmail.com"
              >
                <Mail size={22} aria-hidden="true" />

                <span className="contact-card-copy">
                  <small>SEND AN EMAIL</small>
                  <strong>bhigfhavee@gmail.com</strong>
                </span>

                <ArrowUpRight
                  className="contact-arrow"
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <a
                className="contact-card"
                href="https://instagram.com/bhigfhave"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} aria-hidden="true" />

                <span className="contact-card-copy">
                  <small>FOLLOW ON INSTAGRAM</small>
                  <strong>@bhigfhave</strong>
                </span>

                <ArrowUpRight
                  className="contact-arrow"
                  size={18}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark" aria-hidden="true">
              B<span>.</span>
            </span>

            <span className="brand-name">
              BHIGFHAVEE
              <small>DESIGNS</small>
            </span>
          </a>

          <p>Graphic design for ideas worth sharing.</p>

          <a className="back-to-top" href="#home">
            Back to top
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <small className="copyright">
            © {new Date().getFullYear()} Bhigfhavee Designs
          </small>
        </div>
      </footer>

      {activeProject && (
        <div
          ref={dialogRef}
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="lightbox-panel">
            <button
              className="lightbox-close"
              type="button"
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="Close enlarged artwork"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <div className={`lightbox-image ${activeProject.tone}`}>
              <img src={activeProject.image} alt={activeProject.alt} />
            </div>

            <div className="lightbox-caption">
              <div>
                <p className="project-type">{activeProject.type}</p>
                <h2 id="lightbox-title">{activeProject.title}</h2>
                <p id="lightbox-description">
                  {activeProject.description}
                </p>
              </div>

              <a
                className="button button-dark"
                href="#contact"
                onClick={closeLightbox}
              >
                Discuss a design
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);