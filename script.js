// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Search Modal
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.getElementById('search-modal');
const closeModal = document.querySelector('.close-modal');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        if (searchInput) {
            searchInput.focus();
        }
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });
}

// Close modal when clicking outside
if (searchModal) {
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });
}

// Accessibility Widget
const accessibilityToggle = document.querySelector('.accessibility-toggle');
const accessibilityMenu = document.querySelector('.accessibility-menu');
const highContrastCheck = document.getElementById('high-contrast');
const largeTextCheck = document.getElementById('large-text');
const readableFontCheck = document.getElementById('readable-font');
const resetAccessibility = document.getElementById('reset-accessibility');

if (accessibilityToggle && accessibilityMenu) {
    accessibilityToggle.addEventListener('click', () => {
        accessibilityMenu.classList.toggle('active');
    });
}

// High Contrast Toggle
if (highContrastCheck) {
    highContrastCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('high-contrast');
            localStorage.setItem('highContrast', 'true');
        } else {
            document.body.classList.remove('high-contrast');
            localStorage.setItem('highContrast', 'false');
        }
    });
}

// Large Text Toggle
if (largeTextCheck) {
    largeTextCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('large-text');
            localStorage.setItem('largeText', 'true');
        } else {
            document.body.classList.remove('large-text');
            localStorage.setItem('largeText', 'false');
        }
    });
}

// Readable Font Toggle
if (readableFontCheck) {
    readableFontCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('readable-font');
            localStorage.setItem('readableFont', 'true');
        } else {
            document.body.classList.remove('readable-font');
            localStorage.setItem('readableFont', 'false');
        }
    });
}

// Reset Accessibility
if (resetAccessibility) {
    resetAccessibility.addEventListener('click', () => {
        document.body.classList.remove('high-contrast', 'large-text', 'readable-font');
        if (highContrastCheck) highContrastCheck.checked = false;
        if (largeTextCheck) largeTextCheck.checked = false;
        if (readableFontCheck) readableFontCheck.checked = false;
        localStorage.removeItem('highContrast');
        localStorage.removeItem('largeText');
        localStorage.removeItem('readableFont');
    });
}

// Load saved accessibility preferences
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
        if (highContrastCheck) highContrastCheck.checked = true;
    }
    if (localStorage.getItem('largeText') === 'true') {
        document.body.classList.add('large-text');
        if (largeTextCheck) largeTextCheck.checked = true;
    }
    if (localStorage.getItem('readableFont') === 'true') {
        document.body.classList.add('readable-font');
        if (readableFontCheck) readableFontCheck.checked = true;
    }
});

// Customer Login Form
const loginForm = document.getElementById('login-form');
const forgotPasswordLink = document.getElementById('forgot-password');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const backToLoginLink = document.getElementById('back-to-login');
const customerDashboard = document.getElementById('customer-dashboard');
const logoutBtn = document.getElementById('logout-btn');

if (forgotPasswordLink && forgotPasswordForm) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (loginForm) loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
    });
}

if (backToLoginLink && loginForm) {
    backToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, this would authenticate with a backend
        // For demo purposes, we'll just show the dashboard
        if (loginForm && customerDashboard) {
            loginForm.style.display = 'none';
            if (forgotPasswordForm) forgotPasswordForm.style.display = 'none';
            customerDashboard.style.display = 'block';
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (customerDashboard) customerDashboard.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
        if (forgotPasswordForm) forgotPasswordForm.style.display = 'none';
    });
}

// ZIP Code Checker
const checkZipBtn = document.getElementById('check-zip');
const zipCodeInput = document.getElementById('zip-code');
const zipResult = document.getElementById('zip-result');

if (checkZipBtn && zipCodeInput && zipResult) {
    checkZipBtn.addEventListener('click', () => {
        const zipCode = zipCodeInput.value.trim();
        if (zipCode.length === 5 && /^\d+$/.test(zipCode)) {
            // In a real application, this would check against a database
            // For demo purposes, we'll show a generic response
            zipResult.style.display = 'block';
            zipResult.style.background = 'var(--light-gray)';
            zipResult.style.color = 'var(--dark-gray)';
            zipResult.innerHTML = `
                <strong>Service Available!</strong><br>
                We service the ${zipCode} area. 
                <a href="#quote-form" style="color: var(--primary-green); font-weight: 600;">Request a quote below</a> or call us at <a href="tel:+18001234567" style="color: var(--primary-green);">(800) 123-4567</a>.
            `;
        } else {
            zipResult.style.display = 'block';
            zipResult.style.background = '#fff3cd';
            zipResult.style.color = '#856404';
            zipResult.innerHTML = 'Please enter a valid 5-digit ZIP code.';
        }
    });
}

// Quote Form Submission
const quoteForm = document.getElementById('quote-form');
const quoteSuccess = document.getElementById('quote-success');

if (quoteForm && quoteSuccess) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, this would submit to a backend
        quoteForm.style.display = 'none';
        quoteSuccess.style.display = 'block';
        
        // Scroll to success message
        quoteSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Reset Form
const resetForm = document.getElementById('reset-form');
if (resetForm) {
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, this would send a password reset email
        alert('Password reset link has been sent to your email address.');
        if (forgotPasswordForm) forgotPasswordForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
    });
}

// Newsletter Subscription
const newsletterForm = document.querySelector('form[action*="newsletter"], form:has(input[type="email"][placeholder*="email"])');
if (newsletterForm && !newsletterForm.id) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Close accessibility menu when clicking outside
document.addEventListener('click', (e) => {
    if (accessibilityMenu && accessibilityToggle) {
        if (!accessibilityMenu.contains(e.target) && !accessibilityToggle.contains(e.target)) {
            accessibilityMenu.classList.remove('active');
        }
    }
});

// Analytics placeholder (replace with actual analytics code)
if (typeof gtag !== 'undefined') {
    // Google Analytics tracking would go here
    console.log('Analytics initialized');
}


