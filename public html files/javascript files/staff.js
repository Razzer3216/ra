document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const content = this.querySelector('p');
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
    });
});
