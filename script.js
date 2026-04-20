// home ===========================================
document.addEventListener("DOMContentLoaded", () => {
    // --- Logo slider ---
    const track = document.getElementById("logoTrack");
    if (track) {
        const items = Array.from(track.children);
        items.forEach(item => track.appendChild(item.cloneNode(true)));

        let position = 0;
        const speed = 0.4;
        const resetPoint = track.scrollWidth / 2;

        const animateSlider = () => {
            position -= speed;
            if (position <= -resetPoint) position = 0;
            track.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animateSlider);
        };
        animateSlider();
    }

    // --- Scroll reveal ---
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        const triggerPoint = window.innerHeight - 100;
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < triggerPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    revealSections(); // run once on load
    window.addEventListener("scroll", revealSections);
});

//internship========================================================
// ----- INTERNSHIP DATA with real Cambodia pictures / locations & companies -----
const internshipsData = [
    {
        id: 1,
        title: "Junior Web Developer Intern",
        company: "ABA Bank (Phnom Penh)",
        category: "IT & Tech",
        location: "Phnom Penh, Cambodia",
        duration: "3 months",
        stipend: "$180/month",
        description: "Build and maintain internal web apps. Work with React & Node.js team. Mentorship provided.",
        image: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=600&auto=format",   // cambodian tech vibe (phnom penh city)
        badge: "KH Tech Hub"
    },
    {
        id: 2,
        title: "Digital Marketing Trainee",
        company: "Sabay Digital",
        category: "Marketing",
        location: "Phnom Penh",
        duration: "4 months",
        stipend: "$150/month",
        description: "Create content, social media campaigns, and analytics for one of Cambodia's leading media.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format",
        badge: " Top Media"
    },
    {
        id: 3,
        title: "Software Engineering Intern",
        company: "Smart Axiata",
        category: "IT & Tech",
        location: "Phnom Penh",
        duration: "6 months",
        stipend: "$220/month",
        description: "Assist in mobile app development and backend APIs. Great learning in telecom sector.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format",
        badge: "5G Innovation"
    },
    {
        id: 4,
        title: "Finance & Accounting Intern",
        company: "Prince Bank",
        category: "Finance",
        location: "Siem Reap",
        duration: "3 months",
        stipend: "$170/month",
        description: "Support finance team with reconciliations, reporting, and Khmer accounting practices.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format",
        badge: " Banking"
    },
    {
        id: 5,
        title: "Hospitality Management Trainee",
        company: "Raffles Hotel Le Royal",
        category: "Hospitality",
        location: "Phnom Penh",
        duration: "4 months",
        stipend: "$200/month + meals",
        description: "Guest relations, events, and operations. Gain luxury hospitality experience.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format",
        badge: " Luxury"
    },
    {
        id: 6,
        title: "Data Analyst Intern",
        company: "WorldBridge Group",
        category: "IT & Tech",
        location: "Phnom Penh",
        duration: "3 months",
        stipend: "$210/month",
        description: "Work with large datasets, Power BI, and assist data-driven decisions across industries.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format",
        badge: " Data Driven"
    },
    {
        id: 7,
        title: "Graphic Design Intern",
        company: "NagaCorp",
        category: "Marketing",
        location: "Phnom Penh",
        duration: "3 months",
        stipend: "$160/month",
        description: "Design marketing collaterals, social media assets, and branding for events.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format",
        badge: " Creative"
    },
    {
        id: 8,
        title: "E-commerce & Sales Intern",
        company: "Little Fashion (Cambodia)",
        category: "Marketing",
        location: "Battambang",
        duration: "2 months",
        stipend: "$130/month",
        description: "Help manage online store, product listings, and digital sales strategy.",
        image: "https://i.pinimg.com/1200x/d5/37/64/d5376407470fd46711c158aef978df08.jpg",
        badge: " E-com"
    },
    {
        id: 9,
        title: "IT Support & Network Intern",
        company: "CIA First International School",
        category: "IT & Tech",
        location: "Siem Reap",
        duration: "3 months",
        stipend: "$140/month",
        description: "Provide IT support, manage networks and assist students & staff with tech issues.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format",
        badge: " Tech support"
    },
    {
        id: 10,
        title: "Accounting & Tax Intern",
        company: "KPMG Cambodia",
        category: "Finance",
        location: "Phnom Penh",
        duration: "4 months",
        stipend: "$250/month",
        description: "Assist audit and tax team, learn compliance and financial reporting standards.",
        image: "https://i.pinimg.com/1200x/a0/2d/d4/a02dd4dab98356b84edd2a32b6905d3f.jpg",
        badge: " Big4"
    }
];


let currentFilter = "all";
let currentSearchTerm = "";

// Helper to filter internships based on category and search
function filterInternships() {
    let filtered = [...internshipsData];

    // filter by category
    if (currentFilter !== "all") {
        filtered = filtered.filter(intern => intern.category === currentFilter);
    }

    // search by title, company, location
    if (currentSearchTerm.trim() !== "") {
        const term = currentSearchTerm.trim().toLowerCase();
        filtered = filtered.filter(intern =>
            intern.title.toLowerCase().includes(term) ||
            intern.company.toLowerCase().includes(term) ||
            intern.location.toLowerCase().includes(term) ||
            intern.category.toLowerCase().includes(term)
        );
    }
    return filtered;
}

// Render internship cards
function renderInternships() {
    const filteredList = filterInternships();
    const grid = document.getElementById("internshipGrid");

    if (!grid) return;

    if (filteredList.length === 0) {
        grid.innerHTML = `<div class="no-results"><span> No matching internships found in Cambodia. Try adjusting filters or search! KH</span></div>`;
        return;
    }

    grid.innerHTML = filteredList.map(intern => `
            <div class="intern-card" data-id="${intern.id}">
                <div class="card-img" style="background-image: url('${intern.image}'); background-size: cover;">
                    <div class="card-badge">${intern.badge}</div>
                </div>
                <div class="card-content">
                    <div class="card-title">${intern.title}</div>
                    <div class="company"> ${intern.company}</div>
                    <div class="details">
                        <span> ${intern.duration}</span>
                        <span> ${intern.stipend}</span>
                    </div>
                    <div class="desc">${intern.description}</div>
                    <div class="card-footer">
                        <div class="location"> ${intern.location}</div>
                        <button class="btn-apply" data-intern-title="${intern.title}" data-company="${intern.company}">Apply now </button>
                    </div>
                </div>
            </div>
        `).join('');

    // Attach event listeners to all "Apply now" buttons
    document.querySelectorAll('.btn-apply').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const title = btn.getAttribute('data-intern-title') || "this position";
            const company = btn.getAttribute('data-company') || "company";
            alert(` Application initiated for "${title}" at ${company}!\n Our team will contact you soon by email. KH Build your portfolio with Khmer InternSphere.`);
        });
    });
}

// update active filter UI and re-render
function setActiveFilter(filterValue) {
    currentFilter = filterValue;
    // update active class on chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        const chipFilter = chip.getAttribute('data-filter');
        if ((filterValue === 'all' && chipFilter === 'all') || chipFilter === filterValue) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
    renderInternships();
}

// set search term from input
function updateSearch() {
    const inputElem = document.getElementById('searchInput');
    if (inputElem) currentSearchTerm = inputElem.value;
    renderInternships();
}

// quick mini search from navbar (optional)
function setupNavSearch() {
    const miniInput = document.getElementById('miniSearchInput');
    if (miniInput) {
        miniInput.addEventListener('keyup', (e) => {
            const mainSearch = document.getElementById('searchInput');
            if (mainSearch) {
                mainSearch.value = miniInput.value;
                currentSearchTerm = miniInput.value;
                renderInternships();
            }
        });
    }
}

// event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderInternships();

    // filter chip click
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            const filterValue = chip.getAttribute('data-filter');
            setActiveFilter(filterValue);
        });
    });

    // search button and search input
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            updateSearch();
        });
    }
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                updateSearch();
            }
        });
    }

    setupNavSearch();

    // small reset: if navbar home/internship links just simulate (optional)
    const navInternLink = document.querySelector('.nav-links a.active');
    // just to keep consistency, but fine

    // add extra touch: also include a friendly console message
    console.log("Khmer InternSphere ready - connecting Cambodian students to local internships KH");
});

// company========================================================



// about us========================================================



// contact========================================================
// ===================== 1. ACTIVE NAV LINK =====================
const navLinks = document.querySelectorAll("#main-nav a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// ===================== 2. HAMBURGER MENU TOGGLE =====================
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("nav-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu when clicking a link (mobile UX)
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("nav-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", false);
    });
});

// ===================== 3. CONTACT FORM =====================
const form = document.getElementById("contact-form");
const overlay = document.getElementById("thankyou-overlay");
const backBtn = document.getElementById("back-btn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("student-name").value.trim();
    const email = document.getElementById("student-email").value.trim();
    const message = document.getElementById("student-message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all required fields (Name, Email, and Message).");
        return;
    }

    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
    overlay.focus();
});

backBtn.addEventListener("click", function () {
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
    form.reset();
});
