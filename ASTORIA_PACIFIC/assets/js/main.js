// Main JavaScript file for Astoria Pacific Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle functionality can be added here
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Other interactive elements can be initialized here
});
