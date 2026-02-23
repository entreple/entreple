// Mobile Menu Logic
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
    
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
    
    // Scroll kilitleme (Menü açıkken arka plan kaymasın diye)
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Sinematik Reveal (Aşağıdan Yukarı Kayarak Belirme) Animasyonları
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Bir kere çalıştıktan sonra performansı artırmak için dinlemeyi bırakır
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // Akıllı Cam (Glassmorphism) Navbar Scroll Efekti
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
            nav.style.background = 'rgba(8, 12, 21, 0.85)'; // Marka rengine uyumlu transparanlık
        } else {
            nav.classList.remove('scrolled');
            nav.style.background = 'rgba(8, 12, 21, 0.5)';
        }
    });

    console.log("Entreple 'The Hook' Engine Initialized.");
});