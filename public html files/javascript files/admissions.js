document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.steps ol li');
    steps.forEach(step => {
        step.addEventListener('mouseover', () => {
            step.style.color = '#27ae60';
            step.style.fontWeight = 'bold';
        });

        step.addEventListener('mouseout', () => {
            step.style.color = '';
            step.style.fontWeight = '';
        });
    });

    const button = document.querySelector('.cta-button');
    if (button) {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#2ecc71';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#27ae60';
        });
    }
});
