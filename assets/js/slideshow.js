/**
 * Hero Background Slideshow
 * Creates a fading slideshow for the hero section background
 * Transitions between 5 images every 10 seconds with a 3-second fade
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slideshow
    initHeroSlideshow();
});

function initHeroSlideshow() {
    // Image paths - update these to match your actual image paths
    const slidePaths = [
        'assets/images/hero/hero-background-1.jpg',
        'assets/images/hero/hero-background-2.jpg',
        'assets/images/hero/hero-background-3.jpg',
        'assets/images/hero/hero-background-4.jpg',
        'assets/images/hero/hero-background-5.jpg'
    ];
    
    // Get the hero section
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Create slideshow container
    const slideshowContainer = document.createElement('div');
    slideshowContainer.className = 'hero-slideshow';
    
    // Create slides
    slidePaths.forEach((path, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide';
        slide.style.backgroundImage = `url(${path})`;
        
        // Make the first slide active initially
        if (index === 0) {
            slide.classList.add('active');
        }
        
        slideshowContainer.appendChild(slide);
    });
    
    // Insert slideshow container at the beginning of hero section
    heroSection.insertBefore(slideshowContainer, heroSection.firstChild);
    
    // Set up rotation
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    
    function rotateSlides() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new current slide
        slides[currentSlide].classList.add('active');
    }
    
    // Change slides every 10 seconds
    setInterval(rotateSlides, 10000);
}