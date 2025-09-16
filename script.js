// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && phone && email && message) {
            // Show success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // GTM Event - Contact Form Submission
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'contact_form_submit',
                    'event_category': 'engagement',
                    'event_label': 'contact_form',
                    'form_type': 'contact',
                    'value': 1
                });
            }
            
            this.reset();
        } else {
            showNotification('Por favor, preencha todos os campos.', 'error');
        }
    });

    // Button hover effects and click tracking
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-service, .btn-nav');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // GTM Event - Button Click
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonClass = this.className;
            
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'button_click',
                    'event_category': 'engagement',
                    'event_label': buttonText,
                    'button_type': buttonClass.includes('btn-primary') ? 'primary' : 
                                 buttonClass.includes('btn-secondary') ? 'secondary' : 
                                 buttonClass.includes('btn-service') ? 'service' : 'nav',
                    'value': 1
                });
            }
        });
    });

    // Service items hover effect and click tracking
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // GTM Event - Service View
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'service_view',
                    'event_category': 'services',
                    'event_label': serviceName,
                    'service_name': serviceName,
                    'value': 1
                });
            }
        });
    });

    // Differential items hover effect
    const differentialItems = document.querySelectorAll('.differential-item');
    
    differentialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.differential-item, .service-item, .about-item, .section-header');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // About section background animation
    const aboutSection = document.querySelector('.about');
    
    if (aboutSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const aboutRect = aboutSection.getBoundingClientRect();
            
            if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
                const progress = (window.innerHeight - aboutRect.top) / (window.innerHeight + aboutRect.height);
                aboutSection.style.background = `linear-gradient(135deg, 
                    rgba(26, 26, 26, ${0.8 + progress * 0.2}) 0%, 
                    rgba(45, 45, 45, ${0.8 + progress * 0.2}) 100%)`;
            }
        });
    }

    // WhatsApp click tracking
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"], .social-link i.fa-whatsapp');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'whatsapp_click',
                    'event_category': 'contact',
                    'event_label': 'whatsapp_contact',
                    'value': 1
                });
            }
        });
    });

    // Phone click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'phone_click',
                    'event_category': 'contact',
                    'event_label': 'phone_contact',
                    'value': 1
                });
            }
        });
    });

    // Email click tracking
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    'event': 'email_click',
                    'event_category': 'contact',
                    'event_label': 'email_contact',
                    'value': 1
                });
            }
        });
    });

    // Show cookie consent after 2 seconds
    setTimeout(function() {
        const cookieConsent = document.getElementById('cookieConsent');
        if (cookieConsent && !localStorage.getItem('cookieConsent')) {
            cookieConsent.classList.add('show');
        }
    }, 2000);
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Cookie consent functions
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    const cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.classList.remove('show');
    
    // Enable analytics and marketing cookies
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'consent_update',
            'analytics_storage': 'granted',
            'ad_storage': 'granted',
            'functionality_storage': 'granted'
        });
    }
}

function refuseCookies() {
    localStorage.setItem('cookieConsent', 'refused');
    const cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.classList.remove('show');
    
    // Disable analytics and marketing cookies
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'consent_update',
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'denied'
        });
    }
}

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 80px;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            padding: 20px 0;
            backdrop-filter: blur(10px);
            gap: 20px;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu li {
            margin: 10px 0;
        }

        .nav-menu a {
            font-size: 1.1rem;
            padding: 10px 20px;
            display: block;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll event handlers here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.differential-item, .service-item, .about-item');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add reveal animation CSS
const revealCSS = `
    .differential-item,
    .service-item,
    .about-item {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .differential-item.active,
    .service-item.active,
    .about-item.active {
        opacity: 1;
        transform: translateY(0);
    }
`;

const revealStyle = document.createElement('style');
revealStyle.textContent = revealCSS;
document.head.appendChild(revealStyle);
