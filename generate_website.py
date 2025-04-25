import os
import datetime

def create_file(path, content=''):
    """Create a file with the specified content."""
    with open(path, 'w') as file:
        file.write(content)
    print(f"Created: {path}")

def create_directory(path):
    """Create a directory if it doesn't exist."""
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")

def generate_website_structure():
    """Generate the entire website structure for Astoria Pacific."""
    # Root directory
    root_dir = "ASTORIA_PACIFIC"
    create_directory(root_dir)
    
    # Create main HTML files
    html_files = ['index.html', 'services.html', 'case-studies.html', 'dfam.html', 'contact.html']
    for file in html_files:
        file_path = os.path.join(root_dir, file)
        page_name = file.replace('.html', '')
        title = page_name.replace('-', ' ').title()
        if page_name == 'index':
            title = 'Home'
        elif page_name == 'dfam':
            title = 'DFAM'
            
        html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Astoria Pacific - Specialists in 3D printed fluidics and ISO13485 certified medical devices">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <title>Astoria Pacific - {title}</title>
</head>
<body>
    <!-- Header will be included here -->
    
    <main>
        <!-- Content for {title} page -->
    </main>
    
    <!-- Footer will be included here -->
    
    <script src="assets/js/main.js"></script>
</body>
</html>"""
        create_file(file_path, html_content)
    
    # Create asset directories
    asset_dirs = [
        os.path.join(root_dir, 'assets', 'css'),
        os.path.join(root_dir, 'assets', 'js'),
        os.path.join(root_dir, 'assets', 'images', 'logo'),
        os.path.join(root_dir, 'assets', 'images', 'hero'),
        os.path.join(root_dir, 'assets', 'images', 'services'),
        os.path.join(root_dir, 'assets', 'images', 'case-studies'),
        os.path.join(root_dir, 'assets', 'images', 'dfam'),
        os.path.join(root_dir, 'assets', 'images', 'icons'),
        os.path.join(root_dir, 'assets', 'fonts')
    ]
    
    for directory in asset_dirs:
        create_directory(directory)
    
    # Create CSS files
    css_main_content = """/* Main Stylesheet for Astoria Pacific Website */

/* Global Styles */
:root {
    /* Color variables - adjust to match company branding */
    --primary-color: #0066cc;
    --secondary-color: #004d99;
    --accent-color: #66b3ff;
    --light-color: #f5f8fa;
    --dark-color: #333333;
    --text-color: #444444;
    --border-color: #e0e0e0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: #ffffff;
}

.container {
    width: 85%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
}

a:hover {
    color: var(--secondary-color);
}

img {
    max-width: 100%;
    height: auto;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
    color: var(--dark-color);
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.75rem;
}

h4 {
    font-size: 1.5rem;
}

p {
    margin-bottom: 1.5rem;
}

/* Buttons */
.button, 
.cta-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover, 
.cta-button:hover {
    background-color: var(--secondary-color);
    color: white;
}

/* Header Styles */
header {
    padding: 20px 0;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 60px;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    font-weight: 600;
    padding: 10px;
}

/* Hero Section */
.hero {
    padding: 80px 0;
    background-color: var(--light-color);
    text-align: center;
}

.hero h1 {
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 30px;
}

/* Footer Styles */
footer {
    background-color: var(--dark-color);
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.footer-logo,
.footer-links,
.footer-contact {
    margin-bottom: 20px;
}

.footer-logo img {
    height: 50px;
    margin-bottom: 15px;
}

.footer-links h4,
.footer-contact h4 {
    color: white;
    margin-bottom: 15px;
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li {
    margin-bottom: 8px;
}

.footer-links ul li a {
    color: var(--accent-color);
}

.footer-links ul li a:hover {
    color: white;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 20px;
    text-align: center;
}

/* CTA Section */
.cta-section {
    background-color: var(--primary-color);
    color: white;
    padding: 60px 0;
    text-align: center;
}

.cta-section h2 {
    color: white;
    margin-bottom: 15px;
}

.cta-section p {
    font-size: 1.1rem;
    margin-bottom: 25px;
}

.cta-button {
    background-color: white;
    color: var(--primary-color);
}

.cta-button:hover {
    background-color: var(--light-color);
    color: var(--primary-color);
}

/* Other common sections and components will be added here */
"""
    
    css_responsive_content = """/* Responsive Styles for Astoria Pacific Website */

/* Tablets */
@media screen and (max-width: 992px) {
    h1 {
        font-size: 2.2rem;
    }
    
    h2 {
        font-size: 1.8rem;
    }
    
    .container {
        width: 90%;
    }
    
    /* Adjust navigation for tablets */
    nav ul {
        gap: 10px;
    }
}

/* Mobile Phones */
@media screen and (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.6rem;
    }
    
    h3 {
        font-size: 1.4rem;
    }
    
    /* Header adjustments for mobile */
    header .container {
        flex-direction: column;
    }
    
    .logo {
        margin-bottom: 15px;
    }
    
    nav ul {
        flex-direction: column;
        align-items: center;
    }
    
    nav ul li {
        margin: 5px 0;
    }
    
    /* Footer adjustments for mobile */
    .footer-content {
        flex-direction: column;
    }
    
    .footer-logo,
    .footer-links,
    .footer-contact {
        width: 100%;
        margin-bottom: 30px;
    }
}

/* Small Mobile Devices */
@media screen and (max-width: 480px) {
    .container {
        width: 95%;
        padding: 0 10px;
    }
    
    .hero {
        padding: 50px 0;
    }
    
    .cta-section {
        padding: 40px 0;
    }
}
"""
    
    create_file(os.path.join(root_dir, 'assets', 'css', 'main.css'), css_main_content)
    create_file(os.path.join(root_dir, 'assets', 'css', 'responsive.css'), css_responsive_content)
    
    # Create JS file
    js_content = """// Main JavaScript file for Astoria Pacific Website

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
"""
    
    create_file(os.path.join(root_dir, 'assets', 'js', 'main.js'), js_content)
    
    # Create includes directory and files
    includes_dir = os.path.join(root_dir, 'includes')
    create_directory(includes_dir)
    
    # Header include
    header_content = """<!-- Header Component -->
<header>
    <div class="container">
        <div class="logo">
            <a href="index.html">
                <img src="assets/images/logo/astoria-pacific-logo.png" alt="Astoria Pacific Logo">
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="case-studies.html">Case Studies</a></li>
                <li><a href="dfam.html">DFAM</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </div>
</header>"""
    
    create_file(os.path.join(includes_dir, 'header.html'), header_content)
    
    # Footer include
    current_year = datetime.datetime.now().year
    footer_content = f"""<!-- Footer Component -->
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo">
                <img src="assets/images/logo/astoria-pacific-logo.png" alt="Astoria Pacific Logo">
                <p>Specialists in 3D printed fluidics and ISO13485 certified medical devices</p>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="case-studies.html">Case Studies</a></li>
                    <li><a href="dfam.html">DFAM</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <address>
                    Astoria Pacific, Inc.<br>
                    Street Address<br>
                    City, State ZIP<br>
                    Phone: (XXX) XXX-XXXX<br>
                    Email: info@astoriapacific.com
                </address>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; {current_year} Astoria Pacific, Inc. All rights reserved.</p>
        </div>
    </div>
</footer>"""
    
    create_file(os.path.join(includes_dir, 'footer.html'), footer_content)
    
    # CTA include
    cta_content = """<!-- Call-to-Action Component -->
<section class="cta-section">
    <div class="container">
        <h2>Ready to innovate with 3D printed fluidics?</h2>
        <p>Contact our team to discuss your next project</p>
        <a href="contact.html" class="cta-button">Get in Touch</a>
    </div>
</section>"""
    
    create_file(os.path.join(includes_dir, 'cta.html'), cta_content)
    
    # Create placeholder image files
    placeholder_images = [
        os.path.join(root_dir, 'assets', 'images', 'logo', 'astoria-pacific-logo.png'),
        os.path.join(root_dir, 'assets', 'images', 'hero', 'hero-image.jpg'),
        os.path.join(root_dir, 'assets', 'images', 'icons', 'iso13485-badge.png')
    ]
    
    for image_path in placeholder_images:
        create_file(image_path)
    
    print("\nWebsite file structure created successfully!")

if __name__ == "__main__":
    generate_website_structure()