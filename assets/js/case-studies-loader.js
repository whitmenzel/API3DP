// Case studies page section loader
document.addEventListener('DOMContentLoaded', async function() {
    // Define sections to load
    const sections = [
        { id: 'header-section', file: 'sections/case-studies/header.html' },
        { id: 'hero-section', file: 'sections/case-studies/hero.html' },
        { id: 'studies-grid-section', file: 'sections/case-studies/studies-grid.html' },
        { id: 'footer-section', file: 'sections/case-studies/footer.html' }
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
    
    // Debug: Check if images are loading
    setTimeout(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.complete || img.naturalHeight === 0) {
                console.error('Broken image:', img.src);
            } else {
                console.log('Image loaded successfully:', img.src);
            }
        });
    }, 1000);
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
}