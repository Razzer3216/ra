function init() {
    setupNavigation();
    setupFormValidation();
    setupImageLazyLoading();
}

function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        navMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    } else {
        console.error('Navigation elements not found.');
    }
}

function setupFormValidation() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            const errors = [];
            if (!name) errors.push('Name is required.');
            if (!email) {
                errors.push('Email is required.');
            } else if (!validateEmail(email)) {
                errors.push('Email is not valid.');
            }
            if (!message) errors.push('Message is required.');

            const errorContainer = document.getElementById('formErrors');
            if (errors.length > 0) {
                errorContainer.innerHTML = errors.map(err => `<li>${err}</li>`).join('');
                errorContainer.style.display = 'block';
                return;
            } else {
                errorContainer.style.display = 'none';
                alert(`Thank you, ${name}! Your message has been sent.`);
                form.reset();
            }
        });
    } else {
        console.error('Form not found.');
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setupImageLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
