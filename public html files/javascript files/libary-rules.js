document.querySelectorAll('.collapsible').forEach((section) => {
    section.addEventListener('click', () => {
        const content = section.nextElementSibling;
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
    });
});

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑ Back to Top';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
