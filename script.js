// ─── Mobile Menu Toggle ──────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isOpen ? 'none' : 'block';
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            mobileMenu.style.display = 'none';
        }
    });
}

// ─── FAQ Toggle ──────────────────────────────────────────────
function toggleFaq(index) {
    const items = document.querySelectorAll('.faq-item');
    const target = items[index];
    if (!target) return;

    const isOpen = target.classList.contains('open');
    // Close all
    items.forEach(el => el.classList.remove('open'));
    // Toggle target
    if (!isOpen) {
        target.classList.add('open');
    }
}

// ─── Newsletter ──────────────────────────────────────────────
function handleNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail');
    if (!email || !email.value) return;

    const container = document.getElementById('newsletterContainer');
    container.innerHTML = `
        <div class="subscribed">✓ ¡Suscrito! Gracias.</div>
    `;
}

// ─── Smooth scroll for anchor links ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});