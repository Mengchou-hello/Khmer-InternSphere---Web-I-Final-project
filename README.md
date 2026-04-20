# 🌐 Khmer InternSphere

> A web platform connecting Cambodian students with internship opportunities.

**Course:** INFO 250 – Web Development I  
**Group:** Alpha | **Section:** 002  
**Members:** Onimaru Mika · Ly Mengchou · Somang Sochannimol · Sen Sovanney

---

## 📌 About the Project

Khmer InternSphere is a static multi-page website designed to bridge the gap between students in Cambodia and companies offering internship opportunities. The platform addresses the lack of accessible, organized internship listings in the Cambodian job market by providing a centralized, student-friendly interface where opportunities can be browsed, filtered, and applied to — and where companies can reach out or be discovered.

---

## 🗂️ Website Structure

```
KhmerInternSphere/
├── index.html          # Home Page
├── internships.html    # Internships listing
├── companies.html      # Company profiles
├── about.html          # About the platform
├── contact.html        # Contact form
├── css/
│   └── style.css       # Shared external stylesheet
├── js/
│   └── script.js       # Shared JavaScript file
└── assets/             # Images, posters, and media
```

---

## 📄 Pages Overview

### 🏠 Home Page — `index.html`
- Eye-catching hero banner with graphics
- Website introduction and mission statement
- Featured internship highlights section
- "Find Internship" button linking to the Internships page
- Multimedia element (poster/social media image)
- Shared `<header>`, `<nav>`, and `<footer>` used across all pages

### 💼 Internships Page — `internships.html`
- Organized card/table layout of available internships
- HTML `<table>` with `<thead>`, `<tbody>`, and `<th>` elements
- Columns: Title, Company, Location, Skills, Duration
- "Apply" button for each internship entry
- Search and filter options section
- Cross-browser and mobile responsiveness testing for all 5 pages

### 🏢 Companies Page — `companies.html`
- Grid/list layout with company profiles
- Each profile includes: logo, name, description, industry, opportunities, and links

### ℹ️ About Page — `about.html`
- Explains the platform's purpose and the Cambodia internship problem
- Describes how the platform bridges the gap between students and companies
- Mission and vision statements
- Accessibility: alt text, ARIA labels, semantic HTML review

### 📬 Contact Page — `contact.html`
- Form with name, email, phone, and message fields
- Fieldsets separating student and company inquiries
- Required attributes, input types, and placeholder text
- Official contact information display (email, phone)
- Accessible and user-friendly UX

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic elements |
| CSS3 | Shared external stylesheet, responsive design |
| JavaScript (ES6+) | DOM manipulation, interactivity, animations — no external frameworks |

---

## ⚙️ JavaScript Features

All interactivity is handled through a single shared `script.js` file using **vanilla JavaScript (ES6+)**. No external libraries or frameworks are used.

| Feature | Description |
|---|---|
| Logo auto-slider | Clones logo items and animates them infinitely using `requestAnimationFrame` |
| Scroll reveal | Detects section visibility on scroll and fades/slides them into view |
| Internship card rendering | Dynamically generates internship cards from a local data array |
| Search & filter | Filters internship listings by category chip or keyword (title, company, location) |
| Apply button | Triggers a confirmation alert with internship and company details |
| Hamburger menu | Toggles mobile nav open/close with ARIA `aria-expanded` support |
| Active nav link | Automatically highlights the current page link based on `window.location.pathname` |
| Contact form | Validates required fields and shows a thank-you overlay on successful submission |

---

## ✅ Accessibility & Standards

- Semantic HTML elements throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<fieldset>`)
- All images include descriptive `alt` text
- ARIA labels on interactive elements
- Form inputs use proper `type`, `required`, and `placeholder` attributes
- Responsive layout tested across major browsers and mobile devices

---

## 🚀 Getting Started

No build tools or dependencies required. Simply clone the repository and open `index.html` in your browser. JavaScript runs natively in the browser — no installation needed.

```bash
git clone https://github.com/your-username/khmer-internsphere.git
cd khmer-internsphere
open index.html
```

---

## 📁 Project Status

This project was developed as part of **INFO 250 – Web Development I**.  
Current version is a static website with no backend or database integration.

---

## 📜 License

This project is for academic purposes. All rights reserved by the contributors.
