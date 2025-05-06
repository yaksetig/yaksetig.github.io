// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const currentYearEl = document.getElementById('current-year');
const viewMoreBtn = document.querySelector('.view-more');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');

// Function to set the current year in the footer
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    currentYearEl.textContent = currentYear;
};

// Function to toggle between light and dark theme
const toggleTheme = () => {
    // Toggle the dark-theme class on the body
    body.classList.toggle('dark-theme');
    
    // Update the theme toggle icon
    const themeIcon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        // Save theme preference to localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        // Save theme preference to localStorage
        localStorage.setItem('theme', 'light');
    }
};

// Function to check and apply saved theme preference
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        const themeIcon = themeToggle.querySelector('i');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
};

// Function to handle scroll animation
const handleScroll = () => {
    const scrollPosition = window.scrollY;
    
    // Add shadow to navbar on scroll
    if (scrollPosition > 10) {
        nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 300;
        if (scrollPosition >= sectionTop) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Function to initialize animations
const initAnimations = () => {
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial scroll check
    handleScroll();
};

// Function to handle navigation click
const handleNavClick = (e) => {
    // Check if the clicked element is a navigation
