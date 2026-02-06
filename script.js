// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
    
    // Hamburger animation toggle (optional visual)
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Navbar Background on Scroll
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });

    console.log("Entreple V4 Loaded.");
});