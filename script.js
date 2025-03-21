// Waitlist form handling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize forms
    initForms();

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle video playback
    const video = document.querySelector('video');
    if (video) {
        // Ensure video starts playing when it comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(video);

        // Handle video loading error
        video.addEventListener('error', () => {
            video.style.display = 'none';
            video.parentElement.innerHTML = '<p>Video preview currently unavailable</p>';
        });
    }

    // Add animation to feature cards
    const cards = document.querySelectorAll('.feature-card');
    const observerCards = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observerCards.observe(card);
    });
});

// Scroll Animations
function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const elementInView = (el, offset = 50) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('in-view');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 50)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Initial check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Form Handling
function initForms() {
    const waitlistForms = document.querySelectorAll('.waitlist-form');
    
    waitlistForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const submitButton = form.querySelector('button[type="submit"]');
            const email = emailInput.value;
            
            // Disable form while submitting
            emailInput.disabled = true;
            submitButton.disabled = true;
            
            try {
                // Here you would typically send this to your backend
                // For now, we'll just show a success message
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
                
                showSuccessMessage(form);
                
                // Clear and reset form
                emailInput.value = '';
                emailInput.disabled = false;
                submitButton.disabled = false;
            } catch (error) {
                showErrorMessage(form);
                emailInput.disabled = false;
                submitButton.disabled = false;
            }
        });
    });
}

// Show success message
function showSuccessMessage(form) {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message animate-fadeUp';
    successMessage.textContent = 'Thanks for joining! We\'ll be in touch soon.';
    
    // Style the success message
    successMessage.style.cssText = `
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: var(--border-radius);
        margin-top: 1rem;
        text-align: center;
    `;
    
    // Remove any existing messages
    removeMessages(form);
    
    // Add the new message
    form.appendChild(successMessage);
    
    // Remove the message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Show error message
function showErrorMessage(form) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message animate-fadeUp';
    errorMessage.textContent = 'Oops! Something went wrong. Please try again.';
    
    // Style the error message
    errorMessage.style.cssText = `
        background-color: #dc3545;
        color: white;
        padding: 1rem;
        border-radius: var(--border-radius);
        margin-top: 1rem;
        text-align: center;
    `;
    
    // Remove any existing messages
    removeMessages(form);
    
    // Add the new message
    form.appendChild(errorMessage);
    
    // Remove the message after 5 seconds
    setTimeout(() => {
        errorMessage.remove();
    }, 5000);
}

// Remove existing messages
function removeMessages(form) {
    const existingMessages = form.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(message => message.remove());
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Add fade-in class styles
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style); 