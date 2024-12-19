document.addEventListener('DOMContentLoaded', () => {
    const courseSections = document.querySelectorAll('.course');

    courseSections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#f0f8ff';
        });

        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = 'transparent';
        });
    });
});
