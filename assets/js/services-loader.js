// Services page section loader
document.addEventListener('DOMContentLoaded', async function() {
    // Define sections to load
    const sections = [
        { id: 'header-section', file: 'sections/services/header.html' },
        { id: 'hero-section', file: 'sections/services/hero.html' },
        { id: 'overview-section', file: 'sections/services/overview.html' },
        { id: 'capabilities-section', file: 'sections/services/capabilities.html' },
        { id: 'process-section', file: 'sections/services/process.html' },
        { id: 'quality-section', file: 'sections/services/quality.html' },
        { id: 'cta-section', file: 'sections/services/cta.html' },
        { id: 'footer-section', file: 'sections/services/footer.html' }
    ];

    // Load each section
    for (const section of sections) {
        try {
            const response = await fetch(section.file);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(section.id).innerHTML = html;
                console.log(`Loaded section: ${section.file}`);
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

// Initialize interactive elements
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

    // Mark services as active in navigation
    const servicesLink = document.querySelector('nav a[href="services.html"]');
    if (servicesLink) {
        // Remove active from all nav links
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        // Add active to services
        servicesLink.classList.add('active');
    }
}