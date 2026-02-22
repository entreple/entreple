// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
    
    // Hamburger animation toggle
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Animations for modern fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Navbar Background blur on Scroll
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.7)';
            nav.style.borderBottom = '1px solid transparent';
        }
    });

    console.log("Entreple Digital Library Loaded.");
});