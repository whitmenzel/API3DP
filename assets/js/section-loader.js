// Simple section loader for GitHub Pages
document.addEventListener('DOMContentLoaded', async function() {
    // Define sections to load
    const sections = [
        { id: 'header-section', file: 'sections/home/header.html' },
        { id: 'hero-section', file: 'sections/home/hero.html' },
        { id: 'features-section', file: 'sections/home/features.html' },
        { id: 'materials-section', file: 'sections/home/materials.html' },
        { id: 'services-section', file: 'sections/home/services.html' },
        { id: 'case-study-section', file: 'sections/home/case-study.html' },
        { id: 'case-studies-preview-section', file: 'sections/home/case-studies-preview.html' },
        { id: 'partnership-section', file: 'sections/home/partnership.html' },
        { id: 'dfam-section', file: 'sections/home/dfam.html' },
        { id: 'testimonials-section', file: 'sections/home/testimonials.html' },
        { id: 'cta-section', file: 'sections/home/cta.html' },
        { id: 'footer-section', file: 'sections/home/footer.html' }
    ];

    // Load each section
    for (const section of sections) {
        try {
            const response = await fetch(section.file);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(section.id).innerHTML = html;
            } else {
                console.error(`Failed to load ${section.file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error loading ${section.file}:`, error);
        }
    }

    // Initialize any interactive elements after all sections are loaded
    initializeInteractiveElements();
});

// Initialize interactive elements that might be in the loaded sections
function initializeInteractiveElements() {
    // Re-initialize smooth scrolling for any new anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize hero slideshow if the function exists
    if (typeof initHeroSlideshow === 'function') {
        initHeroSlideshow();
    }
}