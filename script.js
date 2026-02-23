// Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
    
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
    
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // Glass Navbar
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    console.log("Entreple V6: Minimalist Architecture Loaded.");
});