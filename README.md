# Bhigfhavee Designs — Graphic Design Portfolio

A responsive graphic design portfolio built with React and Vite, showcasing promotional artwork, flyers, social media graphics, event designs, and product advertisements.

**Live website:** https://bhigfhavee-portfolio.vercel.app/

**GitHub repository:** https://github.com/bhigfhavee/bhigfhavee-portfolio

## Overview

Bhigfhavee Designs presents a collection of visual design work through a responsive, single-page portfolio. The website helps potential clients explore the designer's work, understand the services offered, and make contact about a project.

The website uses a restrained visual identity with dark backgrounds, warm neutral surfaces, pink accents, expressive typography, and a gallery focused on the artwork.

## Features

- Responsive layout for desktop, tablet, and mobile screens.
- Featured artwork on the homepage.
- Portfolio gallery featuring five design samples.
- Enlarged artwork previews.
- Services section.
- Designer introduction.
- Mobile navigation menu with Escape-to-close support.
- WhatsApp contact link.
- Email contact link.
- Instagram profile link.
- Basic page metadata for search engines and social sharing.
- Reduced-motion support and keyboard focus indicators.
- Keyboard navigation support for the artwork lightbox.

## Portfolio Artwork

The repository includes five JPEG artwork files:

| File | Portfolio category |
|---|---|
| `birthday-flyer.jpg` | Birthday and celebration design |
| `food-flyer.jpg` | Food business promotion |
| `fashion-flyer.jpg` | Fashion promotion |
| `event-flyer.jpg` | Event promotion |
| `skincare-ad.jpg` | Product advertisement |

These files are stored in the repository root and imported directly into `src/main.jsx`.

Vite processes the imported assets and generates the appropriate URLs for the production build.

Keep the filenames unchanged unless the corresponding imports in `src/main.jsx` are updated.

Only publish artwork that the portfolio owner has permission to share.

## Services

The website currently lists these service categories:

- Flyers and posters
- Social media design
- Business advertising
- Document design

Event and product promotions are represented in the portfolio samples.

The portfolio owner should confirm that every advertised service accurately reflects what they currently offer.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface and component rendering |
| Vite | Development server and production build |
| JavaScript | Application logic |
| CSS | Layout, visual styling, and responsive behaviour |
| Lucide React | Interface icons |
| GitHub | Source-code hosting and version control |
| Vercel | Website deployment and hosting |

The project does not require a database, backend API, or environment variables for its current functionality.

## Project Structure

```text
bhigfhavee-portfolio/
├── README.md
├── index.html
├── package.json
├── birthday-flyer.jpg
├── food-flyer.jpg
├── fashion-flyer.jpg
├── event-flyer.jpg
├── skincare-ad.jpg
└── src/
    ├── main.jsx
    └── styles.css
```

## Run the Project Locally

### Requirements

- Node.js LTS
- npm
- Git, if you intend to clone and manage the repository locally

### 1. Clone the repository

```bash
git clone https://github.com/bhigfhavee/bhigfhavee-portfolio.git
cd bhigfhavee-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will display a local development URL. Open that URL in your browser to view the website.

### 4. Build for production

```bash
npm run build
```

Vite generates the production-ready website in the `dist/` directory.

### 5. Preview the production build

```bash
npm run preview
```

Use the local URL displayed by Vite to inspect the production build.

## Deployment with Vercel

The project can be deployed to Vercel by importing the GitHub repository.

### Recommended build settings

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

Vercel can automatically build and deploy new commits when the repository is connected and the deployment integration is configured correctly.

A successful GitHub commit does not, by itself, prove that a deployment succeeded. Check the Vercel deployment status and inspect the deployed website after significant changes.

The live URL listed above should be treated as the intended portfolio address. Verify its current availability and content before distributing it to prospective clients.

## Contact Information

The portfolio provides the following contact methods:

- **WhatsApp:** +234 805 062 0968
- **Email:** bhigfhavee@gmail.com
- **Instagram:** @bhigfhave

The portfolio owner should verify each destination before sharing the website with prospective clients.

To change contact details, update the relevant links in `src/main.jsx`.

## Before Publishing Changes

Review this checklist before considering a change complete:

- [ ] The production build succeeds.
- [ ] All five artwork images load correctly.
- [ ] Artwork proportions are preserved.
- [ ] The homepage and gallery look correct on mobile.
- [ ] The mobile navigation opens and closes correctly.
- [ ] Pressing Escape closes the mobile navigation and returns focus to its toggle.
- [ ] Navigation links lead to the correct sections.
- [ ] Enlarged artwork previews open and close correctly.
- [ ] Escape closes an enlarged artwork preview.
- [ ] Tab and Shift+Tab keep keyboard focus within an open preview.
- [ ] Closing a preview restores focus to the control that opened it.
- [ ] Keyboard focus indicators are visible.
- [ ] WhatsApp opens the correct contact.
- [ ] The email link opens the correct email address.
- [ ] The Instagram link opens the correct profile.
- [ ] The advertised services are accurate.
- [ ] The page title and description are appropriate.
- [ ] The deployed website has been checked after deployment.

## Maintenance

When updating the portfolio:

1. Keep the original artwork files organised and clearly named.
2. Update `src/main.jsx` when adding, removing, or renaming a project.
3. Keep the stylesheet import and file location consistent.
4. Check responsive behaviour after layout changes.
5. Run a production build before considering a change ready.
6. Review the deployed website after Vercel finishes deploying.

Avoid unnecessary dependencies and external services unless they solve a real problem for the portfolio.

## License and Artwork Ownership

No open-source software license is specified for this repository.

The portfolio artwork and other creative assets should not be assumed to be available for reuse, redistribution, or commercial purposes without permission from their respective rights holders.

---

**Bhigfhavee Designs**  
Graphic design for ideas worth sharing.