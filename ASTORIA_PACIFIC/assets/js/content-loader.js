// Content Loader for Astoria Pacific Website

// Load the content data when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});

// Main function to load content from JSON file
async function loadContent() {
    try {
        // Fetch the content JSON file
        const response = await fetch('assets/data/content.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`Failed to load content: ${response.status} ${response.statusText}`);
        }
        
        // Parse JSON data
        const contentData = await response.json();
        
        // Populate the page with content
        populatePageContent(contentData);
        
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Populate the page with content from the JSON data
function populatePageContent(data) {
    // Determine which page we're on
    const currentPage = getCurrentPage();
    
    // Set page title and meta description
    document.title = data.meta.siteTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', data.meta.siteDescription);
    }
    
    // Populate navigation
    populateNavigation(data.navigation.main);
    
    // Populate page-specific content
    switch (currentPage) {
        case 'index':
            populateHomePage(data.homePage);
            break;
        case 'services':
            // populateServicesPage(data.servicesPage);
            break;
        case 'case-studies':
            // populateCaseStudiesPage(data.caseStudiesPage);
            break;
        case 'dfam':
            // populateDfamPage(data.dfamPage);
            break;
        case 'contact':
            // populateContactPage(data.contactPage);
            break;
    }
    
    // Populate footer (common to all pages)
    populateFooter(data.footer);
}

// Determine the current page
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (!page || page === '' || page === 'index.html') {
        return 'index';
    } else {
        return page.replace('.html', '');
    }
}

// Populate navigation menu
function populateNavigation(navItems) {
    const navList = document.querySelector('nav ul');
    if (!navList) return;
    
    // Clear existing nav items
    navList.innerHTML = '';
    
    // Add nav items from data
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = item.url;
        a.textContent = item.label;
        
        // Mark the current page as active
        if (getCurrentPage() === item.url.replace('.html', '')) {
            a.classList.add('active');
        }
        
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Populate homepage content
function populateHomePage(homeData) {
    // Hero Section
    populateHeroSection(homeData.hero);
    
    // Features Section
    populateFeaturesSection(homeData.features);
    
    // Materials Section
    populateMaterialsSection(homeData.materials);
    
    // Services Section
    populateServicesSection(homeData.services);
    
    // Case Study Section
    populateCaseStudySection(homeData.caseStudy);
    
    // Partnership Section
    populatePartnershipSection(homeData.partnership);
    
    // DFAM Section
    populateDfamSection(homeData.dfam);
    
    // Testimonial Section
    populateTestimonialSection(homeData.testimonial);
    
    // CTA Section
    populateCtaSection(homeData.cta);
}

// Populate Hero Section
function populateHeroSection(heroData) {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const h1 = heroSection.querySelector('h1');
    const p = heroSection.querySelector('p');
    const buttons = heroSection.querySelectorAll('.hero-buttons a');
    
    if (h1) h1.textContent = heroData.heading;
    if (p) p.textContent = heroData.subheading;
    
    if (buttons && buttons.length >= 2) {
        buttons[0].textContent = heroData.buttons[0].label;
        buttons[0].href = heroData.buttons[0].url;
        buttons[1].textContent = heroData.buttons[1].label;
        buttons[1].href = heroData.buttons[1].url;
    }
}

// Populate Features Section
function populateFeaturesSection(featuresData) {
    const featuresSection = document.querySelector('.features');
    if (!featuresSection) return;
    
    const heading = featuresSection.querySelector('h2');
    const featureCards = featuresSection.querySelectorAll('.feature-card');
    
    if (heading) heading.textContent = featuresData.heading;
    
    if (featureCards && featureCards.length >= 4) {
        for (let i = 0; i < Math.min(featureCards.length, featuresData.items.length); i++) {
            const card = featureCards[i];
            const data = featuresData.items[i];
            
            const icon = card.querySelector('.feature-icon img');
            const title = card.querySelector('h3');
            const text = card.querySelector('p');
            
            if (icon) icon.src = data.icon;
            if (title) title.textContent = data.title;
            if (text) text.textContent = data.text;
        }
    }
}

// Populate Materials Section
function populateMaterialsSection(materialsData) {
    const materialsSection = document.querySelector('.materials');
    if (!materialsSection) return;
    
    const heading = materialsSection.querySelector('.section-header h2');
    const subheading = materialsSection.querySelector('.section-header p');
    const specsList = materialsSection.querySelectorAll('.specs-list li');
    const button = materialsSection.querySelector('.materials-specs a.button');
    
    if (heading) heading.textContent = materialsData.heading;
    if (subheading) subheading.textContent = materialsData.subheading;
    
    if (specsList && specsList.length >= 5) {
        for (let i = 0; i < Math.min(specsList.length, materialsData.specs.length); i++) {
            const spec = specsList[i];
            const data = materialsData.specs[i];
            
            const icon = spec.querySelector('.spec-icon img');
            const name = spec.querySelector('.spec-detail strong');
            const value = spec.querySelector('.spec-detail span:not(strong)');
            
            if (icon) icon.src = data.icon;
            if (name) name.textContent = data.name + ':';
            if (value) value.textContent = data.value;
        }
    }
    
    if (button) {
        button.textContent = materialsData.button.label;
        button.href = materialsData.button.url;
    }
}

// Populate Services Section
function populateServicesSection(servicesData) {
    const servicesSection = document.querySelector('.services-overview');
    if (!servicesSection) return;
    
    const heading = servicesSection.querySelector('.section-header h2');
    const subheading = servicesSection.querySelector('.section-header p');
    const serviceCards = servicesSection.querySelectorAll('.service-card');
    const ctaButton = servicesSection.querySelector('.services-cta a.button');
    
    if (heading) heading.textContent = servicesData.heading;
    if (subheading) subheading.textContent = servicesData.subheading;
    
    if (serviceCards && serviceCards.length >= 3) {
        for (let i = 0; i < Math.min(serviceCards.length, servicesData.items.length); i++) {
            const card = serviceCards[i];
            const data = servicesData.items[i];
            
            const image = card.querySelector('img');
            const title = card.querySelector('h3');
            const text = card.querySelector('p');
            const link = card.querySelector('a.service-link');
            
            if (image) {
                image.src = data.image;
                image.alt = data.title;
            }
            if (title) title.textContent = data.title;
            if (text) text.textContent = data.text;
            if (link) {
                link.textContent = data.link.label;
                link.href = data.link.url;
            }
        }
    }
    
    if (ctaButton) {
        ctaButton.textContent = servicesData.ctaButton.label;
        ctaButton.href = servicesData.ctaButton.url;
    }
}

// Populate Case Study Section
function populateCaseStudySection(caseStudyData) {
    const caseStudySection = document.querySelector('.case-study-highlight');
    if (!caseStudySection) return;
    
    const tag = caseStudySection.querySelector('.tag');
    const heading = caseStudySection.querySelector('h2');
    const text = caseStudySection.querySelector('.case-study-text > p');
    const metrics = caseStudySection.querySelectorAll('.metric');
    const button = caseStudySection.querySelector('.case-study-text a.button');
    const image = caseStudySection.querySelector('.case-study-image img');
    
    if (tag) tag.textContent = caseStudyData.tag;
    if (heading) heading.textContent = caseStudyData.heading;
    if (text) text.textContent = caseStudyData.text;
    
    if (metrics && metrics.length >= 3) {
        for (let i = 0; i < Math.min(metrics.length, caseStudyData.metrics.length); i++) {
            const metric = metrics[i];
            const data = caseStudyData.metrics[i];
            
            const value = metric.querySelector('.metric-value');
            const label = metric.querySelector('.metric-label');
            
            if (value) value.textContent = data.value;
            if (label) label.textContent = data.label;
        }
    }
    
    if (button) {
        button.textContent = caseStudyData.button.label;
        button.href = caseStudyData.button.url;
    }
    
    if (image) {
        image.src = caseStudyData.image;
        image.alt = caseStudyData.heading;
    }
}

// Populate Partnership Section
function populatePartnershipSection(partnershipData) {
    const partnershipSection = document.querySelector('.partnership');
    if (!partnershipSection) return;
    
    const heading = partnershipSection.querySelector('h2');
    const text = partnershipSection.querySelector('.partnership-text > p');
    const benefits = partnershipSection.querySelectorAll('.partnership-benefits li');
    const button = partnershipSection.querySelector('.partnership-text a.button');
    const logo = partnershipSection.querySelector('.partnership-logo img');
    
    if (heading) heading.textContent = partnershipData.heading;
    if (text) text.textContent = partnershipData.text;
    
    if (benefits) {
        for (let i = 0; i < Math.min(benefits.length, partnershipData.benefits.length); i++) {
            benefits[i].textContent = partnershipData.benefits[i];
        }
    }
    
    if (button) {
        button.textContent = partnershipData.button.label;
        button.href = partnershipData.button.url;
    }
    
    if (logo) {
        logo.src = partnershipData.logo;
        logo.alt = partnershipData.heading;
    }
}

// Populate DFAM Section
function populateDfamSection(dfamData) {
    const dfamSection = document.querySelector('.dfam-teaser');
    if (!dfamSection) return;
    
    const heading = dfamSection.querySelector('h2');
    const text = dfamSection.querySelector('.dfam-content > p');
    const benefits = dfamSection.querySelectorAll('.dfam-benefits li');
    const button = dfamSection.querySelector('.dfam-content a.button');
    const image = dfamSection.querySelector('.dfam-image img');
    
    if (heading) heading.textContent = dfamData.heading;
    if (text) text.textContent = dfamData.text;
    
    if (benefits) {
        for (let i = 0; i < Math.min(benefits.length, dfamData.benefits.length); i++) {
            benefits[i].textContent = dfamData.benefits[i];
        }
    }
    
    if (button) {
        button.textContent = dfamData.button.label;
        button.href = dfamData.button.url;
    }
    
    if (image) {
        image.src = dfamData.image;
        image.alt = dfamData.heading;
    }
}

// Populate Testimonial Section
function populateTestimonialSection(testimonialData) {
    const testimonialSection = document.querySelector('.testimonials');
    if (!testimonialSection) return;
    
    const heading = testimonialSection.querySelector('h2');
    const quote = testimonialSection.querySelector('.testimonial-content p');
    const author = testimonialSection.querySelector('.testimonial-author p');
    
    if (heading) heading.textContent = testimonialData.heading;
    if (quote) quote.textContent = testimonialData.quote;
    if (author) author.innerHTML = testimonialData.author; // Using innerHTML to handle the <strong> tag
}

// Populate CTA Section
function populateCtaSection(ctaData) {
    const ctaSection = document.querySelector('.cta-section');
    if (!ctaSection) return;
    
    const heading = ctaSection.querySelector('h2');
    const text = ctaSection.querySelector('p');
    const button = ctaSection.querySelector('a.cta-button');
    
    if (heading) heading.textContent = ctaData.heading;
    if (text) text.textContent = ctaData.text;
    
    if (button) {
        button.textContent = ctaData.button.label;
        button.href = ctaData.button.url;
    }
}

// Populate Footer (common to all pages)
function populateFooter(footerData) {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    const companyDesc = footer.querySelector('.footer-logo p');
    
    const solutionsHeading = footer.querySelector('.footer-links:nth-of-type(1) h4');
    const solutionsLinks = footer.querySelectorAll('.footer-links:nth-of-type(1) li a');
    
    const resourcesHeading = footer.querySelector('.footer-links:nth-of-type(2) h4');
    const resourcesLinks = footer.querySelectorAll('.footer-links:nth-of-type(2) li a');
    
    const contactHeading = footer.querySelector('.footer-contact h4');
    const contactInfo = footer.querySelector('.footer-contact address');
    
    const copyright = footer.querySelector('.footer-bottom p');
    
    if (companyDesc) companyDesc.textContent = footerData.companyDescription;
    
    if (solutionsHeading) solutionsHeading.textContent = footerData.solutions.heading;
    if (solutionsLinks) {
        for (let i = 0; i < Math.min(solutionsLinks.length, footerData.solutions.links.length); i++) {
            solutionsLinks[i].textContent = footerData.solutions.links[i].label;
            solutionsLinks[i].href = footerData.solutions.links[i].url;
        }
    }
    
    if (resourcesHeading) resourcesHeading.textContent = footerData.resources.heading;
    if (resourcesLinks) {
        for (let i = 0; i < Math.min(resourcesLinks.length, footerData.resources.links.length); i++) {
            resourcesLinks[i].textContent = footerData.resources.links[i].label;
            resourcesLinks[i].href = footerData.resources.links[i].url;
        }
    }
    
    if (contactHeading) contactHeading.textContent = footerData.contact.heading;
    if (contactInfo) contactInfo.innerHTML = footerData.contact.info.replace(/\n/g, '<br>');
    
    if (copyright) copyright.innerHTML = footerData.copyright;
}