document.addEventListener('DOMContentLoaded', () => {
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        course.addEventListener('mouseover', () => {
            course.style.backgroundColor = '#f0fff0';
        });

        course.addEventListener('mouseout', () => {
            course.style.backgroundColor = '#f9f9f9';
        });
    });
});
